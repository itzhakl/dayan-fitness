import { Plan } from '../Types/types';
import { useAtomValue } from 'jotai';
import { selectedPlanAtom } from '@/store/atoms';

const SelectedPlanDetails = () => {
  const plan = useAtomValue<Plan | undefined>(selectedPlanAtom);
  return !plan ? (
    <></>
  ) : (
    <div className="mb-4 rounded border border-gray-300 bg-white p-4 shadow-md rounded-xl">
      <h1 className="mb-4 text-2xl font-bold">פרטי התוכנית שנבחרה</h1>
      <div className="grid grid-cols-1 gap-4">
        <div className="rounded border border-gray-300 p-4 shadow">
          <p className="text-lg font-semibold">תיאור התוכנית:</p>
          <p className="text-lg">{plan.description}</p>
        </div>
        <div className="rounded border border-gray-300 p-4 shadow">
          <p className="text-lg font-semibold">מחיר כולל:</p>
          <p className="text-lg">{plan.price} ₪</p>
        </div>
        <div className="rounded border border-gray-300 p-4 shadow">
          <p className="text-lg font-semibold">מחיר חודשי:</p>
          <p className="text-lg">{plan.monthlyPrice} ₪ לחודש</p>
        </div>
      </div>
    </div>
  );
};

export default SelectedPlanDetails;
