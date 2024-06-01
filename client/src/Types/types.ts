export type Plan = {
  name: string;
  price: string;
  discount: string;
  description: string;
}

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  plan: Plan;
}