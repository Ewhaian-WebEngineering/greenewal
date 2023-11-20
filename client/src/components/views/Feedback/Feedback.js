import "./Feedback.css";
import React from 'react';
import { useState,useEffect,useDispatch } from 'react';
import axios from 'axios';
import { ReactComponent as Dia } from "../../../assets/images/SpeakerPage/dia.svg";

const Feedback = () => {
    //const dispatch = useDispatch();

    const [Content, setContent] = useState("")
    const [feedbacks, setFeedbacks] = useState([]);

    const onContentHandler = (event) => {
        setContent(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        //event.preventDefault();

        axios.post('/feedback', {
            content: Content
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        

        

    }
    useEffect(() => {
        axios.get('/feedback')
            .then(response => {
                console.log(response.data)
                setFeedbacks(response.data);
            });
    }, []);

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
                {feedbacks.map(feedback => (
                    <li className="fb_main_content" key={feedback.id}>
                        {feedback.content}
                    </li>
                ))}
                </ul>
            </div>
            
             
        <div className="add_feedback_container">
        <form className='add_feedback'
            onSubmit={onSubmitHandler}
        >
            <div className='fb_content_input_container'>
            <div className='fb_content_inputset'>
            
           <input className="fb_content_input" type="text" minlength="5" maxlength="300"
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