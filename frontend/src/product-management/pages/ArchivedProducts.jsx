import api from "../../api"
import { useState, useEffect } from "react"

function ArchivedProducts() {
    const [archivedProducts, setArchivedProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        api
            .get("api/products/")
            .then((res) => {
                const products = res.data.filter((product) => product.is_archived)
                setArchivedProducts(products)
                console.log("Archived Products:", products);
            })
            .catch((err) => alert(err))
    }

    return (
        <div>
            {archivedProducts.map((product) => (
                <div key={product.product_ID}>
                    <h3 className="product-image-cell">
                        <img className="product-image" src={product.image} alt="" />
                        <h3>{product.product_name}</h3>
                    </h3>
                    <h3>{product.price}</h3>
                    <h3>{product.category_ID}</h3>
                    <h3>Inactive</h3>
                </div>
            ))}          
        </div>
    )
}

export default ArchivedProducts