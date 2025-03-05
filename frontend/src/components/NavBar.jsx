import "../styles/NavBar.css"
import burgerMenu from "../assets/OrderMS/burgerMenu.svg"

import DateObject from "react-date-object"

function NavBar(props) {
    
    var date = new DateObject()

    return(
        <>
            <section className="navigation--bar">

                <img src={burgerMenu} alt="" />
                <p className="nav--date">{date.format("dddd, DD MMMM YYYY")}</p>
                <p className="nav--time">{date.format(" hh:mm A")}</p>

            </section>
        </>
    )
}

export default NavBar;
