import PayPal from '@/components/PayPal';
import React, { useEffect } from 'react';
import { selectedPlanAtom, userDetailsAtom } from '@/store/atoms';
import { useAtomValue } from 'jotai';
import { useNavigate } from 'react-router-dom';
import SelectedPlanDetails from '@/components/SelectedPlanDetails';
import { Plan } from '@/Types/types';

const Payment: React.FC = () => {
  const plan = useAtomValue<Plan | undefined>(selectedPlanAtom);
  const paymentAmount = useAtomValue(userDetailsAtom).plan.price;
  const Navigate = useNavigate();
  useEffect(() => {
    if (!paymentAmount || !plan) {
      Navigate('/choose-plan');
    }
  }, []);
  
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <SelectedPlanDetails />
      <div className="text-lg font-bold mb-4">
        <PayPal totalMoney={paymentAmount} />
      </div>
      {/* <p>העמוד לתשלום כאן.</p> */}
    </div>
  );
};

export default Payment;
