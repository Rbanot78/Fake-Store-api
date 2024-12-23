import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Banner = ({ imageUrl, heading, subheading, buttonText, buttonLink }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add animation after the component is mounted
    setTimeout(() => {
      setIsVisible(true);
    }, 200); // Delayed to create smooth transition effect
  }, []);

  return (
    <div className="relative w-full h-96">
      {/* Banner Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt="Banner image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Banner Content */}
      <div
        className={`absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Heading with slide-in effect */}
        <h1
          className={`text-4xl md:text-5xl font-bold transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0' : 'translate-y-10 opacity-0'
          }`}
        >
          {heading}
        </h1>

        {/* Subheading with a slight delay for the animation */}
        <p
          className={`mt-4 text-lg md:text-xl transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {subheading}
        </p>

        {/* Button */}
        <Link
          href={buttonLink}
          className="mt-6 px-8 py-3 bg-orange-500 text-white text-lg font-semibold rounded hover:bg-orange-600 transform transition duration-300 ease-in-out hover:scale-105"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default Banner;
