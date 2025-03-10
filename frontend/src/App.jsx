// import NavBar from "./components/NavBar"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Register from "./pages/Register"
import Login from "./pages/login"
import NotFound from "./pages/NotFound"
import OrderManagementPage from "./pages/OrderManagementPage"
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
      <Route path="/" element={
        <ProtectedRoute>
          <OrderManagementPage/>
        </ProtectedRoute>
      }></Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/register" element={<RegisterAndLogout/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
 )

}

export default App
