// import NavBar from "./components/NavBar"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Register from "./authentication/Register"
import Login from "./authentication/Login"
import NotFound from "./pages/NotFound"
import OrderManagementPage from "./pages/OrderManagementPage"
import Payment from "./pages/PaymentPage"
import ProtectedRoute from "./components/ProtectedRoutes"

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  
 return(
  <BrowserRouter>
    <Routes>
      {/* ORDER MANAGEMENT */}
      <Route path="/" element={
        <ProtectedRoute>
           <OrderManagementPage/>
        </ProtectedRoute>
      }></Route>

      {/* PAYMENT */}
      <Route path="/payment/:id" element={
        <ProtectedRoute>
          <Payment/>
        </ProtectedRoute>
      }></Route>

      {/* AUTHENTICATION FORMS */}
      <Route path="/login" element={<Login/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/register" element={<RegisterAndLogout/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
 )

}

export default App
