export {};

declare global {
  type Product = {
    referenceId: String;
    createdAt: String;
    updatedAt: String;
    activatedAt: String;
    activeUntil: String;
    terminatedAt: String;
    terminationReason: String;
    terminationComment: String;
    rentalPeriod: Number;
    monthlyPrice: Number;
    state: String;
    productId: String;
    product: {
      id: String;
      slug: String;
      title: String;
      coreAttribute: String;
      image: String;
      rentalPlans: [
        {
          id: String;
          period: Number;
          price: Number;
          productId: String;
        },
        {
          id: String;
          period: Number;
          price: Number;
          productId: String;
        },
        {
          id: String;
          period: Number;
          price: Number;
          productId: String;
        },
        {
          id: String;
          period: Number;
          price: Number;
          productId: String;
        }
      ];
    };
  };
}
