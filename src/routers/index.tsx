import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "@/page/Auth/LoginPage/LoginPage";
import HomePage from "@/page/HomePage/HomePage";

import { useAppSelector } from "@/services/store/store";

const AppRouter = () => {
    const token = localStorage.getItem("childcareToken");
    const { auth } = useAppSelector((state) => state.auth);
    const role = auth?.role; // Lấy role từ Redux store

    return (
        <Routes>
            {/* Nếu chưa đăng nhập, chỉ có thể vào login hoặc home */}
            {!token ? (
                <>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </>
            ) : (
                <>
                    {/* Nếu đã đăng nhập, phân quyền theo role */}
                    {role === "ADMIN" && (
                        <>
                            //page của admin
                            <Route path="*" element={<Navigate to="/admin" />} />
                        </>
                    )}
                    {role === "STAFF" && (
                        <>
                            //page của staff
                            <Route path="*" element={<Navigate to="/staff" />} />
                        </>
                    )}
                    {role === "USER" && (
                        <>
                            //page của user
                            <Route path="*" element={<Navigate to="/customer" />} />
                        </>
                    )}
                </>
            )}
        </Routes>
    );
};

export default AppRouter;
