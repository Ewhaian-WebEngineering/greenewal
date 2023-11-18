import "./Test.css"
import TestData from "./questions.json";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TestResult from "./TestResult";
function Test() {
    const [page, setPage] = useState(1);
    const [answers, setAnswers] = useState([0, 0, 0]);//문제 개수만큼 저장
    const navigate = useNavigate();

    //유저가 입력한 정답을 answers에 저장
    const TakeAnswer = (val) => {
        if (page < 5) {
            var answersArr = answers;
            // 변수로 받아온 결과를 배열에 저장 후 업로드
            answersArr[page - 1] = val;
            setAnswers(answersArr);
            setPage(page + 1);
        }
    }
    return (<div className="TestBackground">
        {page < 5 ? TestData.map((a, idx) =>
            <div className="TestPage" key={idx} style={{ display: page === idx + 1 ? 'block' : 'none' }}>
                <div className="Round">제 1교시</div>
                <div>2023년도 하반기 이화이언 만점고사</div>
                <div style={{ fontSize: "36px" }}>이화인 탐구 영역</div>
                <div className="Lines"></div>
                <div className="TestInner">
                    <li>다음 질문을 잘 읽고 물음에 답하시오.</li>
                    <div className="TestQuestion">{page}. {a.question}</div>
                    <div className="testAnswers">
                        {/* 만약 1을 택하면 1, 2를 택하면 2가 배열에 들어가도록 */}
                        <div className="Answer" onClick={() => TakeAnswer(1)}> <span>&#9312;</span>{a.answer1}</div>
                        <div className="Answer" onClick={() => TakeAnswer(2)}><span>&#9313;</span> {a.answer2}</div>
                        <div className="Answer" onClick={() => TakeAnswer(3)}><span>&#9314;</span> {a.answer3}</div>
                        <div className="Answer" onClick={() => TakeAnswer(4)}><span>&#9315;</span> {a.answer4}</div>
                        <div className="Answer" onClick={() => TakeAnswer(5)}><span>&#9316;</span> {a.answer5}</div>
                    </div>
                </div>
                <div className="TestProgress"><span className="Prog1">{page}</span><div></div><span className="Prog2">20</span></div>
            </div>
        ) : <TestResult answers={answers} /> //결과 페이지에 답안 리스트 전송
            // ) : navigate('/testResult', { state: answers })
        }
    </div >)
}
export default Test;