import "../styles/Customer.css"

import { useState } from "react";

function CustomerOrder({orders, setCustomerOrders}) {
    const [customerName, setCustomerName] = useState("");

    const updateQuantity = (productId, newQuantity) => {
        setCustomerOrders(prevOrders =>
            prevOrders
                .map(order =>
                    order.product_ID === productId
                        ? { ...order, quantity: newQuantity }
                        : order
                )
                .filter(order => order.quantity > 0) // Remove if quantity is 0
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

    return <section>
    
        <h3>Customer's Name</h3>
        <input 
            type="text" 
            placeholder="Enter name..." 
            value={customerName} 
            onChange={(e) => setCustomerName(e.target.value)}
        />


        {/* Display Added Orders */}
        <div className="orders">
        {orders.length > 0 ? (
                    <ul>
                        {orders.map((order, index) => (
                            <li key={index}>
                                {order.product_name} - P{order.price} 

                                {/* Decrease Button */}
                                <button 
                                    onClick={() => updateQuantity(order.product_ID, order.quantity - 1)}
                                > - </button>

                                <input 
                                    type="number" 
                                    min="1" 
                                    value={order.quantity} 
                                    onChange={(e) => updateQuantity(order.product_ID, parseInt(e.target.value, 10))}
                                />

                                {/* Increase Button */}
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
            <table className="payment--table">
            <tr>
                        <th>Subtotal</th>
                        <td>P{subtotal.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <th>Tax (2%)</th>
                        <td>P{tax.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <th>Discount</th>
                        <td>P{discount.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <td><strong>P{totalAmount.toFixed(2)}</strong></td>
                    </tr>
            </table>

            <div className="paymentSubtotal">

        </div>

        <button className="cancelOrder">Cancel</button>

        <button className="placeOrder">Place Order</button>

    </section>
}

export default CustomerOrder