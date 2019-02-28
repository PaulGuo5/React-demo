import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const { useState, Fragment } = React;

function ChatHook() {
  const [value, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  
  const updateValue = ({ target }) => setInputValue(target.value); 
  const updateMessages = () => {
    if (!value) {
      return;
    }
    const time = new Date().toLocaleTimeString();
    const newMessage = 
      <NewMessage key={time} message={value} timeStamp={time} />;
    
    setMessages(prevState => ([newMessage, ...prevState]));
    setInputValue('');
  }
  
  return (
    <Fragment>
      <TextField handleOnChange={updateValue} value={value} />
      <button className="btn--submit" onClick={updateMessages}>SUBMIT</button>
      {messages}
    </Fragment>
  );
}

const Welcome = () =>(
  <h1>Assignment 2</h1>
  <div>this </div>
)

const TextField = ({ value, handleOnChange }) => (
  <textarea placeholder="Write your message" onChange={handleOnChange} value={value} />
)

const NewMessage = ({ message, timeStamp }) => (
  <div className="message__container">
    <div>{message}</div>
    <div class="timeStamp">{timeStamp}</div>
  </div>
);

ReactDOM.render(
  <ChatHook />,
  document.getElementById('app')
);