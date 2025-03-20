import { useParams } from "react-router-dom"
import "../styles/Payment.css"
import qr from "../assets/OrderMS/QR.svg"

function Payment() {
    const { orderId } = useParams()

    return (
        <div className="payment-div-container">
            {/* PAYMENT SECTION */}
            <section className="payment-container">
                <h1 className="section-title">Payment</h1>
                <section className="navigation-bar">
                    <a id="e-payment">E-Payment</a>
                    <a id="cash">Cash</a>
                </section>

                <section className="e-payment">
                    <div className="qr-container">

                            <img src={qr} alt="" />

                    </div>
                    <input type="text" id="reference-number" required/>
                    <label>Reference Number</label>
                </section>
                <button id="proceed-payment">Finish Payment</button>
            </section>

            {/* ORDER SUMMARY SECTION */}
            <section className="order-summary">
                <div className="payment-total-amount">
                    <h5 className="total-amount-label">Total Amount</h5>
                    <h1 className="total-amount">P00.00</h1>
                    <h5 className="secure-payment-label"><span id="color-green">Secure</span> Payment</h5>
                </div>
                <hr />
                <div className="order-summary-title">
                    <h5 className="order-summary-label">Order Summary</h5>
                    <h5 className="order-id">#000{orderId}</h5>
                </div>
                <div className="order-line-container">
                    <h5 className="order-item">Banana Split</h5>
                    <h5 className="orderline-total-amount">P00.00</h5>
                </div>
                <p className="quantity">2x</p>
            </section>
        </div>
    )

}

export default Payment