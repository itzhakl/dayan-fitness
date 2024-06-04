import PayPal from '@/components/PayPal';
import React, { useEffect } from 'react';
import { currentPageAtom, selectedPlanAtom, userDetailsAtom } from '@/store/atoms';
import { useAtomValue, useSetAtom } from 'jotai';
// import { useNavigate } from 'react-router-dom';
import SelectedPlanDetails from '@/components/SelectedPlanDetails';
import { Plan } from '@/Types/types';

const Payment: React.FC = () => {
  const setCurrentPage = useSetAtom(currentPageAtom);
  const plan = useAtomValue(selectedPlanAtom);
  const paymentAmount = useAtomValue(userDetailsAtom).price;
  // const navigate = useNavigate();

  useEffect(() => {
    if (!paymentAmount || !plan) {
      setCurrentPage('choose-plan');
      // navigate('/choose-plan');
    }
  }, [paymentAmount, plan]);

  return (
    <div className="mx-auto max-w-lg rounded p-6">
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
