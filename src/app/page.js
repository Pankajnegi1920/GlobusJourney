"use client";
import React from "react";
import Image from "next/image";

const images = [
  "/images/kedarnath-cropped.png",
  "/images/badrinath_cropped.png",
  "/images/ganotri-cropped.png",
  "/images/yamunotri-cropped.png",
  "/images/Globus_Journey.png"
];

const cards = [
  { title: 'Mountain View', copy: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains', button: 'View Trips' },
  { title: 'To The Beach', copy: 'Plan your next beach trip with these fabulous destinations', button: 'View Trips' },
  { title: 'Desert Destinations', copy: 'It\'s the desert you\'ve always dreamed of', button: 'Book Now' },
  { title: 'Explore The Galaxy', copy: 'Seriously, straight up, just blast off into outer space today', button: 'Book Now' }
];

const imageIds = [
  "/images/nainital.jpg",
  "/images/himachal.jpg",
  "/images/kerala.jpg",
  "/images/kashmir.jpg",
  "/images/kashmir.jpg",
];

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen text-gray-900">
      {/* Fixed Navigation Bar */}
      <nav className="navbar">
        {/* <a href="#" className="nav-cta-btn">
          Get Started
        </a> */}
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {/* Fullscreen Background Image */}
        <div className="relative w-full h-screen">
          <Image
            src="/images/background20.jpeg"
            alt="Travel"
            layout="fill"
            objectFit="cover"
            priority
          />
          {/* Header Text Overlay */}
          <div className="absolute top-0 left-0 w-[160px] p-3 z-10 bg-transparent">
            <Image
              src="/images/logotest.png"
              alt="Globus Journey"
              width={200}
              height={50}
            />
            
          </div>
          
        </div>

        {/* Scroll Animation Section */}
        <div className="section relative h-auto ">
          <div className="video-visual">
            <video
              className="video"
              autoPlay
              loop
              muted
              poster=""
              role="none"
              aria-label="background gradient animation"
            >
              <source
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/bg-gradient-animation.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="section-wrapper">
            {/* Left Column - Content */}
            <div className="content-wrapper">
              {/* Content 1 */}
              <div className="content content-1">
                <div className="mobile-visual">
                  <img
                    className="card-img"
                    src={images[0]}
                    alt="Kedarnath - Sacred Hindu Temple"
                  />
                </div>
                <div className="meta">
                  <h2 className="headline">
                    Discover the
                    <span className="text-highlight"> Divine Kedarnath</span>
                  </h2>
                  <p className="desc">
                    "Kedarnath – where the mighty Himalayas whisper tales of devotion and the sacred Mandakini sings hymns of eternity. A place where faith meets the heavens, and every step taken is a journey closer to the divine."
                  </p>
                </div>
              </div>

              {/* Content 2 */}
              <div className="content content-2">
                <div className="mobile-visual">
                  <img
                    className="card-img"
                    src={images[1]}
                    alt="Badrinath - Sacred Hindu Temple"
                  />
                </div>
                <div className="meta">
                  <h2 className="headline">
                    Explore the
                    <span className="text-highlight"> Sacred Badrinath</span>
                  </h2>
                  <p className="desc">
                    Visit Badrinath, a revered shrine dedicated to Lord Vishnu, nestled in the Himalayas.
                  </p>
                </div>
              </div>

              {/* Content 3 */}
              <div className="content content-3">
                <div className="mobile-visual">
                  <img
                    className="card-img"
                    src={images[2]}
                    alt="Gangotri - Source of the Ganges"
                  />
                </div>
                <div className="meta">
                  <h2 className="headline">
                    Journey to
                    <span className="text-highlight"> Gangotri</span>
                  </h2>
                  <p className="desc">
                    Witness the origin of the holy Ganges River at Gangotri, a place of immense spiritual significance.
                  </p>
                </div>
              </div>

              {/* Content 4 */}
              <div className="content content-4">
                <div className="mobile-visual">
                  <img
                    className="card-img"
                    src={images[3]}
                    alt="Yamunotri - Source of the Yamuna"
                  />
                </div>
                <div className="meta">
                  <h2 className="headline">
                    Visit
                    <span className="text-highlight"> Yamunotri</span>
                  </h2>
                  <p className="desc">
                    Pay homage to the source of the Yamuna River at Yamunotri, a serene and sacred destination.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Images */}
            <div className="visual">
              <div className="card-wrapper">
                {/* Card 1 */}
                <div className="card card-1">
                  <img
                    className="card-img"
                    src={images[0]}
                    alt="Kedarnath - Sacred Hindu Temple"
                  />
                </div>
                {/* Card 2 */}
                <div className="card card-2">
                  <img
                    className="card-img"
                    src={images[1]}
                    alt="Badrinath - Sacred Hindu Temple"
                  />
                </div>
                {/* Card 3 */}
                <div className="card card-3">
                  <img
                    className="card-img"
                    src={images[2]}
                    alt="Gangotri - Source of the Ganges"
                  />
                </div>
                {/* Card 4 */}
                <div className="card card-4">
                  <img
                    className="card-img"
                    src={images[3]}
                    alt="Yamunotri - Source of the Yamuna"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Custom Card Section */}
        <div className="bg-white py-12 w-full"> {/* Ensure full width */}
          <h2 className="text-2xl font-bold text-center text-black mb-6">
            Discover More Destinations
          </h2>
          <div className="new-card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 w-full max-w-6xl mx-auto">
            {cards.map((card, index) => (
              <div
                key={index}
                className="new-card relative flex items-end overflow-hidden rounded-lg shadow-lg h-64 text-center text-white"
                style={{
                  backgroundImage: `url(${imageIds[index]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="new-card-content relative p-6 w-full transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]">
                  <h3 className="new-card-title text-lg font-semibold">{card.title}</h3>
                  <p className="new-card-copy mt-2 text-sm opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]">
                    {card.copy}
                  </p>
                  <button className="new-card-btn mt-4 px-4 py-2 text-xs font-bold uppercase bg-black text-white opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]">
                    {card.button}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-white text-black text-center p-4 shadow-md">
        &copy; 2025 My Website. All rights reserved.
      </footer>
    </div>

  );
};

export default HomePage;