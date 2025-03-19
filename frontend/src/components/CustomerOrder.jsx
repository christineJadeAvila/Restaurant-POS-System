import "../styles/Customer.css"
import api from "../api";

import { useState } from "react";

function CustomerOrder({orders, setCustomerOrders}) {
    const [customerName, setCustomerName] = useState("");

    // UPDATE ORDER QUANTITY
    const updateQuantity = (productId, newQuantity) => {
        setCustomerOrders(prevOrders =>
            prevOrders
                .map(order =>
                    order.product_ID === productId
                        ? { ...order, quantity: newQuantity }
                        : order
                )
                .filter(order => order.quantity > 0) // REMOVE IF QUANTITY IS 0
        );
    };



    // Calculate Subtotal
    const subtotal = orders.reduce((acc, order) => acc + order.price * order.quantity, 0);

    // Calculate Tax (5%)
    const tax = subtotal * 0.01;

    // Apply Discount (if needed)
    const discount = subtotal >= 1000 ? subtotal * 0.1 : 0; // Example: 10% discount for orders above 1000

    // Compute Total Amount
    const totalAmount = subtotal + tax - discount;

    // PLACE ORDER 
    const handleSubmitOrder = async () => {

        const customerNameSavetoDatabase = customerName;

        try {
            const orderResponse = await api.post("api/orders/", {
                customer_name: customerNameSavetoDatabase,
                totalAmount: parseInt(totalAmount.toFixed(2))
            })
            console.log("Order Data:", { customer_name: customerName, totalAmount });
            const OrderId = orderResponse.data.order_ID 

            orders.forEach(order => {
                console.log("Order Data:", {
                    order_ID: OrderId,
                    product_ID: parseInt(order.product_ID), // Check if this is the correct product ID
                    product_quantity: order.quantity,
                    total: (order.price * order.quantity).toFixed(2),
                });
            });

            await Promise.all(
                orders.map(order => 
                    api.post("api/order-lines/", {
                        order_ID: OrderId,
                        product_ID: parseInt(order.product_ID),
                        product_quantity: parseInt(order.quantity),
                        total: parseFloat(order.price * order.quantity).toFixed(2),
                    })
                )
            )

            alert("Order Successful")
            setCustomerOrders([]) // Clear cart
            setCustomerName("")   // Reset name
        } catch (error) {
            alert("Order Failed")
        }
    }

    // RENDER
    return <section>
        {/* INPUT CUSTOMER NAME */}
        <h3>{customerName}'s Order</h3>
        <input 
            type="text" 
            placeholder="Enter name..." 
            value={customerName} 
            onChange={(e) => setCustomerName(e.target.value)}
        />

        {/* DISPLAY ADDED ORDERS */}
        <div className="orders">
        {orders.length > 0 ? (
                    <ul>
                        {orders.map((order, index) => (
                            <li key={index}>
                                {order.product_name} - P{order.price} 

                                {/* DECREASE BUTTON */}
                                <button 
                                    onClick={() => updateQuantity(order.product_ID, order.quantity - 1)}
                                > - </button>
                                
                                {/* QUANTITY INPUT */}
                                <input 
                                    type="number" 
                                    min="1" 
                                    value={order.quantity} 
                                    onChange={(e) => updateQuantity(order.product_ID, parseInt(e.target.value, 10))}
                                />

                                {/* INCREASE BUTTON */}
                                <button 
                                    onClick={() => updateQuantity(order.product_ID, order.quantity + 1)}
                                > + </button>
                            </li>
                        ))} 
                    </ul> 
            ) : (
                <p>No products yet</p>
            )}

        </div>

        {/* VALUES */}
        <div className="paymentSubtotal">
            <h6>Subtotal: P{subtotal.toFixed(2)}</h6>
            <h6>Tax(2%): P{tax.toFixed(2)}</h6>
            <h6>Total: P{totalAmount.toFixed(2)}</h6>
        </div>

        {/* ORDER ACTIONS */}
        <button className="cancelOrder">Cancel</button>
        <button className="placeOrder"onClick={handleSubmitOrder} >Place Order</button>

    </section>
}

export default CustomerOrder