import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Confetti from "react-confetti";

const initialQuestions = [
    { id: 1, question: "What rating will you give me?", answer: "7" },
    { id: 2, question: "What is the first gift that you gave me?", answer: "bubbly" },
    { id: 3, question: "What is our colour?", answer: "lavender" },
    { id: 4, question: "What is the day I first fell in love with you?", answer: "friday" },
    { id: 5, question: "What is the constant thing nature gives to remind us whenever we are together?", answer: "rain" },
    { id: 6, question: "What is our favourite place?", answer: "shell beach" },
    { id: 7, question: "What nickname did I give based on a relative?", answer: "sangya" },
    { id: 8, question: "What is our song?", answer: "Guzarish" },
    { id: 9, question: "What is the first movie you recommended?", answer: "chamak" },
    { id: 10, question: "Where is our dream home located?", answer: "beach" },
    { id: 11, question: "What baby are you?", answer: "Water" },
    { id: 12, question: "What are you for me?", answer: "baby" },
    { id: 13, question: "What is our dream destination?", answer: "waynad" },
    { id: 14, question: "What am I, Aayansh, seriously?", answer: "funny" },
    { id: 15, question: "What do I do to you on the wall?", answer: "pin" },
    { id: 16, question: "What body part of you do I like the most?", answer: "ass" },
    { id: 17, question: "Which side of your face is my favourite?", answer: "left" },
    { id: 18, question: "What will you be for me in the later part of life?", answer: "queen" },
    { id: 19, question: "What are you for my heart?", answer: "peace" },
    { id: 20, question: "What was the first thing I started my conversation with you about?", answer: "nails" },
    { id: 21, question: "What is the design on your nails that I asked you to do?", answer: "tiger" },
    { id: 22, question: "What do you not take but I always force you to?", answer: "tablet" },
    { id: 23, question: "What is the thing I want the most for you to be?", answer: "happy" },
    { id: 24, question: "When you sleep, what do I do after seeing you?", answer: "smile" },
    { id: 25, question: "What are you to me when I am driving?", answer: "madam" },
    { id: 26, question: "What type of driver am I?", answer: "babydriver" },
    { id: 27, question: "What part of your face do I like?", answer: "cheeks" },
    { id: 28, question: "What is the thing I told you many times when you first came to the office?", answer: "mouse" },
    { id: 29, question: "What did I think you were when I first met you?", answer: "highclass" },
    { id: 30, question: "What did I think you were when I initially saw you?", answer: "beautiful" },
    { id: 31, question: "What did you think about me at first?", answer: "attitude" },
    { id: 32, question: "What was my first gift to you?", answer: "vimal" },
    { id: 33, question: "What did I use to call you to tease you?", answer: "ghastya" },
    { id: 34, question: "What was the first place we visited?", answer: "baga" },
    { id: 35, question: "What is the best moment that happened?", answer: "fireworks" },
    { id: 36, question: "What happens when I come near you?", answer: "butterfly" },
    { id: 37, question: "What do I call you when you are angry?", answer: "angrybird" },
    { id: 38, question: "What do I like to do to you more?", answer: "pinch" },
    { id: 39, question: "What do I like to do to you?", answer: "irritate" },
    { id: 40, question: "What element you are for me?", answer: "gold" },
    { id: 41, question: "What you call you more?", answer: "princess" },
];

export default function Quiz() {
    const [questions] = useState(initialQuestions);
    const [userAnswers, setUserAnswers] = useState({});
    const [checkedAnswers, setCheckedAnswers] = useState({});
    const [confettiTrigger, setConfettiTrigger] = useState(false);

    const handleChange = (qId, value) => {
        setUserAnswers({
            ...userAnswers,
            [qId]: value,
        });
    };

    const handleCheckAnswer = (question) => {
        const userAnswer = (userAnswers[question.id] || "").trim();
        const correctAnswer = question.answer.trim().toLowerCase();

        setConfettiTrigger(false);

        if (userAnswer.toLowerCase() === correctAnswer) {
            setConfettiTrigger(true);
            toast.success("Yay! Correct answer. Good job Cutiepie! 🎉", {
                position: 'bottom-center',
                autoClose: 3000
            });
            setCheckedAnswers((prev) => ({
                ...prev,
                [question.id]: "correct",
            }));
            setTimeout(() => {
                setConfettiTrigger(false);
            }, 4000)
        } else {
            toast.error("Oops, that's not correct! Try again baby.", {
                position: 'bottom-center',
                autoClose: 3000
            });
            setConfettiTrigger(false);
            setCheckedAnswers((prev) => ({
                ...prev,
                [question.id]: "wrong",
            }));
        }
    };

    return (
        <div className="quiz-container">
            {confettiTrigger && <Confetti className="confetti" />}

            <h1 className="quiz-title">Quiz for my princess</h1>
            <div className="questions-wrapper">
                {questions.map((q) => {
                    const userAnswer = userAnswers[q.id] || "";
                    // We only color it correct/wrong if the user has clicked the button
                    const status = checkedAnswers[q.id]; // 'correct' | 'wrong' | undefined

                    // Decide the CSS class based on status
                    let questionClass = "question-item";
                    if (status === "correct") {
                        questionClass += " correct";
                    } else if (status === "wrong") {
                        questionClass += " wrong";
                    }

                    return (
                        <div key={q.id} className={questionClass}>
                            <p className="question-text">{q.question}</p>
                            <input
                                className="answer-input"
                                type="text"
                                placeholder="Type your answer cutiepie..."
                                value={userAnswer}
                                onChange={(e) => handleChange(q.id, e.target.value)}
                            />
                            <button className="check-btn" onClick={() => handleCheckAnswer(q)}>
                                Check
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
