import LoginFormComponent from "@/components/Auth/LoginForm/LoginForm";
import { Link } from 'react-router-dom';

const LoginPage = () => {

    // Hàm điều hướng về trang chủ khi nhấn nút

    return (
        <div className="flex items-center justify-center min-h-screen bg-light-blue-100 relative">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(/dark-hero-4.jpg)' }}
            ></div>

            <Link className="absolute top-4 left-4 text-white" to="/">
                <div className="flex items-center">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 320 512"
                        className="mr-3 h-[13px] w-[8px] text-white"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path>
                    </svg>
                    <p className="ml-0 text-sm text-white">Back to the website</p>
                </div>
            </Link>

            <div className="bg-white rounded-xl shadow-xl p-8 w-auto relative z-10">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <LoginFormComponent />
            </div>
        </div>
    );
};

export default LoginPage;
