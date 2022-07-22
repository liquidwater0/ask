import { useState } from 'react';
import '../scss/App.scss';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

/*
  Issues:
  Sometimes clicking ask button does nothing even with text in question input.
*/

const titles = ["Ask away!", "Ask me anything.", "Ask damnit!", "Just ask already..."];
const answers = ["Yes", "No", "Maybe", "Ask again later"];

function App() {
  const [title, setTitle] = useState(titles[Math.floor(Math.random() * titles.length)]);
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");

  function setRandomAnswer() {
    if (question.trim() == "") return;
    setAnswer(answers[Math.floor(Math.random() * answers.length)]);
  }

  function updateQuestion(question) {
    setQuestion(question)
  }

  return (
    <>
      <Header title={title}/>
      <Main answer={answer}/>
      <Footer answer={answer} updateQuestion={updateQuestion} setRandomAnswer={setRandomAnswer}/>
    </>
  );
}

export default App;