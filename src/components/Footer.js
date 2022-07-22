import React, { useEffect, useRef } from 'react';

export default function Footer({ answer, updateQuestion, setRandomAnswer }) {
    const questionInput = useRef();

    useEffect(() => {
        questionInput.current.value = "";
        updateQuestion(questionInput.current.value);
    }, [answer]);

    return (
        <footer className='footer'>
            <div className='container'>
                <input 
                    className="question-input" 
                    type="text" placeholder='Enter a question.' 
                    ref={questionInput}
                    onChange={() => updateQuestion(questionInput.current.value)}
                />
                <button 
                    className='button ask-button' 
                    aria-label='ask question button' 
                    title='Ask question'
                    onClick={setRandomAnswer}
                >
                    <i className='material-icons'>question_answer</i>
                </button>
            </div>
        </footer>
    )
}