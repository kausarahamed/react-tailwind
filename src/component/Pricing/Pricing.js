import React from "react";
import PricingOption from "../PricingOption/PricingOption";

const Pricing = () => {
  const pricingOption = [
    { id: 1, name: "Free", price: 0 },
    { id: 2, name: "Regular", price: 9.99 },
    { id: 3, name: "premium", price: 19.99 },
  ];
  return (
    <div className="bg-indigo-300 p-4 mt-8">
      <h1 className="text-6xl font-mono text-white">Best deals of the town</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        commodi deleniti dolorem ea veritatis cupiditate voluptatum fugit sunt
        tempora laudantium.
      </p>
      <div className="grid grid-cols-3 gap-3 mt-8">
        {pricingOption.map((option) => (
          <PricingOption key={option.id} option={option}></PricingOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
