import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import Benefits from "../benefit/Benefits";

const PricingOption = (props) => {
  const { name, price, benefits } = props.option;
  return (
    <div className="bg-white p-4 rounded-lg ">
      <h2 className="bg-indigo-300 py-2 text-xl font-bold">{name}</h2>
      <p>
        <span className="text-5xl font-bold ">{price}</span>
        <span className="text-xl font-bold text-gray-500">/mo</span>
      </p>
      <div>
        <h3 className="text-xl font-bold text-left">Benifits:</h3>
        {benefits.map((benefit) => (
          <Benefits benefit={benefit}></Benefits>
        ))}
        <button className="bg-green-500 flex justify-center w-full rounded py-2 mt-6 text-white hover:text-green-700 font-bold">
          Buy Now <ArrowRightIcon className="h-6 w-6 ml-2"></ArrowRightIcon>
        </button>
      </div>
    </div>
  );
};

export default PricingOption;
