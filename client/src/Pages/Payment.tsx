import PayPal from '@/components/PayPal';
import React, { useEffect } from 'react';
import { selectedPlanAtom, userDetailsAtom } from '@/store/atoms';
import { useAtomValue } from 'jotai';
import { useNavigate } from 'react-router-dom';
import SelectedPlanDetails from '@/components/SelectedPlanDetails';
import { Plan } from '@/Types/types';

const Payment: React.FC = () => {
  const plan = useAtomValue<Plan | undefined>(selectedPlanAtom);
  const paymentAmount = useAtomValue(userDetailsAtom).price;
  const navigate = useNavigate();

  useEffect(() => {
    if (!paymentAmount || !plan) {
      navigate('/choose-plan');
    }
  }, [paymentAmount, plan, navigate]);

  return (
    <div className="mx-auto mt-10 max-w-md rounded border border-gray-300 p-6 shadow-md">
      <div className="mb-4 border-b border-gray-300 pb-4 text-center">
        <SelectedPlanDetails />
      </div>
      <div className="mb-4 text-center text-lg font-bold bg-white rounded-xl">
        <h3 className="mb-2 text-xl">סכום לתשלום:</h3>
        <p>₪{paymentAmount}</p>
        <div className="flex justify-center">
          <PayPal totalMoney={paymentAmount} />
        </div>
      </div>
    </div>
  );
};

export default Payment;
