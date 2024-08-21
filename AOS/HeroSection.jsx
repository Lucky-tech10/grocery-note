import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1553621042-f6e147245754')",
      }}
    >
      <div data-aos="fade-in" className="text-center text-white">
        <h1 className="text-5xl font-bold">Welcome to Sushi Paradise</h1>
        <p className="mt-4 text-xl">Delicious sushi delivered to your door</p>
      </div>
    </section>
  );
};

export default HeroSection;
