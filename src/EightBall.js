// import "./EightBall.css"
// 
import { useState } from "react";

const defaultAnswers =
    [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
    ]



const EightBall = ({ answers = defaultAnswers }) => {
    const genRandom = () => Math.floor(Math.random() * 19);
    // const restart = () => {
    //     setBackground(Black)
    //     setWords("Think of a Question")

    // }
    const [answer, setAnswer] = useState({
        msg: "Think of Question.",
        color: "black",
    })
    function handleClick(event) {
        let temp = randomAnswer(defaultAnswers)
        setAnswer({ color: temp.color, msg: temp.msg })

    }

    function randomAnswer(defaultAnswers) {
        let randomIndex = Math.floor(Math.random() * defaultAnswers.length);
        return defaultAnswers[randomIndex];
    }
    return (
        <div className="EightBall"
            onClick={handleClick} style={{ backgroundColor: answer.color }}>
            <div className="EightBall-words">
                <p>{answer.msg}</p>
                {/* <button onClick={() => setAnswer()}></button> */}
            </div>


        </div>
    )
}

function randomAnswer(defaultAnswers) {
    let randomIndex = Math.floor(Math.random() * 3);
    console.log(defaultAnswers[randomIndex].msg)
    return defaultAnswers[randomIndex].msg;
}

randomAnswer(defaultAnswers)







export default EightBall;