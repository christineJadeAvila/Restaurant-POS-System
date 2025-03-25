import { useState, useEffect } from "react"
import api from "../api"
import Product_Category from "../components/Category"
import Product from "../components/Product"
import NavBar from "../components/NavBar"
import CustomerOrder from "../components/CustomerOrder"
import TrackOrder from "../components/TrackingOrder"
import SideBar from "../components/SideBar"
import "../styles/OrderMS.css"

function OrderManagementPage() {

    const [categories, setCategory ] = useState([])
    const [products, setProducts ] = useState([])
    const [selectedCategory, setSelectedCategory] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [customerOrders, setCustomerOrders] = useState([]) // stores selected products


    useEffect(() => {
        getCategory()
        getProducts()
    }, [])

    const getCategory = () => {
        api
            .get("api/product-category/")
            .then((res) => res.data)
            .then((data) => {
                setCategory(data)
            })
            .catch((err) => alert(err))
    }

    const getProducts = () => {
        api

            .get("api/products/")
            .then((res) => res.data)
            .then((data) => {
                setProducts(data)
            })
            .catch((err) => alert(err))
    }
    
    // SHOW all products if "ALL MENU" is selected, 
    // otherwise FILTER BY CATEGORY,
    // and SEARCH
    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === "all" || product.category_ID === selectedCategory;
        const matchesSearch = product.product_name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // ADD PRODUCT to CUSTOMER ORDER SECTION
    const addToOrder = (product) => {
        setCustomerOrders(prevOrders => {
            const existingOrder = prevOrders.find(order => order.product_ID === product.product_ID);
            if (existingOrder) {
                return prevOrders.map(order =>
                    order.product_ID === product.product_ID
                        ? { ...order, quantity: (order.quantity || 1) + 1 }
                        : order
                );
            } else {
                return [...prevOrders, { ...product, quantity: 1 }];
            }
        });
    }
    return <>
        <div className="div--container">
            <section className="sideBar">
                <SideBar/>
            </section>

            <section className="categories-and-products">
                {/* NAVIGATION BAR */}
                <NavBar/>                
                {/* DISPLAY CATEGORIES */}
                <div className="getCategories">
                    {/* DISPLAY ALL MENU */}
                    <div 
                        onClick={() => setSelectedCategory("all")} 
                        className={`category--card--container ${selectedCategory === "all" ? "selected" : ""}`}
                    >
                        All Menu
                    </div>
                    {/* CATEGORY NAVIGATION BARS */}
                    {categories.map((category) => (
                        <Product_Category 
                            category={category} 
                            key={category.category_ID} 
                            onSelect={setSelectedCategory}
                            isSelected={category.category_ID === selectedCategory}
                        />
                    ))}
                </div>
                {/* SEARCH PRODUCTS */}
                <input 
                    type="search" 
                    className="search--bar" 
                    placeholder="Search something..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} 
                />
        
                {/* DISPLAY PRODUCTS based on category ID */}
                <div className="getProducts">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <Product onAddToOrder={addToOrder} product={product} key={product.product_ID} categories={categories}/>
                        ))
                    ) : (

                        // DISPLAY ALL PRODUCTS
                        <div className="getProducts">
                            {products.map((product) => (
                                <Product onAddToOrder={addToOrder} product={product} key={product.id} categories={categories}/>
                            ))}
                        </div>
                    )}
                   
                </div>
                    
            </section>

            <section className="customer--order">
            <CustomerOrder orders={customerOrders} setCustomerOrders={setCustomerOrders} />
            </section>

            <section className="tracker">
                <TrackOrder />
            </section>
            
        </div>
    </>
}

export default OrderManagementPage