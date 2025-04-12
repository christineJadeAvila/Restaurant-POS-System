import { useNavigate } from "react-router-dom"
import arrow from "../assets/arrow.png"
import "./styles/BackButton.scss"

function BackButton() {
  const navigate = useNavigate()
  const back = () => {
    navigate("/")
  }
  return (
    <><img src={arrow} onClick={back} className="back-button"/></>
  )
}

export default BackButton