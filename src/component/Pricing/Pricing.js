import React from "react";
import PricingOption from "../PricingOption/PricingOption";

const Pricing = () => {
  const pricingOption = [
    {
      id: 1,
      name: "Free",
      price: 0,
      benefits: [
        "lifetime free",
        "unlimited deals",
        "fantastic deals",
        "crazy deals",
      ],
    },
    {
      id: 2,
      name: "Regular",
      price: 9.99,
      benefits: [
        "everything free",
        "unlimited deals",
        "fantastic deals",
        "crazy deals",
      ],
    },
    {
      id: 3,
      name: "premium",
      price: 19.99,
      benefits: [
        "everything on regular free",
        "unlimited deals",
        "fantastic deals",
        "crazy deals",
      ],
    },
  ];
  return (
    <div className="bg-indigo-300 p-4 mt-8">
      <h1 className="text-6xl font-mono text-white">Best deals of the town</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        commodi deleniti dolorem ea veritatis cupiditate voluptatum fugit sunt
        tempora laudantium.
      </p>
      <div className="grid md:grid-cols-3 gap-3 mt-8">
        {pricingOption.map((option) => (
          <PricingOption key={option.id} option={option}></PricingOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
