import "../styles/Products.css"

function Product({ product, onDelete }) {
        
    return (
        <div className="flexboxx">
            <div className="product--card--container">
                <div className="image--container">

                    {/* image here */}

                </div>
                <div>
                <p>{product.product_name}</p>
                <h3>{product.price}</h3>
                </div>
            </div>
        </div>
        
    )

}

export default Product