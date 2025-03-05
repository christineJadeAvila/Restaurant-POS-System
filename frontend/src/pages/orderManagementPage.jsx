import { useState, useEffect } from "react"
import api from "../api"
import Product_Category from "../components/Category"
import Product from "../components/Products"
import NavBar from "../components/NavBar"
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

                <NavBar/>                
                <div className="getCategories">

                    <div className="category--card--container">All menu</div>

                    {categories.map((category) => (
                        <Product_Category category={category} key={category.id} />
                    ))}
                </div>
        
                <input type="search" className="search--bar" placeholder="Search something..."/>
        
                <div className="getProducts">
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