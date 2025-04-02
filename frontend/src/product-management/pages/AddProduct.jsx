import { useState, useEffect } from "react"
import "../styles/AddProducts.css"
import api from "../../api"

function AddProduct() {
    const [categories, setCategory ] = useState([])
    const [productName, setProductName] = useState("")
    const [price, setPrice] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("");
    const [image, setImage] = useState(null)

    useEffect(() => {
        getCategory()
    }, [])
    
    const getCategory = () => {
        api
            .get("api/product-category/")
            .then((res) => res.data)
            .then((data) => {
                setCategory(data)
            })
            .catch((err) => alert(err))
    }

    const handleImageChange = (e) => {
        setImage(e.target.files[0]); // Store the selected file
    };

    const handleAddProduct = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append("product_name", productName);
        formData.append("price", price);
        formData.append("category_ID", selectedCategory);
        formData.append("image", image);

        try {
            const addResponse = await api.post("api/products/", formData, {
                    headers: { "Content-Type": "multipart/form-data"}
            })
            alert("Product Added Successfully!", addResponse.data)
            setProductName("")
            setPrice("")
            setSelectedCategory("")
            setImage(null)

        } catch (error) {
            alert("failed to add Product", error)
        }
    }

    return ( <>
        <header>
            <button className="menu-button">☰</button>
            <h1 className="header-title">Product Management System</h1>
        </header>
        
        <div className="sidebar">
            <div className="search-container">
                <div className="search-bar">
                    <span className="search-icon">🔍</span>
                    <input type="text" placeholder="Search something..."/>
                </div>
            </div>
            <a href="#" className="sidebar-item active">Products</a>
        </div>
        
        <div className="main-content">
            <a href="#" className="back-button">
                <span className="back-arrow">←</span>
                Add Product
            </a>
            
            <form className="form-container">
                <div className="form-columns">
                    <div className="form-column">
                        <div className="form-row">
                            <label className="form-label required">Product Name</label>
                            <input 
                                type="text" 
                                className="form-input" 
                                placeholder="Product Name"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}    
                            />
                        </div>
                        
                        <div className="form-row">
                            <label className="form-label required">Product Price</label>
                            <input 
                                type="number" 
                                className="form-input" 
                                placeholder="Product Price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        
                        <div className="form-row">
                            <label className="form-label required">Category</label>
                            <select 
                                className="form-select"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value="" disabled selected>Category</option>
                                {categories.map((category) => (
                                    <option key={category.category_ID} value={category.category_ID}>{category.category_name}</option>
                                ))}
                            </select>
                        </div>
                        
                        <div className="form-row">
                            <label className="form-label">Media</label>
                            <div className="upload-area">
                                <input 
                                    type="file" 
                                    id="img" 
                                    name="img" 
                                    accept="image/*"
                                    onChange={handleImageChange}    
                                />
                                <div className="upload-subtitle">Accepts images in png, jpg, and jpeg</div>
                                {image && (
                                <div className="image-preview">
                                    <img src={URL.createObjectURL(image)} alt="Preview" width="100" />
                                </div>
)}
                            </div>
                        </div>
                    </div>
                    
                    {/* <div class="form-column">
                        <div class="form-row">
                            <label class="form-label">Status</label>
                            <select class="form-select">
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                    </div> */}
                </div>
            </form>
            
            <div className="submit-container">
                <button className="submit-button" onClick={handleAddProduct}>Add Product</button>
            </div>
        </div>
        
        <footer>
            <div className="footer-brand">Garden Bay - POS System</div>
            <div className="footer-text">Lorem ipsum dolor amet, consectetur adipiscing elit</div>
        </footer>
        </>
    )
}

export default AddProduct