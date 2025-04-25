import { useParams } from "react-router-dom"
import "../styles/Payment.scss"
import qr from "../assets/OrderMS/QR.svg"

function Payment() {
    const { orderId } = useParams()

    return (
        <div class="payment-container">
            <div class="payment-left">
            <h1 class="title">Payment</h1>

            <div class="payment-tabs">
                <button class="tab active">E-Payment</button>
                <button class="tab">Cash</button>
            </div>

            <div class="qr-section">
                <div class="qr-box">
                <img src={qr} alt="QR Code" class="qr-code" />
                </div>
                <p class="scan-instruction">Please Scan QR for Payment</p>
                <input type="text" />
                <p class="reference-label">Reference Number</p>
            </div>

            <button class="finish-btn">Finish Payment</button>
            </div>

            <div class="payment-summary">
            <p class="summary-title">Total amount</p>
            <p class="total-amount">₱00.00</p>
            <p class="secure-label">Secure <span>Payment</span></p>

            <div class="summary-details">
                <div class="summary-row header">
                <span>Order Summary</span>
                <span>Order ID</span>
                </div>

                <div class="summary-row item">
                <span>
                    Product Name<br />
                    <small>2x</small>
                </span>
                <span>₱00.00</span>
                </div>

                <hr />

                <div class="summary-row">
                <span>Subtotal</span>
                <span>₱180.00</span>
                </div>
                <div class="summary-row">
                <span>Tax(5%)</span>
                <span>₱9.00</span>
                </div>
                <div class="summary-row">
                <span>Discount</span>
                <span>₱0.00</span>
                </div>

                <hr />

                <div class="summary-row total">
                <span>Total</span>
                <span>₱300.00</span>
                </div>
            </div>

            <p class="print-receipt">Print Receipt</p>
            </div>
        </div>
    )

}

export default Payment