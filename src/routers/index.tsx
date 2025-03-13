
import LoginPage from "@/page/Auth/LoginPage/LoginPage";
import HomePage from "@/page/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
}

export default AppRouter;