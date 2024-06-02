import { Plan } from '@/Types/types';

export const plans: Plan[] = [
  {
    name: 'חודש',
    price: '100',
    monthlyPrice: '100', // Monthly price is the same as the price for one month
    discount: '0%',
    description: 'תוכנית חודשית מתחדשת אוטומטית כל חודש',
    duration: '1',
  },
  {
    name: 'שלושה חודשים',
    price: '270',
    monthlyPrice: (270 / 3).toFixed(2), // Monthly price for three months
    discount: '10%',
    description:
      'תוכנית שלושת החודשים מתחדשת אוטומטית כל שלושה חודשים ומציעה 10% הנחה',
    duration: '3',
  },
  {
    name: 'חצי שנה',
    price: '480',
    monthlyPrice: (480 / 6).toFixed(2), // Monthly price for six months
    discount: '20%',
    description:
      'תוכנית חצי השנה מתחדשת אוטומטית כל שישה חודשים ומציעה 20% הנחה',
    duration: '6',
  },
  {
    name: 'שנה',
    price: '840',
    monthlyPrice: (840 / 12).toFixed(2), // Monthly price for twelve months
    discount: '30%',
    description: 'תוכנית השנתית מתחדשת אוטומטית כל שנה ומציעה 30% הנחה',
    duration: '12',
  },
];
