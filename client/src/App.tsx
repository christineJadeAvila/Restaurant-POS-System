import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"
import Login from "./authentication/Login"
import Register from "./authentication/Register"
import ProductsList from "./product-management/pages/ProductsList"
import UpdateProduct from "./product-management/pages/UpdateProduct"
import AddProduct from "./product-management/pages/AddProduct"
import NotFound from "./pages/NotFound"

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/all-products" element={
                  <ProtectedRoute>
                    <ProductsList/>
                  </ProtectedRoute>
          }></Route>
          <Route path="/update-product" element={
                  <ProtectedRoute>
                    <UpdateProduct/>
                  </ProtectedRoute>
          }></Route>
          <Route path="/add-product" element={
                  <ProtectedRoute>
                    <AddProduct/>
                  </ProtectedRoute>
          }></Route>
          
          {/* AUTHENTICATION FORMS */}
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/register" element={<RegisterAndLogout/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
