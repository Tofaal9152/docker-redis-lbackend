"use client"
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Home() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/images/login.jpg" // Replace with actual university logo
                width={40}
                height={40}
                alt="RU Logo"
                className="rounded-full"
              />
              <span className="ml-2 text-xl font-bold text-blue-800">
                University of Rajshahi
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Academics
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Research
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Admission
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to University of Rajshahi
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Bangladesh's Premier Institution of Higher Learning
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">
            Explore Programs
          </button>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              Academic Excellence
            </h3>
            <p className="text-gray-600">
              60+ undergraduate and postgraduate programs across 12 faculties
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              Research Innovation
            </h3>
            <p className="text-gray-600">
              Pioneering research in various scientific and social disciplines
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              Campus Life
            </h3>
            <p className="text-gray-600">
              Vibrant campus with rich cultural heritage and student activities
            </p>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <Slider {...carouselSettings}>
          <div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/login.jpg" // Replace with actual image
                alt="Carousel Image 1"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/login.jpg" // Replace with actual image
                alt="Carousel Image 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/login.jpg" // Replace with actual image
                alt="Carousel Image 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Slider>
      </div>

      {/* Campus Image Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/images/login.jpg" // Replace with actual campus image
            alt="RU Campus"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-4">
            © {new Date().getFullYear()} University of Rajshahi. All rights
            reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-blue-200">
              About
            </a>
            <a href="#" className="hover:text-blue-200">
              Admissions
            </a>
            <a href="#" className="hover:text-blue-200">
              Research
            </a>
            <a href="#" className="hover:text-blue-200">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
