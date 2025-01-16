function Services() {
  const services = [
    {
      id: 1,
      title: 'Job Application Assistance',
      description:
        'We help you find and apply to the best job opportunities by providing tailored recommendations and resources.',
      icon: '📝', // Example emoji/icon
    },
    {
      id: 2,
      title: 'Career Counseling',
      description:
        'Get expert advice and personalized guidance to help you make informed career decisions.',
      icon: '💼',
    },
    {
      id: 3,
      title: 'Resume Building',
      description:
        'Create a professional resume that highlights your skills and increases your chances of getting hired.',
      icon: '📄',
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-sky-500 text-center mb-8">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-200"
          >
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">{service.icon}</span>
              <h2 className="text-2xl font-bold text-sky-500">
                {service.title}
              </h2>
            </div>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
