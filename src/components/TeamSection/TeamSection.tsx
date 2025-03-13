
const TeamSection = () => {
    return (
        <section
            id="team-section"
            className="flex items-center justify-center py-20 bg-gray-100"
            style={{
                backgroundImage:
                    "url('https://medicare.bold-themes.com/pediatric-clinic/wp-content/uploads/sites/13/2015/12/bg-doktorka.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
                {/* Left Side (Image) */}
                <div className="md:w-1/2 text-center">
                    <img
                        src="https://medicare.bold-themes.com/pediatric-clinic/wp-content/uploads/sites/13/2015/12/doktorka.png"
                        alt="Dr. Stephanie Wosniack"
                        className="w-30 h-30 rounded-full object-cover mx-auto shadow-lg"
                    />
                </div>

                {/* Right Side (Text Content) */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-blue-500">
                        Dr. Stephanie Wosniack
                    </h2>
                    <h3 className="text-xl text-gray-600 mt-2">OUR TEAM</h3>
                    <p className="text-gray-700 mt-4">
                        Dr. Stephanie Wosniack is dedicated to providing her patients with
                        the best possible care. We at MediCare are focused on helping you.
                        After receiving successful care for various aches and pains over the
                        years, Dr. Wosniack found her calling to help others get well.
                    </p>
                    <div className="mt-6">
                        <img
                            src="https://medicare.bold-themes.com/pediatric-clinic/wp-content/uploads/sites/13/2015/12/signature.png"
                            alt="Signature"
                            className="mx-auto w-32"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
