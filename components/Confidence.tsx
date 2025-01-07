// app/confidence/page.tsx

import { FaRegSmile, FaAward, FaShieldAlt, FaCogs, FaUserFriends, FaLightbulb } from 'react-icons/fa';

const Confidence = () => {
  const cards = [
    {
      title: 'Trusted Service',
      description: 'Build your trust with us, we are committed to excellence.',
      icon: <FaShieldAlt className="text-4xl text-orange-500" />,
    },
    {
      title: 'Expert Team',
      description: 'Our expert team brings years of experience to every project.',
      icon: <FaAward className="text-4xl text-blue-500" />,
    },
    {
      title: 'User-Focused',
      description: 'Your satisfaction is our priority. We always put you first.',
      icon: <FaUserFriends className="text-4xl text-green-500" />,
    },
    {
      title: 'Innovative Solutions',
      description: 'We think outside the box to provide innovative solutions.',
      icon: <FaCogs className="text-4xl text-yellow-500" />,
    },
    {
      title: 'Happy Clients',
      description: 'Our clients love us and we’re proud to have their trust.',
      icon: <FaRegSmile className="text-4xl text-pink-500" />,
    },
    {
      title: 'Creative Ideas',
      description: 'We bring fresh ideas that will inspire you and your business.',
      icon: <FaLightbulb className="text-4xl text-purple-500" />,
    },
  ];

  return (
    <div className="bg-blue-900 py-10">
      <div className="container mx-auto text-center">
      <p className="text-orange-300">Why Registerkaro.in</p>
        <h1 className="text-4xl font-bold text-white mb-8">
          Why Choose <span className='text-orange-500'>Registerkaro</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 mb-12 ml-10 mr-10">
          {cards.slice(0, 3).map((card, index) => (
            <div
              key={index}
              className="border-2 border-orange-300 rounded-lg p-6 shadow-lg bg-white flex flex-col items-center"
            >
              {card.icon}
              <h2 className="text-xl font-semibold text-gray-800 mt-4">{card.title}</h2>
              <p className="text-gray-600 text-center mt-2">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 ml-10 mr-10">
          {cards.slice(3).map((card, index) => (
            <div
              key={index}
              className="border-2 border-orange-300 rounded-lg p-6 shadow-lg bg-white flex flex-col items-center"
            >
              {card.icon}
              <h2 className="text-xl font-semibold text-gray-800 mt-4">{card.title}</h2>
              <p className="text-gray-600 text-center mt-2">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Confidence;