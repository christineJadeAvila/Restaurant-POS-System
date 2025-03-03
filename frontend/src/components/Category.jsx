function Product_Category({ category, onDelete }) {

    return (
        <div className="category-card-container">
            <p>{category.id}</p>
            <p>{category.name}</p>
            <p>{category.description}</p>
        </div>
    )

}

export default Product_Category