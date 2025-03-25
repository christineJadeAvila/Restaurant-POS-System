import "../styles/AddProducts.css"

function UpdateProduct() {
    return (
        <>
            <header>
            <button class="menu-button">☰</button>
            <h1 class="header-title">Product Management System</h1>
        </header>
        
        <div class="sidebar">
            <div class="search-container">
                <div class="search-bar">
                    <span class="search-icon">🔍</span>
                    <input type="text" placeholder="Search something..."/>
                </div>
            </div>
            <a href="#" class="sidebar-item active">Products</a>
        </div>
        
        <div class="main-content">
            <a href="#" class="back-button">
                <span class="back-arrow">←</span>
                Update Product
            </a>
            
            <for class="form-container">
                <div class="form-columns">
                    <div class="form-column">
                        <div class="form-row">
                            <label class="form-label required">Product Name</label>
                            <input type="text" class="form-input" placeholder="Product Name"/>
                        </div>
                        
                        <div class="form-row">
                            <label class="form-label required">Product Price</label>
                            <input type="text" class="form-input" placeholder="Product Price"/>
                        </div>
                        
                        <div class="form-row">
                            <label class="form-label required">Category</label>
                            <select class="form-select">
                                <option value="" disabled selected>Category</option>
                            </select>
                        </div>
                        
                        <div class="form-row">
                            <label class="form-label">Media</label>
                            <div class="upload-area">
                                <input type="file" id="img" name="img" accept="image/*"/>
                                <div class="upload-subtitle">Accepts images in png, jpg, and jpeg</div>
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
            
            <div class="submit-container">
                <button class="submit-button">Archive</button>
                <button class="submit-button">Delete</button>
                <button class="submit-button">Save</button>
            </div>
        </div>
        
        <footer>
            <div class="footer-brand">Garden Bay - POS System</div>
            <div class="footer-text">Lorem ipsum dolor amet, consectetur adipiscing elit</div>
        </footer>
        </>
    )
}

export default UpdateProduct