import dayjs from 'dayjs';
import { useState } from 'react'
import { Chatbot} from 'supersimpledev'
import LoadingSpinner from '../assets/loading-spinner.gif'
import './ChatInput.css'

export function ChatInput({ chatMessages, setChatMessages }){

  //here we want to save this text, so we can use it later when creating chatMessages, so we need to use
  //  state to save it because state is used to save data in react and it saves data changes over time
  
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  //const array = React.useState('');
  //const inputText = array[0];
  //const setInputText = array[1];

  function saveInputText(event){
    setInputText(event.target.value)
  }

  async function sendMessage(){
    // disable the send button when the we are in loading state and when input is empty
    if(isLoading || inputText === ''){
      return;
    }

    // Set isLoading to true at the start, and set it to
    // false after everything is done.
    setIsLoading(true);

    //  Create a new array that includes all old messages plus the new user message
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID(),
        time: dayjs().valueOf()
      },

        // Another solution is to add the Loading... message
      // to newChatMessages, but we have to remove it later.

      {
        message:  <img src={LoadingSpinner} className="loading-spinner" />,
        sender: 'robot',
        id: crypto.randomUUID(),
        time: dayjs().valueOf()
      }

    ]
    //  Update the screen to show the user’s message
    setChatMessages(newChatMessages);
      setInputText('');//clear inputText after sending message
    
    //  Wait for the chatbot’s response (async operation)
    const response =  await Chatbot.getResponseAsync(inputText);

    // After the chatbot responds, add that new message to the list
    setChatMessages([
      // This makes a copy of newChatMessages, but without the
      // last message in the array.
      ...newChatMessages.slice(0, newChatMessages.length - 1),
      
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ]);

    // Set isLoading to false after everything is done.
    setIsLoading(false);
  

    
  }

  function handleKeyDown(event){
    if(event.key === 'Enter'){
      sendMessage();
    }
    else if(event.key === 'Escape'){
      setInputText('');
    }
  }

 ;

  return(
    <div className= "chat-input-container">
      <input 
        placeholder="send a message to chatbot" 
        onKeyDown={handleKeyDown}
        size= "30" onChange={saveInputText}
        value ={inputText}
        className= "chat-input"
      />
      <button 
        onClick={sendMessage}
        className = "send-button"
      >Send</button>
    </div>

  );
}
