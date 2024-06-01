import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { userDetailsAtom } from '@/store/atoms';
import { useNavigate } from 'react-router-dom';

const HealthDeclaration: React.FC = () => {
  const [userDetails] = useAtom(userDetailsAtom);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = () => {
    if (isChecked) {
      navigate('/payment');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">הצהרת בריאות</h2>
      <p>אני, {userDetails.firstName} {userDetails.lastName}, מצהיר כי הנני בריא וכי אין לי כל בעיה בריאותית העלולה להפריע לי להשתתף בפעילות הספורטיבית. אני מבין כי האחריות על מצבי הבריאותי היא עליי, ואני מתחייב לדווח על כל שינוי במצבי הבריאותי.</p>
      <div className="mt-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="form-checkbox text-blue-600"
          />
          <span className="ml-2">אני מאשר שקראתי את התקנון ואת הצהרת הבריאות</span>
        </label>
      </div>
      <button
        onClick={handleSubmit}
        disabled={!isChecked}
        className={`mt-4 px-4 py-2 ${isChecked ? 'bg-green-500' : 'bg-gray-500'} text-white rounded ${!isChecked && 'cursor-not-allowed'}`}
      >
        שליחה
      </button>
    </div>
  );
};

export default HealthDeclaration;
