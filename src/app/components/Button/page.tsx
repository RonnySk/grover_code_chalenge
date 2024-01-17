import React from "react";

function getSubscriptionText(subscription: Subscription): string {
  const { product } = subscription;

  const RentalPlanPeriodIndex = product.rentalPlans.findIndex(
    (onePlan) => onePlan.period === subscription.rentalPeriod
  );

  if (subscription.rentalPeriod === 12) {
    return "You cannot extend your rental";
  } else {
    return `Extend rental to ${
      product.rentalPlans[RentalPlanPeriodIndex + 1].period
    } months for $${product.rentalPlans[RentalPlanPeriodIndex + 1].price}`;
  }
}

// console.log("os periodos", oneRentalPlanPeriod + );
// if (subscription.rentalPeriod === 1) {
//   return `Extend rental to ${product.rentalPlans[1].period} months for $${product.rentalPlans[1].price}`;
// } else if (subscription.rentalPeriod === 3) {
//   return `Extend rental to ${product.rentalPlans[2].period} months for $${product.rentalPlans[2].price}`;
// } else if (subscription.rentalPeriod === 6) {
//   return `Extend rental to ${product.rentalPlans[3].period} months for $${product.rentalPlans[3].price}`;
// } else {
//   return "You cannot extend your device.";
// }

// switch (subscription.rentalPeriod) {
//   case 1:
//     return `Extend rental to ${product.rentalPlans[1].period} months for $${product.rentalPlans[1].price}`;
//   case 3:
//     return `Extend rental to ${product.rentalPlans[2].period} months for $${product.rentalPlans[2].price}`;
//   case 6:
//     return `Extend rental to ${product.rentalPlans[3].period} months for $${product.rentalPlans[3].price}`;
//   default:
//     return "You cannot extend your rental";
// }

const handleOneSubscription = async () => {
  const response = await fetch("/pages/api/subscriptions/123121212", {
    method: "GET",
  });

  const data = await response.json();
};

type Props = {
  subscription: Subscription;
};

const Button = ({ subscription }: Props) => {
  const buttonText = getSubscriptionText(subscription);

  return (
    <>
      <button
        className="border-2 border-white w-80 p-2 hover:bg-gray-500"
        onClick={handleOneSubscription}
      >
        {buttonText}
      </button>
    </>
  );
};

export default Button;
