import { Plan } from '../Types/types';
import { useAtomValue } from 'jotai';
import { selectedPlanAtom } from '@/store/atoms';

interface Props {
  plan: Plan;
}

const SelectedPlanDetails = () => {
  const plan = useAtomValue<Plan | undefined>(selectedPlanAtom);
  return ( plan &&
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
