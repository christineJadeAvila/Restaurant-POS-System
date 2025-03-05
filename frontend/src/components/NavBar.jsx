import "../styles/NavBar.css"
import burgerMenu from "../assets/OrderMS/burgerMenu.svg"
import calendar from "../assets/OrderMS/calendar.png"
import clock from "../assets/OrderMS/clock.png"
import React from "react"


import DateObject from "react-date-object"

function NavBar(props) {

    // live clock

    const [time, setTime ] = React.useState(new Date());

    React.useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, [])

    let date = new DateObject()

    return(
        <>
            <section className="navigation--bar">

                <img className="burger--menu" src={burgerMenu} alt="" />

                <img className="date--time" src={calendar} alt="" />
                <p className="nav--date">{date.format("dddd, DD MMMM YYYY")}</p>

        
                <img className="date--time" src={clock} alt="" />
                <p>{time.toLocaleString("en-US", {

                        timeStyle: "medium",
                        hour12: true,

                })} </p>

            </section>
        </>
    )
}

export default NavBar;
