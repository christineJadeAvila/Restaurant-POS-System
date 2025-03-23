import { useEffect, useState } from "react";
import api from "../../api";

function AllProducts() {

    const [products, setProducts ] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        api

            .get("api/products/")
            .then((res) => res.data)
            .then((data) => {
                setProducts(data)
            })
            .catch((err) => alert(err))
    }

    return (
        <>
            {products.map((product) => (
                <p>{product.product_name} | {product.price}</p>
            ))}

        </>
    )

}

export default AllProducts