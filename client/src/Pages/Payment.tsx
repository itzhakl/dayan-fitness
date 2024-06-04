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
  const userDetails = useAtomValue(userDetailsAtom);
  // const navigate = useNavigate();

  useEffect(() => {
    if (!userDetails.planPrice || !plan) {
      console.log({ userDetails, plan });

      setCurrentPage('choose-plan');
      // navigate('/choose-plan');
    }
  }, [userDetails, plan]);

  return (
    <div className="mx-auto max-w-lg rounded p-6">
      <div className="mb-4 border-b border-gray-300 pb-4 text-center">
        <SelectedPlanDetails />
      </div>
      <div className="mb-4 rounded-xl bg-white text-center text-lg font-bold">
        <h3 className="mb-2 text-xl">סכום לתשלום:</h3>
        <p>₪{userDetails.planPrice}</p>
        <div className="flex justify-center">
          <PayPal totalMoney={userDetails.planPrice} />
        </div>
      </div>
    </div>
  );
};

export default Payment;
