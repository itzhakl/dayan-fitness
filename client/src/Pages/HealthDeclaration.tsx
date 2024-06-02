import React, { useState, useRef } from 'react';
import { useAtomValue } from 'jotai';
import { userDetailsAtom } from '@/store/atoms';
import { useNavigate } from 'react-router-dom';
import SignatureCanvas from 'react-signature-canvas';
import 'tailwindcss/tailwind.css';

const HealthDeclaration: React.FC = () => {
  const userDetails = useAtomValue(userDetailsAtom);
  const [isChecked, setIsChecked] = useState(false);
  const [signature, setSignature] = useState('');
  const sigCanvas = useRef<SignatureCanvas>(null);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleClearSignature = () => {
    sigCanvas.current?.clear();
    setSignature('');
  };

  const handleSaveSignature = () => {
    setSignature(sigCanvas.current?.getTrimmedCanvas().toDataURL() || '');
  };

  const handleSubmit = () => {
    if (isChecked && signature) {
      navigate('/payment');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="mx-auto max-w-md rounded-lg bg-white p-8 text-center shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-green-700">הצהרת בריאות</h2>
        <p className="mb-6 text-gray-700">
          אני, {userDetails.firstName} {userDetails.lastName}, מצהיר כי הנני
          בריא וכי אין לי כל בעיה בריאותית העלולה להפריע לי להשתתף בפעילות
          הספורטיבית. אני מבין כי האחריות על מצבי הבריאותי היא עליי, ואני מתחייב
          לדווח על כל שינוי במצבי הבריאותי.
        </p>
        <p className="mb-6 text-gray-700">
          כמו כן, אני מצהיר כי קראתי והבנתי את כל התנאים וההנחיות הרלוונטיות
          לפעילות. אני מתחייב לפעול בהתאם להנחיות ולא לקחת סיכונים מיותרים.
        </p>
        <div className="mt-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="form-checkbox text-blue-600"
            />
            <span className="ml-2">
              אני מאשר שקראתי את התקנון ואת הצהרת הבריאות
            </span>
          </label>
        </div>
        <div className="mt-6">
          <label className="mb-2 block text-gray-700">חתימה ידנית:</label>
          <SignatureCanvas
            ref={sigCanvas}
            penColor="black"
            canvasProps={{
              className: 'border border-gray-300 rounded w-full h-24',
            }}
            onEnd={handleSaveSignature}
          />
          <button
            onClick={handleClearSignature}
            className="mt-2 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            נקה חתימה
          </button>
        </div>
        <button
          onClick={handleSubmit}
          disabled={!isChecked || !signature}
          className={`mt-6 px-4 py-2 ${
            isChecked && signature
              ? 'bg-green-500 hover:bg-green-600'
              : 'bg-gray-500'
          } rounded text-white ${
            !isChecked || !signature ? 'cursor-not-allowed' : ''
          }`}
        >
          שליחה
        </button>
      </div>
    </div>
  );
};

export default HealthDeclaration;
