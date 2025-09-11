import React from 'react';

const QuickTravelTips = () => {
  const tips = [
    {
      number: 1,
      title: "Best Time to Visit",
      description: "The dry season (Nov–Apr) is perfect for exploring temples and beaches, while the wet season (May–Oct) brings lush green landscapes and fewer crowds."
    },
    {
      number: 2,
      title: "Currency & Payments",
      description: "The US Dollar is widely accepted alongside the Cambodian Riel. Carry small bills, as cash is preferred in local markets and small shops."
    },
    {
      number: 3,
      title: "Dress Respectfully",
      description: "When visiting temples like Angkor Wat, cover your shoulders and knees as a sign of respect. Light, breathable clothes are best for the tropical heat."
    },
    {
      number: 4,
      title: "Stay Hydrated & Safe",
      description: "Cambodia can get hot and humid — drink bottled water, use sunscreen, and keep insect repellent handy for outdoor adventures."
    }
  ];

  return (
    <div className="w-full py-10">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-left mb-8 self-start">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Top Destinations
          </h1>
          <p className="mt-2 text-xl md:text-2xl text-gray-500">
            Our most visited destinations…
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tips.map((tip, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {tip.number}
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{tip.title}</h3>
              <p className="text-gray-700 leading-relaxed">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickTravelTips;