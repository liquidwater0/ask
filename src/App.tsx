import { useState } from 'react';
import './scss/App.scss';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

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

	function setRandomAnswer() {
		if (question.trim() == "") return;
		setAnswer(answers[Math.floor(Math.random() * answers.length)]);
	}

	function updateQuestion(question: string) {
		setQuestion(question)
	}

	return (
		<>
			<Header title={title}/>
			<Main answer={answer}/>
			<Footer 
				answer={answer} 
				updateQuestion={updateQuestion} 
				setRandomAnswer={setRandomAnswer}
			/>
		</>
	);
}

export default App;