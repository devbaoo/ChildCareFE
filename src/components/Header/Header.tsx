import { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <a href="/" aria-label="Go to homepage">
                        <img
                            className="h-10"
                            src="http://medicare.bold-themes.com/pediatric-clinic/wp-content/uploads/sites/13/2018/03/pediatric-logo-color.png"
                            alt="Medicare Logo"
                        />
                    </a>
                </div>

                {/* Navigation */}
                <nav className="hidden lg:flex space-x-6 text-base">
                    <a href="/" className="hover:text-gray-400 transition">Home</a>
                    <a href="/about" className="hover:text-gray-400 transition">About Us</a>
                    <a href="/pages" className="hover:text-gray-400 transition">Pages</a>
                    <a href="/news" className="hover:text-gray-400 transition">News</a>
                    <a href="/shop" className="hover:text-gray-400 transition">Shop</a>
                </nav>

                {/* Login */}
                <div className="hidden lg:flex space-x-4 text-sm">
                    <a href="/login" className="px-6 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition duration-300">
                        Login
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                        className="text-white"
                    >
                        <IoMenu size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden flex flex-col bg-gray-800 p-4 mt-2 space-y-3 text-center transition-all ease-in-out">
                    <a href="/" className="hover:text-gray-400 transition">Home</a>
                    <a href="/about" className="hover:text-gray-400 transition">About Us</a>
                    <a href="/pages" className="hover:text-gray-400 transition">Pages</a>
                    <a href="/news" className="hover:text-gray-400 transition">News</a>
                    <a href="/shop" className="hover:text-gray-400 transition">Shop</a>
                </div>
            )}
        </header>
    );
};

export default Header;
