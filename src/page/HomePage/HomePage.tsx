import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MedicalSection from "@/components/Header/MedicalSection/MedicalSection";
import TeamSection from "@/components/TeamSection/TeamSection";

const HomePage = () => {
    return (
        <>
            <Header />
            <section
                className="relative bg-cover bg-center text-white py-40"
                style={{
                    backgroundImage: "url('/dark-hero-4.jpg')",
                    minHeight: "80vh",
                }}
            >
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                    {/* Left Column */}
                    <div className="md:w-1/2 p-6 text-center md:text-left">
                        <h1 className="text-5xl font-bold leading-tight">
                            THE <span className="text-blue-500">RIGHT</span> PEDIATRICIAN
                        </h1>
                        <p className="mt-4 text-xl md:text-lg">
                            We at MediCare are always fully focused on helping your child and
                            you to overcome any hurdle or any other problem.
                        </p>
                        <div className="mt-8 space-x-6">
                            <a
                                href="#"
                                className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-gray-800 transition-all duration-300"
                            >
                                More details
                            </a>
                            <a
                                href="#"
                                className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
                            >
                                Book appointment
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <MedicalSection />

            <TeamSection />

            <Footer />
        </>
    );
};

export default HomePage;
