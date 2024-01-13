import Image from "next/image";
import Button from "../Button/page";

const SubscriptionCard = ({ subscription }: any) => {
  const { product }: { product: Product } = subscription;

  // witohut object descontructing:
  // const product: Product = subscription.product;

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
          <span className="font-bold">Active</span> - until 02.12.2024
        </p>
        <p>$1500 per month</p>
        <div></div>
        <Button />
      </div>
    </>
  );
};

export default SubscriptionCard;
