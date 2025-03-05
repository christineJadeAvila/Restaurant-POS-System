import "../styles/NavBar.css"
import burgerMenu from "../assets/OrderMS/burgerMenu.svg"

function NavBar(props) {
    return(
        <>
            <section className="navigation--bar">
                <img src={burgerMenu} alt="" />


            </section>
        </>
    )
}

export default NavBar;
