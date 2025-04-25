import "../styles/NavBar.css"
import "../styles/SideBar.scss"
import TimeAndDate from "./TimeAndDate"
import burgerMenu from "../assets/OrderMS/burgerMenu.svg"
import { useState, useEffect  } from "react"
import DateObject from "react-date-object"

import icon from "../assets/inventory-icon.png"
import logout from "../assets/logout-btn.svg"
import xbtn from "../assets/x-btn.svg"

function NavBar(props) {
    const [isOpen, setIsOpen] = useState(false)

    // live clock
    const [time, setTime ] = useState(new Date());
    let date = new DateObject()
    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, [])
    
    return(
        <>
            <section className="navigation--bar">
                {/* Side Bar Opener */}
                <img 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="burger--menu" src={burgerMenu} alt="" 
                />
                <TimeAndDate/>
            </section>

            {/* Display Side Bar */}
            { isOpen && (
                <div className="section-container">
                <div className="sidebar-container">
                    <section className="header-bar-info-container">
                        <div className="user-information-container">
                            <h3 className="user-name">User Name</h3>
                            <h6 className="user-role">User Role</h6>
                        </div>
                        <div className="close-button" onClick={() => setIsOpen(isOpen==false)}><img src={xbtn} alt="" /></div>
                    </section>
                    <nav className="navigation-section">
                        <div className="sidebar-navigation product">
                            <img className="icon" src={icon} alt="" />
                            <p className="sidebar-text">Order Management</p>
                        </div>
                        <div className="sidebar-navigation">
                            <img className="icon" src={icon} alt="" />
                            <p className="sidebar-text">Kitchen Display</p>
                        </div>
                    </nav>
                    <footer className="footer-section">
                        <p className="logout-label">Log out</p>
                        <img src={logout} alt="" className="logout-button" />
                    </footer>
                </div>
            </div>
            )}

        </>
    )
}

export default NavBar;
