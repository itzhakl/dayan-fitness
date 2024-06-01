import React from 'react';
import { Plan } from '../Types/types';

interface Props {
  plan: Plan;
}

const SelectedPlanDetails: React.FC<Props> = ({ plan }) => {
  return (
    <div className="mb-4">
      <h1 className="text-xl font-bold mb-2">פרטי התוכנית שנבחרה:</h1>
      <p className="text-lg">שם: {plan.name}</p>
      <p className="text-lg">מחיר: {plan.price}</p>
      <p className="text-lg">הנחה: {plan.discount}</p>
      <p className="text-lg">תיאור: {plan.description}</p>
    </div>
  );
};

export default SelectedPlanDetails;
