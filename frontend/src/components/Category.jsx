function Product_Category({ category, onDelete }) {

    return (
        <div className="category-card-container">
            <p>{category.category_ID}: {category.category_name}</p>
        </div>
    )

}

export default Product_Category