import { Button } from "../Button";
import { useEffect, useState } from "react";
export default function Welcome() {
  const images = [
    "./images/pngs/image1.png",
    "./images/pngs/image2.png",
    "./images/pngs/image3.png",
    "./images/pngs/image4.png",
  ];
  const [current, setCurrent] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero  bg-cover bg-center h-screen flex items-center justify-center w-full h-screen"
      style={{
        backgroundImage: `url(${images[current]})`,
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
      }}
    >
      <div className="text-left max-w-7xl w-full mx-auto text-white">
        <p className="text-lg font-semibold mb-2">WELCOME TO</p>
        <h1 className="text-5xl font-bold mb-4">Family Clinic</h1>
        <p>
          Family Multi Speciality Clinic started its medical and dental service
          since 2006 by Dr kiruthika Asokan, Dental Surgeon.
        </p>
        <p className="mt-2 font-semibold">...</p>

        <div className="flex gap-4 mt-4">
          <Button
            link="/about"
            Name="Meet our doctor"
            style="bg-white text-gray-500 border border-gray-200 py-4 px-7 rounded-full font-semibold hover:text-teal-700 transition"
          />
          <Button
            link="tel:08048030932"
            Name="Call 08048030932"
            style="bg-transparent text-white py-4 px-7 rounded-full font-semibold font-medium hover:text-teal-700  transition border border-gray-500 text-sm"
          />
        </div>
      </div>
    </section>
  );
}
