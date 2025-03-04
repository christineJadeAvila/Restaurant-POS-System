import { useState, useEffect } from "react"
import api from "../api"
import Product_Category from "../components/Category"
import Product from "../components/Products"
import CustomerOrder from "../components/CustomerOrder"

import "../styles/OrderMS.css"

function OrderManagementPage() {

    const [categories, setCategory ] = useState([]);
    const [products, setProducts ] = useState([])


    useEffect(() => {
        getCategory()
    }, [])

    useEffect(() => {
        getProducts()
    }, [])


    const getCategory = () => {
        api

            .get("api/product-category/")
            .then((res) => res.data)
            .then((data) => {
                setCategory(data)
                console.log(data)
            })
            .catch((err) => alert(err))
    }

    const getProducts = () => {
        api

            .get("api/products/")
            .then((res) => res.data)
            .then((data) => {
                setProducts(data)
                console.log(data)
            })
            .catch((err) => alert(err))
    }


    return <>
        <div className="div--container">
            <section className="categories-and-products">
                <h1>Product Category</h1>
                
                <div className="getCategories">
                {categories.map((category) => (
                    <Product_Category category={category} key={category.id} />
                ))}
                </div>
        
                <h1>Products</h1>
        
                <div className="getCategories">
                {products.map((product) => (
                    <Product product={product} key={product.id} />
                ))}
                </div>
            </section>

            <section className="customer-checkout">
                <CustomerOrder/>
            </section>
        </div>
    </>
}

export default OrderManagementPage