export type Plan = {
  name: string;
  price: string;
  monthlyPrice: string;
  discount: string;
  description: string;
};

export type User = {
  userId: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  plan?: Plan;
};
