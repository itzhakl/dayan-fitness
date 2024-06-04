import { Plan } from '@/Types/types';
import { currentPageAtom, selectedPlanAtom, userDetailsAtom } from '@/store/atoms';
import { plans } from '@/store/plans';
import { useAtom, useSetAtom } from 'jotai';
import React from 'react';

const ChoosePlan: React.FC = () => {
  const setCurrentPage = useSetAtom(currentPageAtom);
  const [selectedPlan, setSelectedPlan] = useAtom(selectedPlanAtom);
  const setUserDetails = useSetAtom(userDetailsAtom);

  const handlePlanClick = (plan: Plan) => {
    setSelectedPlan(plan);
    setUserDetails((prev) => ({ ...prev, planPrice: plan.planPrice, planDuration: plan.planDuration }));
  };

  return (
    <div className="flex flex-col min-h-svh items-center justify-center p-8">
      <div className="mx-auto w-full max-w-screen-lg text-center">
        <h1 className="mb-4 text-4xl font-bold">בחר תוכנית</h1>
        <p className="mb-6 text-lg">
          בחר את תוכנית הכושר המתאימה לך וקבל גישה לבוט מאמן הכושר האישי שלנו.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              onClick={() => handlePlanClick(plan)}
              key={plan.name}
              className={`transform cursor-pointer rounded-lg p-6 text-center shadow-lg transition duration-300 ease-in-out hover:scale-105 ${plan.name === selectedPlan?.name
                  ? 'bg-blue-500 text-white'
                  : 'bg-white'
                }`}
              aria-label={`בחר תוכנית ${plan.name}`}
              role="button"
              tabIndex={0}
            >
              <h2 className="mb-2 text-2xl font-bold">{plan.name}</h2>
              <p className="mb-2 text-xl font-semibold">{plan.planPrice}₪</p>
              <p className="mb-4 text-lg font-semibold text-gray-600">
                ({plan.monthlyPrice}₪ לחודש)
              </p>
              <p className="mb-4 text-lg font-semibold text-green-500">
                {plan.discount}
              </p>
              <p className="text-md mb-4">{plan.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed w-svw flex justify-center bottom-4 md:static md:mt-4">
        <button onClick={() => setCurrentPage('customer-details')} className="bg-blue-600 rounded-lg transform transition duration-300 ease-in-out hover:scale-105 px-4 py-2 text-white hover:bg-blue-700">
          בחר תוכנית
        </button>
      </div>
    </div>
  );
};

export default ChoosePlan;
