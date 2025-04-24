import "../styles/Customer.scss"
import api from "../api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CustomerOrder({orders, setCustomerOrders}) {
    const [customerName, setCustomerName] = useState("");
    const navigate = useNavigate();

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
        const customerNameSavetoDatabase = customerName

        try {
            const orderResponse = await api.post("api/orders/", {
                customer_name: customerNameSavetoDatabase,
                totalAmount: parseInt(totalAmount.toFixed(2))
            })

            const OrderId = orderResponse.data.order_ID 

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
            navigate(`/payment/${OrderId}`)
            
        } catch (error) {
            alert("Order Failed")
        }
    }

    // RENDER
    return <section>
            <div class="pos-container">
            <div class="customer-header">
                <div class="customer-info">
                    <p class="customer-name">{customerName}'s Name</p>
                    <p class="order-number">Order Number: #000</p>
                </div>
                <div class="edit-icon">
                    ✎
                </div>

                <input 
                    type="text" 
                    placeholder="Enter name..." 
                    value={customerName} 
                    onChange={(e) => setCustomerName(e.target.value)}
                />
            </div>

            <div class="order-type">
                <button class="btn-outline">Dine In</button>
                <button class="btn-filled">Take out</button>
            </div>
            {orders.length > 0 ? ( <div class="order-items">
                {orders.map((order, index)=>(
                    <div key={index} class="order-item">
                        <img src="banana-split.png" alt="Banana Split" class="item-image" />
                        <div class="item-details">
                            <p class="item-name">{order.product_name}</p>
                            <p class="item-price">₱{order.price}</p>
                        </div>
                        <div class="item-edit">✎</div>
                        <div class="item-quantity">
                            <button  onClick={() => updateQuantity(order.product_ID, order.quantity - 1)} class="qty-btn">-</button>
                            <span>1</span>
                            <button  onClick={() => updateQuantity(order.product_ID, order.quantity + 1)}class="qty-btn">+</button>
                        </div>
                    </div>
                ))}
                <hr />
            </div>) : 
                <div class="order-items">
                    <p>No Item Selected</p>
                </div>
            } 
           
            <div class="summary">
            <div class="summary-row">
                <span>Subtotal</span>
                <span>&#8369;{subtotal.toFixed(2)}</span>
            </div>
            <div class="summary-row">
                <span>Tax(5%)</span>
                <span>&#8369;{tax.toFixed(2)}</span>
            </div>
            <div class="summary-row">
                <span>Discount</span>
                <span>-&#8369;{totalAmount.toFixed(2)}</span>
            </div>

            <hr />

            <div class="summary-total">
                <span>Total</span>
                <span>&#8369;</span>
                <span>&#8369;{totalAmount.toFixed(2)}</span>
            </div>
            </div>

            <div class="action-buttons">
            <button class="btn-outline">Add Promo or Voucher</button>
            <button class="btn-outline">Payment Method</button>
            </div>
        </div>

        {/* ORDER ACTIONS */}
        <button className="cancelOrder">Cancel</button>
        <button className="placeOrder"onClick={handleSubmitOrder} >Place Order</button>
    </section>
}

export default CustomerOrder