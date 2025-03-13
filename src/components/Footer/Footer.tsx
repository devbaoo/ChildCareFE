import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center">
                {/* Logo & Description */}
                <div className="flex flex-col items-center space-y-6 md:items-start">
                    <img
                        src="https://medicare.bold-themes.com/pediatric-clinic/wp-content/uploads/sites/13/2018/03/pediatric-logo-footer.png"
                        alt="Pediatric Logo"
                        className="h-16"
                    />
                    <p className="text-center text-gray-400 text-sm max-w-md">
                        Sed magna nulla, pulvinar vel ante vel, fringilla vulputate nibh. In placerat facilisis tincidunt.
                    </p>
                </div>

                {/* Contact Info */}
                <div className="mt-5 text-center text-sm md:text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div>
                            <p className="font-semibold text-white">Operating Hours</p>
                            <p className="text-gray-400">Monday - Friday: 8AM - 7PM</p>
                            <p className="text-gray-400">Saturday & Sunday: CLOSED</p>
                        </div>
                        <div>
                            <p className="font-semibold text-white">Contact Us</p>
                            <p className="text-gray-400">Phone: +0800 2336 7811</p>
                            <p className="text-gray-400">Email: Office@Medicare.com</p>
                        </div>
                        <div>
                            <p className="font-semibold text-white">Our Location</p>
                            <p className="text-gray-400">27th Avenue, New York, W2 3XE</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center text-gray-500 text-sm mt-12 border-t border-gray-700 pt-6">
                <p>© 2025 Pediatric Clinic. All Rights Reserved.</p>
                <div className="mt-2 space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
                </div>
                {/* Social Media Icons */}
                <div className="mt-4 space-x-6 text-xl text-gray-400 flex justify-center md:justify-end">
                    <a
                        href="http://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="hover:text-white transition-colors duration-300"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="http://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="hover:text-white transition-colors duration-300"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="http://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-white transition-colors duration-300"
                    >
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
