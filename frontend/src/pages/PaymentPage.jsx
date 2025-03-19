import { useParams } from "react-router-dom"
import "../styles/Payment.css"

function Payment() {
    const { orderId } = useParams()

    return (
        <section className="title">
            <h1>Payment Page</h1>
            <p>Order Number: {orderId}</p>
        </section>
    )

}

export default Payment