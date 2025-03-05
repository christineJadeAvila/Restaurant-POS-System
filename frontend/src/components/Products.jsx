import "../styles/Products.css"

function Product({ product }) {
        
    return (
        <div className="flexboxx">
            <div className="product--card--container">
                <div className="image--container">

                    {/* image here */}

                </div>
                <div>
                <p className="product--name">{product.product_name}</p>
                <p className="product--price">₱{product.price}</p>
                </div>
            </div>
        </div>
        
    )

}

export default Product