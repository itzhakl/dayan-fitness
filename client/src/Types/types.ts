export type Plan = {
  name: string;
  description: string;
  monthlyPrice: string;
  discount: string;
  planPrice: string;
  planDuration: string;
};

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  userSignature: string;
  planPrice: string;
  planDuration: string;
};