import "../styles/AddProducts.css"

function UpdateProduct() {
    return (
        <>
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
                Update Product
            </a>
            
            <for className="form-container">
                <div className="form-columns">
                    <div className="form-column">
                        <div className="form-row">
                            <label className="form-label required">Product Name</label>
                            <input type="text" className="form-input" placeholder="Product Name"/>
                        </div>
                        
                        <div className="form-row">
                            <label className="form-label required">Product Price</label>
                            <input type="text" className="form-input" placeholder="Product Price"/>
                        </div>
                        
                        <div className="form-row">
                            <label className="form-label required">Category</label>
                            <select className="form-select">
                                <option value="" disabled selected>Category</option>
                            </select>
                        </div>
                        
                        <div className="form-row">
                            <label className="form-label">Media</label>
                            <div className="upload-area">
                                <input type="file" id="img" name="img" accept="image/*"/>
                                <div className="upload-subtitle">Accepts images in png, jpg, and jpeg</div>
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
            </for>
            
            <div className="submit-container">
                <button className="submit-button">Archive</button>
                <button className="submit-button">Delete</button>
                <button className="submit-button">Save</button>
            </div>
        </div>
        
        <footer>
            <div className="footer-brand">Garden Bay - POS System</div>
            <div className="footer-text">Lorem ipsum dolor amet, consectetur adipiscing elit</div>
        </footer>
        </>
    )
}

export default UpdateProduct