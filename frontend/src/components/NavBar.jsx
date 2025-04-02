import "../styles/NavBar.css"
import { useNavigate } from "react-router-dom";
import burgerMenu from "../assets/OrderMS/burgerMenu.svg"
import calendar from "../assets/OrderMS/calendar.png"
import clock from "../assets/OrderMS/clock.png"
import { useState, useEffect  } from "react"
import DateObject from "react-date-object"

function NavBar(props) {
    const navigate = useNavigate()

    const activity = () => {
        navigate("/")
    }
    const reports = () => {
        navigate("/")
    }
    const inventory = () => {
        navigate("/")
    }
    const products = () => {
        navigate("/all-products")
    }
    const kitchenDisplay = () => {
        navigate("/")
    }

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
                <img className="date--time" src={calendar} alt="" />
                <p className="nav--date">{date.format("dddd, DD MMMM YYYY")}</p>
                <img className="date--time" src={clock} alt="" />
                <p>{time.toLocaleString("en-US", {
                        timeStyle: "medium",
                        hour12: true,
                })} </p>
            </section>

            {/* Display Side Bar */}
            { isOpen && (
                <section className="sidebar-container">
                <div className="user-container">
                    <p className="user-name">Christine Jade</p>
                    <p className="user-role">Cashier</p>
                    <button onClick={() => setIsOpen(isOpen==false)}>X</button>
                </div>
        
                <div className="navigation-bar">
                    <a href="" className="navigation-elements">Point of Sales</a>
                    <a href="" className="navigation-elements">Activity</a>
                    <a href="" className="navigation-elements">Reports</a>
                    <a href="" className="navigation-elements">Inventory</a>
                    <a onClick={products} href="" className="navigation-elements">Products</a>
                    <a href="" className="navigation-elements">Kitchen Display</a>
                </div>
        
                <div className="logout-button">
                    <p className="logout-label">Logout</p>
                    <img src="" alt="" className="logout-icon" />
                </div>
            </section>
            )}

        </>
    )
}

export default NavBar;
