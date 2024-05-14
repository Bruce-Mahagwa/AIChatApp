import "./Header.css"
import { IoMdPeople } from "react-icons/io";
import { IoCameraOutline } from "react-icons/io5";
import { TbPencilHeart } from "react-icons/tb";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
import Dropdown from 'react-bootstrap/Dropdown';
import { VscThreeBars } from "react-icons/vsc";
const Header = () => {
    function changeActiveClass(e) {
        // changes the styling for when a button is selected on the nav
        const data_name = e.currentTarget.getAttribute("data-name")
        // uses the data attribute to select elements
        const data_buttons = document.querySelectorAll(".header-buttons-item")
        // selects all buttons on the nav
        data_buttons.forEach((btn) => {
            const data_name_attr = btn.getAttribute("data-name");
            btn.classList.remove("active");
            // first performs a cleanup by removing the active class from all buttons
            if (data_name_attr === "create-character") {
                // a special case with the create-character button which has unique styling
                btn.classList.remove("cancel-active");
            }
        })
        // then add the class active to the selected button
        e.currentTarget.classList.add("active")
        if (data_name === "create-character") {
            // if button is create character add an additional class for extra styling
            e.currentTarget.classList.add("cancel-active");
        }
    }
    
    return (
        <header id = "header-large">
            <div className = "header-logo">
                <p>secret <span>desires</span></p>
                <small>Open Beta</small>
            </div>

            {/* for small screens  - uses bootstrap drop down component*/}
            <Dropdown id = "small-screen-nav">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <VscThreeBars />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item >
                        {/* <IoChatboxEllipsesOutline /> */}
                        Chat
                    </Dropdown.Item>
                    <Dropdown.Item >
                        {/* <IoMdPeople /> */}
                        My Characters
                    </Dropdown.Item>
                    <Dropdown.Item>
                        {/* <IoCameraOutline /> */}
                        Generate Images
                    </Dropdown.Item>
                    <Dropdown.Item>
                        {/* <TbPencilHeart /> */}
                        Create Character
                    </Dropdown.Item>
                    <Dropdown.Item>
                        {/* <CgProfile /> */}
                        My Profile
                        <IoMdArrowDropdown />
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            {/* for small screens */}

            <div className = "header-buttons">
                <ul>
                    <li>
                        <button className = "header-buttons-item" data-name = "chat" onClick={changeActiveClass}>
                            <IoChatboxEllipsesOutline />
                            Chat
                        </button>
                    </li>
                    <li>
                        <button className = "header-buttons-item" data-name = "characters" onClick={changeActiveClass}>
                            <IoMdPeople />
                            My Characters
                        </button>
                    </li>
                    <li>
                        <button className = "header-buttons-item" data-name = "generate-images" onClick={changeActiveClass}>
                            <IoCameraOutline />
                            Generate Images
                        </button>
                    </li>
                    <li className = "create-character">
                        <button className = "header-buttons-item" data-name = "create-character" onClick={changeActiveClass}>
                            <TbPencilHeart />
                            Create Character
                        </button>
                    </li>
                </ul>
            </div>
            <div className = "header-profile">
                <button className = "header-buttons-item" data-name = "profile" onClick={changeActiveClass}>
                    <CgProfile />
                    My Profile
                    <IoMdArrowDropdown />
                </button>
            </div>
        </header>
    )
}
export default Header;