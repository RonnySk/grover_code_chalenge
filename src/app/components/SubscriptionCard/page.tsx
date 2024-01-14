import Image from "next/image";
import { useState } from "react";
import Button from "../Button/page";

const SubscriptionCard = ({ subscription }: any) => {
  const { product }: { product: Product } = subscription;

  // witohut object descontructing:
  // const product: Product = subscription.product;

  const TerminatedCard = () => {
    return (
      <>
        <div className="flex flex-col gap-4 border-2 border-white w-3/4 p-16 opacity-50 ">
          <Image
            src={product.image}
            width={150}
            height={150}
            alt="product image"
          />
          <h1 className="font-bold">{product.title}</h1>
          <p className="font-bold capitalize">Ended</p>
        </div>
      </>
    );
  };

  const ActiveCard = () => {
    return (
      <>
        <div className="flex flex-col gap-4 border-2 border-white w-3/4 p-16 ">
          <Image
            src={product.image}
            width={150}
            height={150}
            alt="product image"
          />
          <h1 className="font-bold">{product.title}</h1>
          <p>
            <span className="font-bold capitalize">
              {subscription.state.toLowerCase()}
            </span>{" "}
            - until 02.12.2024
          </p>
          <p>${subscription.monthlyPrice} per month</p>
          <Button subscription={subscription} />
        </div>
      </>
    );
  };

  const InTransitCard = () => {
    return (
      <>
        <div className="flex flex-col gap-4 border-2 border-white w-3/4 p-16 ">
          <Image
            src={product.image}
            width={150}
            height={150}
            alt="product image"
          />
          <h1 className="font-bold">{product.title}</h1>
          <p className="font-bold capitalize">In Transit</p>
          <p>${subscription.monthlyPrice} per month</p>
        </div>
      </>
    );
  };

  return subscription.state === "ACTIVE" ? (
    <ActiveCard />
  ) : subscription.state === "FULFILLING" ? (
    <InTransitCard />
  ) : subscription.state === "TERMINATED" ? (
    <TerminatedCard />
  ) : (
    <p>You don`t have any subscription</p>
  );
};

export default SubscriptionCard;
