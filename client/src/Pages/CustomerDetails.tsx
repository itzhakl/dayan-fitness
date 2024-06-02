// CustomerDetailsPage.tsx

import React, { useEffect, useState } from 'react';
import { Plan } from '../Types/types';
import { Link, useNavigate } from 'react-router-dom';
import { useAtomValue, useSetAtom } from 'jotai';
import { selectedPlanAtom, userDetailsAtom } from '@/store/atoms';
import SelectedPlanDetails from '@/components/SelectedPlanDetails';
import CustomerDetailsForm from '@/components/CustomerDetailsForm';

const CustomerDetailsPage: React.FC = () => {
  const plan = useAtomValue<Plan | undefined>(selectedPlanAtom);
  const setUserDetails = useSetAtom(userDetailsAtom);
  const navigate = useNavigate();
  console.log(plan);
  useEffect(() => {
    if (!plan) {
      navigate('/choose-plan');
    }
  });

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border border-gray-200 rounded-md">
      {/* <SelectedPlanDetails /> */}
      <CustomerDetailsForm/>
    </div>
  );
};

export default CustomerDetailsPage;
