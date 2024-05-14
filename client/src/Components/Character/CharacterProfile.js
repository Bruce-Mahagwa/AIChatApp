import { BsThreeDotsVertical } from "react-icons/bs";
import { GiSpanner } from "react-icons/gi";
import { GiSandCastle } from "react-icons/gi";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { SlArrowLeft } from "react-icons/sl";
import { IoCameraOutline } from "react-icons/io5";
import { BiMessageRounded } from "react-icons/bi";
import { FaLock } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import img1 from "./pexels-nashua-volquez-young-452210-1729931.jpg"
import "./CharacterProfile.css"

const CharacterProfile = () => {
    return (
        <section id = "profile-section">
            <div className = "profile-avatar">

                <div className = "profile-options">
                    <div className = "num-chats">
                        <SlArrowLeft />
                        <small>Chats img: <span>2</span>  msg:</small>
                    </div>
                    <div className = "profile-more-options">
                        <BsThreeDotsVertical />
                        <GiSpanner />
                        <GiSandCastle />
                        <HiOutlinePencilSquare />
                        <RxCross1 />
                    </div>
                </div>

                <div className = "profile-image-container">
                    <img className = "profile-image" src = {img1} alt = "character avatar" />
                    <div>
                        <h3>Jessica Anderson</h3>
                        <small>@jessica-anderson-2</small>
                    </div>
                </div>
            </div>

            <div className = "profile-info">
                <div style = {{height: "10px"}}></div>
                <div className = "profile-info-options">
                    <div>
                        <p><IoCameraOutline/><span className = "num-images">0</span></p>
                        <p><BiMessageRounded /><span className = "num-messages">6</span></p>
                    </div>
                    <div>
                        <FaLock />
                        <p>Make Character Public</p>
                        <IoShareSocial />
                    </div>
                </div>

                <div className = "profile-info-description">
                    <div>
                        <h3>Who I am</h3>
                        <h4>Personality</h4>
                        <p>Caregiver</p>
                        <h4>Work</h4>
                        <p>Yoga Instructor</p>
                        <h4>Hobbies</h4>
                        <p>Anime Fan</p>
                        <h4>Relationship</h4>
                        <p>Friend</p>
                    </div>

                    <div className = "describe-character"> 
                        <div> 
                            <h3>About me</h3>
                            <span><HiOutlinePencilSquare /></span>
                        </div>
                        <p>21 year old anime fan looking to connect and watch anime. Alooking to connect and watch anime.
                        Alooking to connect and watch anime.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CharacterProfile;