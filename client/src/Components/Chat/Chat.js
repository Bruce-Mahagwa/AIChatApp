import "./Chat.css"
import {useEffect, useState} from "react"
import AvatarTextBox from "./AvatarTextBox"
import { useSelector, useDispatch } from "react-redux"
import { fetchAllChats } from "../../ReduxStore/Slice"
import Input from "./Input"
import axios from "axios"
import loadingImg from "./loading-7528_256.gif"
import errorImg from "./error-8660_256.gif"
const Chat = () => {  
    const {chatResponse, sessionChats} = useSelector((state) => state.chats)
    const [fetchChat, setFetchChat] = useState(false)
    const dispatch = useDispatch()
    const {loading} = chatResponse;
    const [localLoading, setLocalLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        // collects all posts from database when page loads
        const getPosts = async ()  => {
            if (sessionChats.length === 0 || fetchChat) {
                // fires when session chats is empty or when someone triggers fetchChat to become true
                // fetches all chats in the database
                try {
                    setLocalLoading(true)
                    const posts = await axios.get("/posts/getposts");
                    await dispatch(fetchAllChats(posts.data.posts));
                    setLocalLoading(false)
                    // ensures that the last chat comes into focus after loading all the chat history
                    const element = document.getElementById("chatbox").lastElementChild.previousElementSibling
                    element.scrollIntoView()
                }
                catch(e) {
                    console.log(e)
                    setLocalLoading(false)
                    setError(true)
                }
            }
        }
        getPosts()
    }, [])


    
    return ( 
        <div id = "chatbox">
            <>
            {/* jsx to show during loading */}
            {localLoading && <div id = "loading">
                <p>Loading Chats. Please wait...</p>
                <img src = {loadingImg} alt = "loading gif" />
            </div>}
            {error && <div id = "error">
                <p>We have encountered an error. It often occurs when a page is first loaded in vercel. Please reload the page.</p>
                <img src = {errorImg} alt = "error gif" />    
            </div>}
            {/* jsx to show during loading */}
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
