// import NavBar from "./components/NavBar"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Register from "./authentication/Register"
import Login from "./authentication/Login"
import NotFound from "./pages/NotFound"
import OrderManagementPage from "./pages/OrderManagementPage"
import Payment from "./pages/PaymentPage"
import ProtectedRoute from "./components/ProtectedRoutes"
import AddProduct from "./product-management/pages/AddProduct"
import UpdateProduct from "./product-management/pages/UpdateProduct"
import AllProducts from "./product-management/pages/AllProducts"

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

      {/* PRODUCT MANAGEMENT */}
      <Route path="/add-product" element={
        <ProtectedRoute>
          <AddProduct/>
        </ProtectedRoute>
      }></Route>

      <Route path="/update-product" element={
        <ProtectedRoute>
          <UpdateProduct/>
        </ProtectedRoute>
      }></Route>

      <Route path="/all-products" element={
        <ProtectedRoute>
          <AllProducts/>
        </ProtectedRoute>
      }></Route>


      {/* PAYMENT */}
      <Route path="/payment/:orderId" element={
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
