import { useState } from "react"
import "./styles/BurgerMenu.scss"
import SideBar from "./SideBar"
import burgerMenu from "../assets/burgerMenu.svg"

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (<>
    <div className="burger-menu">
        <img src={burgerMenu} alt="" className="burger-menu" onClick={() => setIsOpen(!isOpen)}/>
    </div>
    
    {isOpen && <SideBar onClose={() => setIsOpen(false)}/>}
  </>
  )
}

export default BurgerMenu