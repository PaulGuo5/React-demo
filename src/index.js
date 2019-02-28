import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//message
const { useState, Fragment } = React;

const Welcome = () =>(
  <div>
    <h1>Assignment 2</h1>
    <div>In this App, we can output what we input in the textarea below to the screen. Also, we can output the input time.</div>
    <br></br>
    <div>The React configuration of this app is learned from this <a href="https://glitch.com/~create-react-app-sample">demo</a>.</div>
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



//clock
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

function Appclock() {
  return (
    <div class="clock">
      <Clock />
    </div>
  );
}

ReactDOM.render(<Appclock />, document.getElementById('root'));
