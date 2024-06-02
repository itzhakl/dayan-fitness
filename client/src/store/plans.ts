import { Plan } from "@/Types/types";

export const plans: Plan[] = [
  {
    name: 'חודש',
    price: '100',
    discount: '0%',
    description: 'גישה מלאה למשך חודש אחד.',
  },
  {
    name: 'שלושה חודשים',
    price: '270',
    discount: '10%',
    description: 'חסוך ₪30 - שלם פחות ב-10%!',
  },
  {
    name: 'חצי שנה',
    price: '480',
    discount: '20%',
    description: 'חסוך ₪120 - שלם פחות ב-20%!',
  },
  {
    name: 'שנה',
    price: '840',
    discount: '30%',
    description: 'חסוך ₪360 - שלם פחות ב-30%!',
  },
];