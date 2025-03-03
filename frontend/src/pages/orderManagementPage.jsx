import { useState, useEffect } from "react"
import api from "../api"
import Product_Category from "../components/Category"


function OrderManagementPage() {

    const [categories, setCategory ] = useState([]);

    useEffect(() => {
        getCategory()
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

    return <>
       <div className="getCategories">
        {categories.map((category) => (
            <Product_Category category={category} key={note.id} />
        ))}
       </div>
        
    </>
}

export default OrderManagementPage