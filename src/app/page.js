"use client";
import React, { useState } from "react";
import Image from "next/image";

const images = [
  "/images/kedarnath-cropped.png",
  "/images/badrinath_cropped.png",
  "/images/ganotri-cropped.png",
  "/images/yamunotri-cropped.png",
  "/images/Globus_Journey.png"
];

const cards = [
  { title: 'Uttarakhand', copy: 'Explore Uttarakhand, the "Land of Gods," where majestic Himalayan peaks, serene rivers, and lush green valleys create a paradise for travelers.', button: 'Book Now' },
  { title: 'Himachal', copy: 'Himachal Pradesh—where the mountains whisper tales of adventure, serenity, and timeless beauty!', button: 'Book Now' },
  { title: 'Kerala', copy: 'Explore serene houseboats of Alleppey to the misty hills of Munnar, Kerala offers a perfect blend of nature, tradition, and modernity', button: 'Book Now' },
  { title: 'Kashmir', copy: 'Kashmir, often called "Paradise on Earth," is a land of breathtaking beauty, with snow-capped mountains, pristine lakes, and lush valleys, straight up, just blast off into outer space today', button: 'Book Now' }
];

const imageIds = [
  "/images/nainital.jpg",
  "/images/himachal.jpg",
  "/images/kerala.jpg",
  "/images/kashmir.jpg",
  "/images/kashmir.jpg",
];

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


//   const carousel = document.getElementById('carousel');
//   const scrollLeftButton = document.getElementById('scrollLeft');
//   const scrollRightButton = document.getElementById('scrollRight');

//   scrollLeftButton.addEventListener('click', () => {
//     carousel.scrollBy({ left: -320, behavior: 'smooth' }); // Adjust the scroll distance as needed
//   });

//   scrollRightButton.addEventListener('click', () => {
//     carousel.scrollBy({ left: 320, behavior: 'smooth' }); // Adjust the scroll distance as needed
//   });


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

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 opacity-65" style={{ fontSize: '18vh' }}>
                Discover the Unseen!
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl max-w-5xl mx-auto opacity-70" style={{ fontSize: '5vh' }}>
                Unravel breathtaking landscapes, vibrant cultures, and unforgettable adventures—your next journey awaits!
              </p>
            </div>
          </div>
        </div>

        {/* New Custom Card Section */}
        <div className="bg-white py-12 w-full pt-6"> {/* Ensure full width */}
          <h2 className="text-2xl font-bold text-center text-black mb-6 opacity-80" style={{ fontSize: '5vh' }}>
            Discover Destinations
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
                  <button className="new-card-btn mt-4 px-4 py-2 text-xs font-bold uppercase bg-black text-white opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]" onClick={openModal}>
                    {card.button}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Animation Section */}
        <div className="section relative h-auto">
          {/* Text Overlay - Fixed to Top */}
          <div className="absolute top-0 left-0 w-full text-center text-white z-20 py-8 bg-opacity-50">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 opacity-100"
              style={{ fontSize: '6vh', color: 'hsl(205.51deg 58.53% 57.45%)' }}
            >
              Embark on the Divine Journey – Explore Char Dham
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-black opacity-70" style={{ fontSize: '3vh' }}>
              Discover the sacred pilgrimage sites of Kedarnath, Badrinath, Gangotri, and Yamunotri, nestled in the majestic Himalayas.
            </p>
          </div>

          {/* Video Background */}
          <div className="video-visual overflow-hidden">
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

          {/* Section Content */}
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
                  <h2 className="headline" style={{ fontSize: '3vh' }}>
                    Discover the
                    <span className="text-highlight" style={{ fontSize: '5vh' }}> Divine Kedarnath</span>
                  </h2>
                  <p className="desc" style={{ fontSize: '3vh' }}>
                    "Kedarnath – where the mighty Himalayas whisper tales of devotion and the sacred Mandakini sings hymns of eternity."
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
                  <h2 className="headline" style={{ fontSize: '3vh' }}>
                    Explore the
                    <span className="text-highlight" style={{ fontSize: '5vh' }}> Sacred Badrinath</span>
                  </h2>
                  <p className="desc" style={{ fontSize: '3vh' }}>
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
                  <h2 className="headline" style={{ fontSize: '3vh' }}>
                    Journey to
                    <span className="text-highlight" style={{ fontSize: '5vh' }}> Gangotri</span>
                  </h2>
                  <p className="desc" style={{ fontSize: '3vh' }}>
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
                  <h2 className="headline" style={{ fontSize: '3vh' }}>
                    Visit
                    <span className="text-highlight" style={{ fontSize: '5vh' }}> Yamunotri</span>
                  </h2>
                  <p className="desc" style={{ fontSize: '3vh' }}>
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

        <div class="relative">
  {/* <!-- Left Button --> */}
  <button id="scrollLeft" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 shadow-lg z-10">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
  </button>

  {/* <!-- Image Carousel --> */}
  <div id="carousel" class="snap-x snap-mandatory overflow-x-scroll hide-scrollbar flex space-x-6 w-full h-[250px] p-4">
    {/* <!-- Repeat for each image --> */}
    <div class="snap-center shrink-0 w-80 h-full relative group">
      <img src="/images/himachal2.jpg" class="w-full h-full object-cover rounded-lg transition-transform transform group-hover:scale-105" />
      {/* <!-- Book Trip Button --> */}
      <div class="absolute inset-0 flex items-center justify-center">
        <button class="bg-black-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-white-600 transition-opacity opacity-0 group-hover:opacity-80">
        <p>Discover the Unseen!</p>
          Book Trip
        </button>
      </div>
    </div>
    <div class="snap-center shrink-0 w-80 h-full relative group">
      <img src="/images/kashmir11.jpg" class="w-full h-full object-cover rounded-lg transition-transform transform group-hover:scale-105" />
      <div class="absolute inset-0 flex items-center justify-center">
      <button class="bg-black-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-white-600 transition-opacity opacity-0 group-hover:opacity-80">
      Book Trip
        </button>
      </div>
    </div>
    <div class="snap-center shrink-0 w-80 h-full relative group">
      <img src="/images/kerala12.jpg" class="w-full h-full object-cover rounded-lg transition-transform transform group-hover:scale-105" />
      <div class="absolute inset-0 flex items-center justify-center">
        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-opacity opacity-0 group-hover:opacity-100">
          Book Trip
        </button>
      </div>
    </div>
    <div class="snap-center shrink-0 w-80 h-full relative group">
      <img src="/images/nainital12.jpg" class="w-full h-full object-cover rounded-lg transition-transform transform group-hover:scale-105" />
      <div class="absolute inset-0 flex items-center justify-center">
        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-opacity opacity-0 group-hover:opacity-100">
          Book Trip
        </button>
      </div>
    </div>
    <div class="snap-center shrink-0 w-80 h-full relative group">
      <img src="/images/sikkim12.jpg" class="w-full h-full object-cover rounded-lg transition-transform transform group-hover:scale-105" />
      <div class="absolute inset-0 flex items-center justify-center">
        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-opacity opacity-0 group-hover:opacity-100">
          Book Trip
        </button>
      </div>
    </div>
    {/* <!-- Repeat for other images --> */}
  </div>

  {/* <!-- Right Button --> */}
  <button id="scrollRight" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 shadow-lg z-10">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
  </button>
</div>





        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex pt-10 items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-11/12 max-w-md">
              <h2 className="text-xl font-bold mb-4">Book Now</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input type="tel" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Number of Adults</label>
                  <input type="number" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Number of Children</label>
                  <input type="number" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
                </div>
                <div className="flex justify-end">
                  <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2" onClick={closeModal}>
                    Cancel
                  </button>
                  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-2 ">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-sm mt-2">📍 M 202 4th floor, Pratap Vihar Sector-12 Ghaziabad pincode 201009, UP</p>
          <p className="text-sm">📞 Phone: +91 9540559367</p>
          <p className="text-sm">✉ Email: support@globusjourney.com</p>
        </div>
        <p className="text-xs mt-4">© 2025 Globus Journey. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;