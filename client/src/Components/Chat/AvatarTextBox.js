import userImg from "../Character/pexels-nashua-volquez-young-452210-1729931.jpg"
import "./Chat.css"
const AvatarTextBox = ({description, classes, loading}) => {
        //template for user chat messages 
    return (
        <>
        <div id = "text-box" className = {classes === "ai" ? "ai-textbox": "user-textbox"}>
            <div>
                <small>Cutie</small>
                <img src = {userImg} alt = "avatar" className = "avatar" />
            </div>
            <p>{description}</p>
        </div>
        </>
    )
}
export default AvatarTextBox;