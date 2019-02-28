import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const { useState, Fragment } = React;

const Welcome = () =>(
  <div>
    <h1>Assignment 2</h1>
    <div>In this App, we can output what we input in the textarea below to the screen. And also, we can output the time we input.</div>
    <div>The configuration of this app is learned from <a href="https://glitch.com/~create-react-app-sample">this demo</a></div>
    <br></br>
  </div>
)

const TextField = ({ value, handleOnChange }) => (
  <textarea placeholder="Write your message" onChange={handleOnChange} value={value} />
)

const NewMessage = ({ message, timeStamp }) => (
  <div className="message__container">
    <div>{message}</div>
    <div className="timeStamp">{timeStamp}</div>
  </div>
);

function ChatHook() {
  const [value, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  
  const updateValue = ({ target }) => setInputValue(target.value); 
  
  const updateMessages = () => {
    if (!value) {
      return;
    }
    const time = new Date().toLocaleTimeString();
    const newMessage = <NewMessage key={time} message={value} timeStamp={time} />;
    
    setMessages(prevState => ([newMessage, ...prevState]));
    setInputValue('');
  }
  
  return (
    <Fragment>
      <Welcome />
      <TextField handleOnChange={updateValue} value={value} />
      <button className="btn--submit" onClick={updateMessages}>SUBMIT</button>
      {messages}
    </Fragment>
  );
}

ReactDOM.render(
  <ChatHook />,
  document.getElementById('app')
);