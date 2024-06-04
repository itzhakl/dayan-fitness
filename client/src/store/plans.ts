import { Plan } from '@/Types/types';

export const plans: Plan[] = [
  {
    name: 'חודש',
    planPrice: '100',
    monthlyPrice: '100', // Monthly price is the same as the price for one month
    discount: '0%',
    description: 'תוכנית חודשית מתחדשת אוטומטית כל חודש',
    planDuration: '1',
  },
  {
    name: 'שלושה חודשים',
    planPrice: '270',
    monthlyPrice: (270 / 3).toFixed(2), // Monthly price for three months
    discount: '10%',
    description:
      'תוכנית שלושת החודשים מתחדשת אוטומטית כל שלושה חודשים ומציעה 10% הנחה',
    planDuration: '3',
  },
  {
    name: 'חצי שנה',
    planPrice: '480',
    monthlyPrice: (480 / 6).toFixed(2), // Monthly price for six months
    discount: '20%',
    description:
      'תוכנית חצי השנה מתחדשת אוטומטית כל שישה חודשים ומציעה 20% הנחה',
    planDuration: '6',
  },
  {
    name: 'שנה',
    planPrice: '840',
    monthlyPrice: (840 / 12).toFixed(2), // Monthly price for twelve months
    discount: '30%',
    description: 'תוכנית השנתית מתחדשת אוטומטית כל שנה ומציעה 30% הנחה',
    planDuration: '12',
  },
];
