import { useState, useEffect  } from "react"
import DateObject from "react-date-object"
import calendar from "../assets/calendar.png"
import clock from "../assets/clock.png"
import "./styles/TimeAndDate.scss"

function TimeAndDate() {
    // live clock
    const [time, setTime ] = useState(new Date());
    let date = new DateObject()
    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, [])

    return (
        <>
        <div className="time-n-date">
          <img className="date-time" src={calendar} alt="" />
            <p className="nav-date">{date.format("dddd, DD MMMM YYYY")}</p>
          <img className="date-time" src={clock} alt="" />
            <p className="real-time">{time.toLocaleString("en-US", {
                timeStyle: "medium",
                hour12: true,
          })} </p>
        </div>
        </>
    )
}

export default TimeAndDate