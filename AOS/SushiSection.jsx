// src/components/SushiSection.js
import React from "react";

const sushiItems = [
  {
    id: 1,
    title: "Sushi Roll",
    description: "Delicious sushi roll",
    image: "https://via.placeholder.com/300x200?text=Sushi+Roll",
  },
  {
    id: 2,
    title: "Sashimi",
    description: "Fresh sashimi",
    image: "https://via.placeholder.com/300x200?text=Sashimi",
  },
  {
    id: 3,
    title: "Nigiri",
    description: "Tasty nigiri",
    image: "https://via.placeholder.com/300x200?text=Nigiri",
  },
  {
    id: 4,
    title: "Maki",
    description: "Delicious maki rolls",
    image: "https://via.placeholder.com/300x200?text=Maki",
  },
  {
    id: 5,
    title: "Temaki",
    description: "Tasty temaki",
    image: "https://via.placeholder.com/300x200?text=Temaki",
  },
  {
    id: 6,
    title: "Uramaki",
    description: "Delicious uramaki",
    image: "https://via.placeholder.com/300x200?text=Uramaki",
  },
];

const SushiSection = () => {
  return (
    <section id="sushi" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
          Our Sushi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sushiItems.map((item) => (
            <div
              key={item.id}
              data-aos="fade-up"
              className="bg-white p-4 rounded-lg shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-2xl font-bold mt-4">{item.title}</h3>
              <p className="mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SushiSection;
