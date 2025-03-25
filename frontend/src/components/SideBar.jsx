import { useNavigate } from "react-router-dom";
import "../styles/SideBar.css"

function SideBar() {
    const navigate = useNavigate()

    const activity = () => {
        navigate("/add-product")
    }
    const reports = () => {
        navigate("/add-product")
    }
    const inventory = () => {
        navigate("/add-product")
    }
    const products = () => {
        navigate("/all-products")
    }
    const kitchenDisplay = () => {
        navigate("/add-product")
    }

  return (
    <section className="sidebar-container">
        <div className="user-container">
            <p className="user-name">Christine Jade</p>
            <p className="user-role">Cashier</p>
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
  )
}

export default SideBar