import { useState } from 'react' //named export
import { ChatInput  } from './components/ChatInput'
import ChatMessages from './components/ChatMessages'; //default export
import './App.css'
  
function App() {
      
      const [chatMessages, setChatMessages] = useState([]); 
      /*
      const [chatMessages, setChatMessages] = array; //this is a shortcut for the code below .... its called array destructuring, and the destructuring above it is a shorter cut for it
      */
     /*
      const chatMessages = array[0];   //current data
      const setChatMessages = array[1];   //updater function
      */ 


      return (
        <div className="app-container">
          {chatMessages.length === 0 && (
            <p className='welcome-message'>
              Welcome to the chatbot project! Send a message using the textbox below.
            </p> 
          )}
          <ChatMessages
            chatMessages={chatMessages}
          />
          <ChatInput
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
           />
        </div>
      );
    }

export default App
