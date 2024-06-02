export interface User {
  userId?: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
};

export type Plan = {
  name: string;
  price: string;
  monthlyPrice: string;
  discount: string;
  description: string;
}

export interface UserFromClient extends User {
  userSignature: string;
  planPrice: string;
  planDuration: string;
}

export interface UserToRegist extends UserFromClient {
  planStartDate: string;
  planExpirationDate: string;
}