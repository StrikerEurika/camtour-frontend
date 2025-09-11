import Image from "next/image";
import Link from "next/link";

const destinations = [
  {
    id: 1,
    title: "Angkor Wat",
    description:
      "The world’s largest religious monument and Cambodia’s pride. Sunrise over Angkor Wat is a once-in-a-lifetime view, with intricate carvings and ancient temples that tell stories of the Khmer Empire.",
    imageUrl:
      "https://framerusercontent.com/images/lpSlPy9ZYJLdG8k5O5SHcMcV5I.jpg",
    alt: "Angkor Wat Temple",
  },
  {
    id: 2,
    title: "Royal Palace",
    description:
      "A lively capital where history meets modern life. Visit the Royal Palace, the Silver Pagoda, and museums that reflect Cambodia's past, then enjoy riverside cafes and vibrant night life.",
    imageUrl:
      "https://framerusercontent.com/images/tLm5t6X8mrMGOxCrUUSa2ce4GuE.jpg",
    alt: "Royal Palace in Phnom Penh",
  },
  {
    id: 3,
    title: "Koh Rong Island",
    description:
      "A tropical escape with powdery white sands, crystal-clear waters, and a laid-back vibe. Perfect for snorkeling, diving, and watching glowing plankton light up the night sea.",
    imageUrl:
      "https://framerusercontent.com/images/QH9eRAlQiuqZP7xi94QF19oemfw.jpg",
    alt: "Beach on Koh Rong Island",
  },
];

const TopDestinations = () => {
  return (
    // top destinations section
    <section id="top-destination" className="w-full py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="text-left mb-8 self-start">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Top Destinations
          </h1>
          <p className="mt-2 text-xl md:text-2xl text-gray-500">
            Our most visited destinations…
          </p>
        </div>

        {/* Hover grouped Pics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group relative overflow-hidden rounded-lg shadow-[0_20px_50px_-20px_rgba(0,0,0,0.3)] border-8 border-white"
            >
              <Image
                src={destination.imageUrl}
                alt={destination.alt}
                width={720}
                height={1080}
                className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-black">
                    {destination.title}
                  </h3>
                  <p className="mt-2 text-sm text-black italic">
                    {destination.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/destinations"
            className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-600 transition-colors duration-300"
          >
            Explore more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
