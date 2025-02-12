import "../css/NavBar.css"
import catImg from "../assets/ex.png"

function NavBar(props) {
    return(
        <>
            <div className="card-container">
                <img src={catImg} alt="cat-img" className="cat-img" />
                <h3 className="cat-title">Title</h3>
                <h5 className="cat-qty">110 items</h5>
            </div>
            {/* <Car brand="Ford"/> */}
        </>
    )
}

export default NavBar;


// Testing Props here
// function Car(props) {
//     return(
//         <>
//             I am a property {props.brand}
//         </>
//     )
// }