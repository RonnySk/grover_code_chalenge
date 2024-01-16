export {};

declare global {
  type Product = {
    id: string;
    slug: string;
    title: string;
    coreAttribute: string;
    image: string;
    rentalPlans: {
      id: string;
      period: number;
      price: number;
      productId: string;
    }[];
  };

  type Subscription = {
    _id: string;
    referenceId: string;
    createdAt: string;
    updatedAt: string;
    activatedAt: string;
    activeUntil: string;
    terminatedAt: string;
    terminationReason: string;
    terminationComment: string;
    rentalPeriod: number;
    monthlyPrice: number;
    state: "DRAFT" | "ACTIVE" | "FULFILLING" | "TERMINATED";
    productId: string;
    product: Product;
  };
}
