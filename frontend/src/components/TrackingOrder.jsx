import "../styles/TrackingOrder.css"
import trackordericon from "../assets/OrderMS/upBTN.png"

import { useState } from "react"

function TrackOrder() {
    const [isOpen, setIsOpen] = useState(false)

    return <>
        {/* Order Panel Opener */}
        <div 
            className="track--order"
            onClick={() => setIsOpen(!isOpen)}
        >
            <p>{isOpen ? "v" : "Track Order ^"} </p>
        </div>

        {/* Display Order Panel */}
        { isOpen && (<div className="viewOrderStatus">
                <p className="closeButton" onClick={() => setIsOpen(isOpen==false)} >Track Order -</p>
                <div className="kitchenOrderStatus">
                    <p>Name</p>
                </div>
            </div>)
        } 
    </>
}

export default TrackOrder