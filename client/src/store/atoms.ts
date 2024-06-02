import { Plan, User } from "@/Types/types";
import { atom } from "jotai";

export const selectedPlanAtom = atom<Plan | undefined>(undefined);

export const userDetailsAtom = atom<User>({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  plan: {
    name: '',
    price: '',
    monthlyPrice: '',
    discount: '',
    description: '',
  }
})