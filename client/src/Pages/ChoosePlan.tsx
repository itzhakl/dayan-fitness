import { Plan } from '@/Types/types';
import { selectedPlanAtom, userDetailsAtom } from '@/store/atoms';
import { plans } from '@/store/plans';
import { useAtom, useSetAtom } from 'jotai';
import React from 'react';
import { Link } from 'react-router-dom';

const ChoosePlan: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useAtom(selectedPlanAtom);
  const setUserDetails = useSetAtom(userDetailsAtom);

  const handlePlanClick = (plan: Plan) => {
    setSelectedPlan(plan);
    setUserDetails((prev) => ({ ...prev, plan }));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full p-8">
      <h1 className="text-4xl font-bold mb-4">בחר תוכנית</h1>
      <p className="text-lg mb-6">
        בחר את תוכנית הכושר המתאימה לך וקבל גישה לבוט מאמן הכושר האישי שלנו.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <div
            onClick={() => handlePlanClick(plan)}
            key={plan.name}
            className={`cursor-pointer rounded-lg shadow-lg p-6 text-center transition duration-300 ease-in-out transform hover:scale-105 ${
              plan.name === selectedPlan?.name ? 'bg-blue-500 text-white' : 'bg-white'
            }`}
            aria-label={`בחר תוכנית ${plan.name}`}
            role="button"
            tabIndex={0}
          >
            <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
            <p className="text-xl font-semibold mb-4">{plan.price}₪</p>
            <p className="text-lg text-green-500 font-semibold mb-4">{plan.discount}</p>
            <p className="text-md mb-4">{plan.description}</p>
          </div>
        ))}
      </div>
      <Link to="/customer-details">
        <button
          className="relative mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          בחר תוכנית
        </button>
      </Link>
    </div>
  );
};

export default ChoosePlan;
