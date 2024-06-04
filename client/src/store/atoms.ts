import { Plan, User } from "@/Types/types";
import { atom } from "jotai";

export const currentPageAtom = atom('home');

export const selectedPlanAtom = atom<Plan | undefined>(undefined);

export const userDetailsAtom = atom<User>({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  userSignature: '',
  price: '',
  duration: '',
})