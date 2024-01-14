import React from "react";

const Button = ({ subscription }: any) => {
  const { product } = subscription;

  return (
    <>
      {subscription.rentalPeriod === 1 ? (
        <button className="border-2 border-white w-80 p-2 hover:bg-gray-500">
          Extend rental to 3 months for ${product.rentalPlans[1].price}
        </button>
      ) : subscription.rentalPeriod === 3 ? (
        <button className="border-2 border-white w-80 p-2 hover:bg-gray-500">
          Extend rental to 6 months for ${product.rentalPlans[2].price}
        </button>
      ) : subscription.rentalPeriod === 6 ? (
        <button className="border-2 border-white w-80 p-2 hover:bg-gray-500">
          Extend rental to 12 months for ${product.rentalPlans[3].price}
        </button>
      ) : (
        <p>You cannot extend your device.</p>
      )}
    </>
  );
};

export default Button;
