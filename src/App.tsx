import { useState, useRef, useEffect } from 'react';
import './scss/App.scss';
import { QuestionAnswer } from '@mui/icons-material';

/*
  Issues:
  Sometimes clicking ask button does nothing even with text in question input.
*/

const titles = ["Ask away!", "Ask me anything.", "Ask damnit!", "Just ask already..."];
const answers = ["Yes", "No", "Maybe", "Ask again later"];

function App() {
	const [title] = useState<string>(titles[Math.floor(Math.random() * titles.length)]);
  	const [answer, setAnswer] = useState<string>("");
  	const [question, setQuestion] = useState<string>("");

	const questionInput = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
        if (!questionInput.current) return;

        questionInput.current.value = "";
        updateQuestion(questionInput.current.value);
    }, [answer]);

	function setRandomAnswer() {
		if (question.trim() == "") return;
		setAnswer(answers[Math.floor(Math.random() * answers.length)]);
	}

	function updateQuestion(question: string) {
		setQuestion(question)
	}

    function handleQuestionChange() {
        if (!questionInput.current) return;
        updateQuestion(questionInput.current.value)
    }

	return (
		<>
			<header className='header'>
				<h1 className='title'>{ title }</h1>
			</header>

			<main className='main'>
				<div>
					<h2 className='computer-says-text'>Computer Says</h2>
					<div className='answer-text'>{ answer }</div>
				</div>
			</main>

			<footer className='footer'>
				<div className='container'>
					<input 
						className="question-input" 
						type="text" 
						placeholder='Enter a question...' 
						ref={questionInput}
						onChange={handleQuestionChange}
					/>
					<button 
						className='button ask-button' 
						aria-label='ask question button' 
						title='Ask question'
						onClick={setRandomAnswer}
					>
						{ <QuestionAnswer/> }
					</button>
				</div>
			</footer>
		</>
	);
}

export default App;