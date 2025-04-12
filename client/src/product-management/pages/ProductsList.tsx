import BurgerMenu from "../components/BurgerMenu";
import SearchBar from "../components/SearchBar";
import useProducts from "../../utilities/useProducts";
import { useNavigate } from "react-router-dom";
import "./styles/ProductsList.scss";

function ProductsList() {
  const navigate = useNavigate()
  const add = () => {
    navigate("add-product")
  }
  const update = () => {
    navigate("update-product")
  }

  const products = useProducts()

  return (
    <>
      <header className="header-bar">
        <BurgerMenu/>
        <h2 className="page-title">Product Management System</h2>
        <button className="add-product" onClick={add}>Add Product</button>
      </header>
      
      <div className="container">
        <aside className="side-bar">
          <nav className="nav-bar">
            <a className="nav-elements active" href="">Products</a>
            <a className="nav-elements" href="">Archived Products</a>
          </nav>
        </aside>
        <main className="products-container">
          {/* Search Bar */}
          <SearchBar/>
          <table className="product-table">
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Category</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr className="product-row" key={product.id}>
                  <td><input type="checkbox" /></td>
                  <td><img className="product-icon" src={product.img} alt="" /> {product.name}</td>
                  <td>P{product.price}.00</td>
                  <td>{product.category}</td>
                  <td>{product.status}</td>
                  <td className="action-links">
                    <a className="update-link" onClick={update}>Update</a> 
                    <a className="delete-link">Archive</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
        </div>
    </>
  )
}

export default ProductsList