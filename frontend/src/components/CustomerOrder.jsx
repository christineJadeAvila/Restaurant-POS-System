import "../styles/Customer.css"

function CustomerOrder({orders}) {
    return <section>
    
        <h3>Customer's Name</h3>


        {/* Display Added Orders */}
        <div className="orders">
            {orders.length > 0 ?(
                <ul>
                    {orders.map((order, index) => (
                        <li key={index}>
                            {order.product_name} - P{order.price}
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
                <td>P</td>
                <td>0.00</td>
            </tr>
            <tr>
                <th>Tax (5%)</th>
                <td>P</td>
                <td>0.00</td>
            </tr>
            <tr>
                <th>Discount</th>
                <td>P</td>
                <td>0.00</td>
            </tr>
        </table>

        <div className="paymentSubtotal">

        </div>

        <button className="cancelOrder">Cancel</button>
        <button className="placeOrder">Place Order</button>

    </section>
}

export default CustomerOrder