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
            <p>{isOpen ? "v" : "Track Order"} <img className="track--button" src={trackordericon} alt="" /></p>
        </div>

        {/* Display Order Panel */}

        { isOpen && (<div className="viewOrderStatus">

                {/* X BUTTON */}
                <p className="closeButton" onClick={() => setIsOpen(isOpen==false)} >Track Order -</p>

                <div className="kitchenOrderStatus">
                    <p>Name</p>
                </div>
            </div>)
        } 
        
        

    </>

}

export default TrackOrder