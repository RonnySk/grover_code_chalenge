import Image from "next/image";
import Button from "../Button/page";

type Props = {
  subscription: Subscription;
};

const SubscriptionCard = ({ subscription }: Props) => {
  const { product } = subscription;

  return (
    <div
      className={`flex flex-row items-center gap-4 border-2 border-white w-3/4 p-16 ${
        subscription.state === "TERMINATED" && "opacity-50"
      }`}
    >
      <Image src={product.image} width={150} height={150} alt="product image" />
      <div className="flex flex-col justify-items-center gap-4 ml-4">
        <h1 className="font-bold">{product.title}</h1>
        <p className="font-bold capitalize">
          {subscription.state === "FULFILLING"
            ? "In Transit"
            : subscription.state === "ACTIVE"
            ? "Active - until 02.12.2024"
            : "Ended"}
        </p>
        {["ACTIVE", "FULFILLING"].includes(subscription.state) && (
          <p>${subscription.monthlyPrice} per month</p>
        )}
        {subscription.state === "ACTIVE" && (
          <Button subscription={subscription} />
        )}
      </div>
    </div>
  );
};

export default SubscriptionCard;
