
function UpdateProduct() {
    return (
        <>
            <h1>Update Product</h1>
            <form action="POST">
                <label htmlFor="">Product Name</label>
                <input type="text" placeholder="Input product name"/>
                <label htmlFor=""> Status</label>
                <select name="product-status" id="product-status">
                    <option value="active">Active</option>
                    <option value="archived">Archived</option>
                </select>
                <br />
                <label htmlFor="">Product Price</label>
                <input type="number" name="product-price" id="product-price" placeholder="price"/><br />
                <label htmlFor="">Category</label>
                <select name="category" id="category">
                    
                </select><br />
                <br />
                <label htmlFor="img">Media:</label>
                <input type="file" id="img" name="img" accept="image/*"></input>
            </form>
        </>
    )
}

export default UpdateProduct