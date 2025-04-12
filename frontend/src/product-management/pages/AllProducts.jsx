import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AllProducts.css"
import handleArchive from "../utils/ArchiveFunction"
import api from "../../api";

function AllProducts() {
    const navigate = useNavigate()
    const [products, setProducts ] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        api
            .get("api/products/")
            .then((res) => {
                const activeProducts = res.data.filter((product) => !product.is_archived)
                setProducts(activeProducts)
            })
            .catch((err) => alert(err))
    }

    const navigateTo = () => {
        navigate("/add-product")
    }

    // ARCHIVE PRODUCT FUNCTION
    const handleArchiveProduct = async (productID) => {
        const confirmArchive = window.confirm("Are you sure you want to archive this product")

        if(confirmArchive === true) {
            handleArchive(productID)
            
            // Update UI by removing the deleted product
            setProducts(products.filter(product => product.product_ID !== productID));
        }
    }

    return (<>
        <header>
            <h1 className="page-title">Product Management System</h1>
            <button className="add-button" onClick={navigateTo}>Add Product</button>
        </header>

        <div className="main-content">
           
            {/* PRODUCT TABLE */}
            <table className="product-table">
                <thead>
                    <tr>
                        <th><input type="checkbox" className="checkbox"/></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                    <tr key={product.product_ID}>
                        <td><input type="checkbox" className="checkbox"/></td>
                        <td className="product-image-cell">
                            <img className="product-image" src={product.image} alt="" />
                            <td>{product.product_name}</td>
                        </td>
                        <td>{product.price}</td>
                        <td>{product.category_ID}</td>
                        <td>Active</td>
                        <td className="action-links">
                            <a href="#" class="update-link">Update</a>
                            <a href="#" onClick={() => handleArchiveProduct(product.product_ID)} class="delete-link">Archive</a>
                        </td>
                    </tr>
                    ))}         
                </tbody>                
            </table>
        </div>
                    
        </>
    )

}

export default AllProducts