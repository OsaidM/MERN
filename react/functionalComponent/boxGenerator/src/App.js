import React, { useState } from 'react';
import './App.css';
import MessageForm from './components/PersonCard';
import MessageDisplay from './components/MessageDisplay';
function App() {
  const [currentMsg, setCurrentMsg] = useState([]);
  const youveGotMail = ( newMessage ) => {
    setCurrentMsg( currentMsg.concat(newMessage) );
  }
  return (
      <header className="App">
        <MessageForm onNewMessage={ youveGotMail } />
        <MessageDisplay message={ currentMsg } />
      </header>
    
  );
}

export default App;
