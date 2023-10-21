import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "../pages/loginPage"
import HomePage from "../pages/Home"

export const Router = () => <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
    </Routes>
</BrowserRouter>

