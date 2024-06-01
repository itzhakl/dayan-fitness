import { Plan } from '@/Types/types';
import { selectedPlanAtom, userDetailsAtom } from '@/store/atoms';
import { useSetAtom } from 'jotai';
import React from 'react';
import { Link } from 'react-router-dom';

const plans: Plan[] = [
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


const ChoosePlan: React.FC = () => {
  const setSelctedPlan = useSetAtom(selectedPlanAtom);
  const setUserDetails = useSetAtom(userDetailsAtom);
  const handlePlanClick = (plan: Plan) => {
    setSelctedPlan(plan);
    setUserDetails((prev) => ({ ...prev, plan }));
  }

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">בחר תוכנית</h1>
      <p className="text-lg mb-6">בחר את תוכנית הכושר המתאימה לך וקבל גישה לבוט מאמן הכושר האישי שלנו.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <div key={plan.name} className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
            <p className="text-xl font-semibold mb-4">{plan.price}₪</p>
            <p className="text-lg text-green-500 font-semibold mb-4">{plan.discount}</p>
            <p className="text-md mb-4">{plan.description}</p>
            <Link
              to={{
                pathname: '/customer-details',
                // @ts-ignore
                // state: { selectedPlan: plan }
              }}
              className="block w-full"
            >
              <button
                onClick={() => handlePlanClick(plan)}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                בחר תוכנית
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChoosePlan;
