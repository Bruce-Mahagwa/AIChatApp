import "./Chat.css"
import {useEffect, useState, useRef, useLayoutEffect} from "react"
import AvatarTextBox from "./AvatarTextBox"
import { useSelector, useDispatch } from "react-redux"
import { fetchAllChats } from "../../ReduxStore/Slice"
import Input from "./Input"
import axios from "axios"
const Chat = () => {  
    const {chatResponse, userChatMessage, sessionChats} = useSelector((state) => state.chats)
    const [fetchChat, setFetchChat] = useState(false)
    const dispatch = useDispatch()
    const {loading} = chatResponse;
    useEffect(() => {
        // collects all posts from database when page loads
        const getPosts = async ()  => {
            if (sessionChats.length === 0 || fetchChat) {
                // fires when session chats is empty or when someone triggers fetchChat to become true
                try {
                    const posts = await axios.get("/posts/getposts");
                    await dispatch(fetchAllChats(posts.data.posts));
                    const element = document.getElementById("chatbox").lastElementChild.previousElementSibling
                    element.scrollIntoView()
                }
                catch(e) {
                    console.log(e)
                }
            }
        }
        getPosts()
    }, [])


    
    return ( 
        <div id = "chatbox">
            <>
            {sessionChats?.map((chat) => {
                // custom container for a chat element.
                // has two classes depending on whether the chat is from the user or the api
                return (
                <AvatarTextBox 
                    key = {chat.description}
                    description = {chat.description}
                    postedAt = {chat.postedAt}
                    owner = {chat.owner} 
                    classes = {chat.owner === "ai" ? "ai" : "user" }
                    loading = {loading}
                    />
                )
            })}
            </>
            {/* fires when the chat is being fetched from the api */}
            {loading && 
                <AvatarTextBox 
                    description = {"Loading..."}
                    postedAt = {""}
                    owner = {""} 
                    classes = {"ai"}
                    loading = {loading}
                />
            }
            <Input />
        </div>
    )
}
export default Chat;
