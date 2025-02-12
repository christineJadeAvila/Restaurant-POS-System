import "../css/SideBar.css"

function SideBar() {
    return(
        <>
        <div className="sideBar-container">
            <i className="fa fa-bars" aria-hidden="true" ></i>
            <i class="fa fa-calendar" aria-hidden="true"></i>
            <i class="fa fa-clock-o" aria-hidden="true"></i>
        </div>
        </>
    )
}

export default SideBar