import React from "react";
import IconLuxury from "../images/icon-luxury.svg";
import IconSedans from "../images/icon-sedans.svg";
import IconSuvs from "../images/icon-suvs.svg";

const cards = [
  {
    img: IconSedans,
    title: "SEDANS",
    paragraph:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip",
    backgroundColor: "#e38525",
    buttonColor: "#e38525",
  },
  {
    img: IconSuvs,
    title: "SUVS",
    paragraph:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures",
    backgroundColor: "#016871",
    buttonColor: "#016871",
  },
  {
    img: IconLuxury,
    title: "LUXURY",
    paragraph:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style",
    backgroundColor: "#003f3e",
    buttonColor: "#003f3e",
  },
];

function Card() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-screen-md">
        {cards.map((card, index) => (
          <div
            key={index}
            className="shadow-md gap-3 lg:gap-3 px-10 py-10 flex flex-col items-center justify-start"
            style={{ backgroundColor: card.backgroundColor }}
          >
            <div className="w-full">
              <img className="" src={card.img} alt={card.title} />
            </div>
            <div className="w-full">
              <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">
                {card.title}
              </h2>
            </div>
            <div className="w-full">
              <p className="text-sm text-gray-300 text-start">
                {card.paragraph}
              </p>
            </div>
            <div className="w-full text-start">
              <button
                className="lg:mt-20 mt-5 w-2/3 py-2 px-2 rounded-full font-semibold border-2 bg-white"
                style={{
                  color: card.buttonColor,
                  backgroundColor: card.buttonBackground,
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
