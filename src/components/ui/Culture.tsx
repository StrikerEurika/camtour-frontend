import React from "react";
import Image from "next/image";
import Link from "next/link";

const Culture = () => {
  return (
    <section id="home-culture" className="w-full py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="container mx-auto px-4">
          <div className="text-left mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Culture and Tradition
            </h1>
            <p className="mt-2 text-xl md:text-2xl text-gray-500">
              Our most visited destinations…
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/carousel-images/amok-dish.jpg"
                alt="Amok Trey"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Amok Trey</h2>
              <p className="text-lg text-black mb-6">
                Amok Trey of Fish Amok is a creamy coconut curry with fish,
                Cambodia’s national dish. It’s often steamed in banana leaves,
                making it as beautiful as it is flavorful.
              </p>
              <div className="flex space-x-4">
                <div className="relative w-20 h-20 rounded-md overflow-hidden border-2 border-white">
                  <Image
                    src="/carousel-images/cambodia-temple.jpg"
                    alt="Food 1"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="relative w-20 h-20 rounded-md overflow-hidden border-2 border-white">
                  <Image
                    src="/carousel-images/experience-1.jpg"
                    alt="Food 2"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="relative w-20 h-20 rounded-md overflow-hidden border-2 border-white">
                  <Image
                    src="/carousel-images/experience-2.jpg"
                    alt="Food 3"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="relative w-20 h-20 rounded-md overflow-hidden border-2 border-white">
                  <Image
                    src="/carousel-images/amok-dish.jpg"
                    alt="Food 4"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Khmer New Year</h2>
              <p className="text-lg text-black mb-6">
                <strong className="text-black font-semibold">
                  Khmer New Year (Chaul Chnam Thmey, April):
                </strong>{" "}
                Cambodia’s biggest celebration, with games, dancing, and water
                blessings. It marks not only a new year but also the end of the
                harvest season, a time of joy and renewal.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/carousel-images/vesak-festival.jpg"
                alt="Khmer New Year"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <div className="text-center mt-12 italic">
            <p className="text-lg">
              "Together, food and festivals reflect Cambodia’s warmth,
              spirituality, and deep cultural roots."
            </p>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/destinations"
              className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-600 transition-colors duration-300"
            >
              Explore more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
