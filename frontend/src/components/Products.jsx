function Product({ product, onDelete }) {

    return (
        <div className="category-card-container">
            <p>{product.product_ID}: {product.category_ID} - {product.product_name},  
                {product.price}: Preparation Time - {product.prepTime} minutes</p>
           
        </div>
    )

}

export default Product