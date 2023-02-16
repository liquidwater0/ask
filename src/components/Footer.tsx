import { useEffect, useRef } from 'react';

type FooterProps = {
    answer: string,
    updateQuestion: (question: string) => void,
    setRandomAnswer: () => void
}

export default function Footer({ answer, updateQuestion, setRandomAnswer }: FooterProps) {
    const questionInput = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (!questionInput.current) return;

        questionInput.current.value = "";
        updateQuestion(questionInput.current.value);
    }, [answer]);

    function handleQuestionChange() {
        if (!questionInput.current) return;
        updateQuestion(questionInput.current.value)
    }

    return (
        <footer className='footer'>
            <div className='container'>
                <input 
                    className="question-input" 
                    type="text" 
                    placeholder='Enter a question.' 
                    ref={questionInput}
                    onChange={handleQuestionChange}
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
    );
}