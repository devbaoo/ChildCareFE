const MedicalSection = () => {
    const services = [
        {
            image: "https://medicare.bold-themes.com/pediatric-clinic/wp-content/uploads/sites/13/2015/12/devojcica-kod-zubara-320x320.jpg",
            subtitle: "For your child whitest teeths",
            title: "DENTIST",
            description:
                "Praesent convallis tortor et enim laoreet, vel consectetur purus latoque penatibus et dis parturient.",
            icon: "💙",
        },
        {
            image: "https://medicare.bold-themes.com/pediatric-clinic/wp-content/uploads/sites/13/2015/12/srce-i-stetoskop-320x320.jpg",
            subtitle: "Got a broken heart?",
            title: "CARDIOLOGIST",
            description:
                "Nullam eleifend lectus a tortor interdum, non sodales ante vehicula. Proin consequat, at commodo.",
            icon: "❤️",
        },
        {
            image: "https://medicare.bold-themes.com/pediatric-clinic/wp-content/uploads/sites/13/2015/12/kiroprakticar-320x320.jpg",
            subtitle: "Neck or back pain?",
            title: "CHIROPRACTOR",
            description:
                "Duis scelerisque faucibus nisi sed lacinia. Curabitur ipsum elit, cursus id dui quis, dictum laoreet neque.",
            icon: "💆‍♂️",
        },
    ];

    const workingHours = [
        { day: "Monday", hours: "8:00 AM – 2:30 PM" },
        { day: "Tuesday", hours: "8:00 AM – 7:00 PM" },
        { day: "Wednesday", hours: "8:00 AM – 7:00 PM" },
        { day: "Thursday", hours: "8:00 AM – 7:00 PM" },
        { day: "Friday", hours: "8:00 AM – 7:00 PM" },
        { day: "Saturday", hours: "Closed" },
        { day: "Sunday", hours: "Closed" },
    ];

    return (
        <section className="container mx-auto py-10 px-5 grid grid-cols-1 md:grid-cols-4 gap-6 font-barlow">
            {services.map((service, index) => (
                <div key={index} className="text-center p-6 border rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="mx-auto rounded-full w-32 h-32 object-cover shadow-lg transition-all duration-300 ease-in-out"
                    />
                    <div className="text-xl mt-3 font-semibold">{service.icon}</div>
                    <h4 className="text-sm text-gray-500 mt-2">{service.subtitle}</h4>
                    <h3 className="text-lg font-bold mt-1">{service.title}</h3>
                    <p className="text-gray-600 mt-2">{service.description}</p>
                </div>
            ))}

            <div className="text-center p-6 border rounded-lg shadow-lg mt-6 md:mt-0 hover:scale-105 transition-all duration-300 ease-in-out">
                <h3 className="text-lg font-bold">WORKING HOURS</h3>
                <p className="text-gray-600 mt-2">Duis scelerisque faucibus nisi sed lacinia. Curabitur ipsum elit.</p>
                <ul className="mt-4">
                    {workingHours.map((wh, index) => (
                        <li key={index} className="flex justify-between px-4 py-2 border-b text-sm">
                            <span className="font-semibold">{wh.day}</span>
                            <span>{wh.hours}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default MedicalSection;
