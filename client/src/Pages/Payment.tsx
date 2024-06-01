import PayPal from '@/components/PayPal';
import React, { useEffect } from 'react';
import { userDetailsAtom } from '@/store/atoms';
import { useAtomValue } from 'jotai';
import { useNavigate } from 'react-router-dom';

const Payment: React.FC = () => {
  const paymentAmount = useAtomValue(userDetailsAtom).plan.price;
  const Navigate = useNavigate();
  useEffect(() => {
    if (!paymentAmount) {
      Navigate('/choose-plan');
    }
  }, []);
  
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <div className="text-lg font-bold mb-4">
        <PayPal totalMoney={paymentAmount} />
      </div>
      {/* <p>העמוד לתשלום כאן.</p> */}
    </div>
  );
};

export default Payment;
