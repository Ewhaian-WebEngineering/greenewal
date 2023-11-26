import "./Feedback.css";
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ReactComponent as Dia } from "../../../assets/images/SpeakerPage/dia.svg";
import { auth } from '../../../_actions/user_action';

const Feedback = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [Content, setContent] = useState("")
    const [feedbacks, setFeedbacks] = useState([]);
    const [StudentID, setStudentID] = useState("")
    useEffect(() => {
        dispatch(auth()).then(response => {
            if (response.payload.isAuth) {
                setStudentID(response.payload.studentID);
                return
            } else {
                navigate('/login');
            }
        })

    }, []);

    /* 안될경우 코드
    useEffect(() => {
        // 페이지 새로 고침 시 로컬 스토리지에서 studentID 불러오기
        const storedStudentID = localStorage.getItem('studentID');
        setStudentID(storedStudentID || "기본값");

        const fetchData = async () => {
            try {
                const response = await dispatch(auth());
                if (response.payload.isAuth) {
                    if (response.payload.studentID) {
                        setStudentID(response.payload.studentID);
                        // 페이지 로딩 시 studentID를 로컬 스토리지에 저장
                        localStorage.setItem('studentID', response.payload.studentID);
                    } else {
                        setStudentID("오류");
                    }
                } else {
                    setStudentID("로그인 안함");
                    navigate('/login');
                }
            } catch (error) {
                console.error("데이터를 가져오는 동안 오류 발생:", error);
            }
        };

        fetchData();
    }, [dispatch, navigate]); */

    useEffect(() => {
        axios.get('/api/feedback/read')
            .then(response => {
                setFeedbacks(response.data);
            });
    }, []); // 마운트될 때 한 번만 실행되도록 빈 배열 전달

    const onContentHandler = (event) => {
        setContent(event.currentTarget.value)
    }
    const deleteClick = (e) => {
        console.log(e.target.id)
        axios.delete('/api/feedback/delete', { data: { _id: e.target.id } })
            .then(() => {
                // console.log('delete성공');
                window.location.reload(); // 삭제 성공 후 페이지 새로고침
            })
            .catch(() => {
                // console.log('delete실패');
            })
    }
    const onSubmitHandler = (event) => {
        //event.preventDefault();

        axios.post('/api/feedback/upload', {
            content: Content,
            studentID: StudentID
        })
            .then(function (response) {
                // console.log(response);
            })
            .catch(function (error) {
                // console.log(error);
            });
    }


    return (
        <div className="fb_main_container">
            <div className="fb_title_container">
                <div className="fb_title">Feedback <br /> To Ewhaian <div className="fb_dia_svg"><Dia /></div> </div>
                <div className="fb_title_content">22주년을 맞이해 새롭게 단장한 이화이언에게 <br /> 하고싶은 말을 들려주세요!</div>
            </div>

            <div className="fb_main_content_container">
                <div className="fb_main_content_inner_container">
                    <div className="fb_main_content_inner_inner_container">
                        <ul className="fb_main_content_list">
                            {feedbacks ? feedbacks.map((feedback, i) => (
                                <li className={`fb_main_content ${feedback.studentID === StudentID ? 'highlight' : ''}`} key={feedback._id}>
                                    {feedback.content} {feedback.studentID == StudentID && (
                                        <img id={feedback._id} onClick={deleteClick} className="fb_del_btn_img"
                                            src="/img/Feedback/del_button.png" />

                                    )}
                                </li>
                            )) : <div></div>}
                        </ul>
                    </div>


                    <div className="add_feedback_container">
                        <form className='add_feedback'
                            onSubmit={onSubmitHandler}
                        >
                            <div className='fb_content_input_container'>
                                <div className='fb_content_inputset'>

                                    <input className="fb_content_input" type="text" minLength="5" maxLength="300"
                                        placeholder="피드백을 입력해 주세요. (5-300자)"
                                        value={Content} onChange={onContentHandler} />
                                    <button className="btn_add_fb" type='submit'>
                                        <img className="fb_btn_img" src="/img/Feedback/button.png" />
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Feedback;