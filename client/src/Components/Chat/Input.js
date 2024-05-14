import { BsSendFill } from "react-icons/bs";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {sendChat} from "../../ReduxStore/Actions";
import { saveUserMessage} from "../../ReduxStore/Slice";
import { IoReloadOutline } from "react-icons/io5";
import { Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const Input = () => {
    const [message, setMessage] = useState("");
    const dispatch = useDispatch()
    const {chatResponse} = useSelector((state) => state.chats)
    
    async function handleDispatch() {
        
        await dispatch(saveUserMessage(message))
        // focuses the text box when the chat arrives
        let container = document.getElementById("chat-input").previousElementSibling
        container.scrollIntoView()
        await dispatch(sendChat(message));
        container = document.getElementById("chat-input").previousElementSibling 
        console.log(container)
        container.scrollIntoView()
        await setMessage("")
    }
    const handleKeyDown = (e) => { // sends chat with the enter key
        // check if function is loading
        if (chatResponse.loading) {
            return;
        }
        if (e.key === "Enter") {
          return handleDispatch()
        }
        else {
          return null;
        }
      }

      
    return (
        <div id = "chat-input">
            <div>
                <input type= "text" name = "chat-input" placeholder="Type a message here ..."
                className = "chat-input" 
                onKeyDown={handleKeyDown}
                value = {message}
                onChange = {(e) => setMessage(e.target.value)}/>
                {chatResponse.loading ? <IoReloadOutline /> : <BsSendFill onClick = {handleDispatch} />}
            </div>
        </div>
    )
}
export default Input;