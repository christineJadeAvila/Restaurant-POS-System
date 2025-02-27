import NavBar from "./components/NavBar"
import SideBar from "./components/SideBar"
import { BrowserRouter, Routes, Route, Navigation, Navigate } from "react-router-dom"
import ORMs from "./pages/orderManagementPage"
import PRMs from "./pages/productManagement"
import ProtectedRoute from "./components/ProtectedRoutes"


function logout() {
  localStorage.clear()
  return <Navigate to="/" />
}
function App() {
  
 return(
  <>
   
  </>
 )

}

export default App
X``