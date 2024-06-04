// CustomerDetailsPage.tsx

import React, { useEffect, useState } from 'react';
import { Plan } from '../Types/types';
// import { Link, useNavigate } from 'react-router-dom';
import { useAtomValue, useSetAtom } from 'jotai';
import { currentPageAtom, selectedPlanAtom, userDetailsAtom } from '@/store/atoms';
import SelectedPlanDetails from '@/components/SelectedPlanDetails';
import CustomerDetailsForm from '@/components/CustomerDetailsForm';

const CustomerDetailsPage: React.FC = () => {
  const setCurrentPage = useSetAtom(currentPageAtom);

  const plan = useAtomValue(selectedPlanAtom);
  const setUserDetails = useSetAtom(userDetailsAtom);
  // const navigate = useNavigate();
  useEffect(() => {
    if (!plan) {
      setCurrentPage('choose-plan');
      // navigate('/choose-plan');
    }
  }, []);

  return (
    <div className="max-w-md flex justify-center items-center h-svh mx-auto">
      {/* <SelectedPlanDetails /> */}
      <CustomerDetailsForm/>
    </div>
  );
};

export default CustomerDetailsPage;
