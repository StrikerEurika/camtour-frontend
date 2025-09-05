import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl">
                <Image
                  src="https://framerusercontent.com/images/IujkFU3ymxNozWVgG8b2fqCmY.jpeg?width=800&height=800"
                  alt="AngkorDer logo"
                  fill
                  className="object-cover"
                  sizes="56px"
                  priority
                />
              </div>
              <h2
                className="font-[600] tracking-tight text-2xl md:text-3xl"
                style={{ fontFamily: "Palette Mosaic, system-ui, sans-serif" }}
              >
                AngkorDer
              </h2>
            </div>

            <p className="text-sm text-white/60 hidden md:block">
              Discover destinations, experiences, and events around Cambodia
              with AngkorDer.
            </p>
          </div>

          {/* Our Support */}
          <div>
            <h3 className="text-white text-base font-medium mb-4 text-center md:text-left">
              Our Support
            </h3>
            <ul className="space-y-3 text-center md:text-left">
              <li>
                <a
                  href="https://itc.edu.kh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Institute of Technology of Cambodia
                </a>
              </li>
              <li>
                <a
                  href="https://tourism.gov.kh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Ministry of Tourism of Cambodia
                </a>
              </li>
              <li>
                <span className="text-white/70">Faker Team</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-base font-medium mb-4 text-center md:text-left">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3 text-center md:text-left">
                <li>
                  <Link
                    href="/#home-header"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/destinations"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Destination
                  </Link>
                </li>
                <li>
                  <Link
                    href="/experiences"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Experiences
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/accommodation"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Accommodation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-white text-base font-medium mb-4 text-center md:text-left">
                Contact Us
              </h3>
              <ul className="space-y-3 text-center md:text-left">
                <li className="text-white/70">CamTour Chatbot</li>
                <li>
                  <a
                    href="mailto:info@angkorDer.kh.com"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    info@angkorDer.kh.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+85511909876"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    +855 11 909 876
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-base font-medium mb-4 text-center md:text-left">
                Follow Us
              </h3>
              <ul className="space-y-3 text-center md:text-left">
                <li>
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="YouTube"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Youtube
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="X (Twitter)"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    X
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-white/10" />

        {/* Bottom row */}
        <div className="text-center">
          <p className="text-sm text-white/70">
            © {year} AngkorDER. All Rights Reserved.{" "}
            <span className="px-2">|</span>
            <Link
              href="/privacy"
              className="underline decoration-white/20 hover:text-white"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
