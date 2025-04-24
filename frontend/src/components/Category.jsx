import "../styles/Category.css"

function Product_Category({ category, onSelect, isSelected }) {
    return (
        <div 
            className={`category--card--container ${isSelected ? "selected" : ""}`}
            onClick={() => onSelect(category.category_ID)}
        >
                <p>{category.category_name}</p>
        </div>
    )
}

export default Product_Category