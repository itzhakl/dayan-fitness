import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { userDetailsAtom } from '@/store/atoms';
import { useNavigate } from 'react-router-dom';

const CustomerDetailsForm: React.FC = () => {
  const [step, setStep] = useState(0);
  const [userDetails, setUserDetails] = useAtom(userDetailsAtom);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails(prev => {return { ...prev, [name]: value }} );
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleDone = () => {
    setStep(4);
  };

  const handleSubmit = () => {
    // נבצע כאן בקשת fetch
    console.log('שליחת פרטים:', userDetails);
    navigate('/health-declaration');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md">
      {step === 0 && (
        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700">שם פרטי</label>
          <input
            type="text"
            name="firstName"
            value={userDetails.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 mb-4 border rounded"
          />
          <button onClick={handleNext} className="px-4 py-2 bg-blue-500 text-white rounded">המשך</button>
        </div>
      )}
      {step === 1 && (
        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700">שם משפחה</label>
          <input
            type="text"
            name="lastName"
            value={userDetails.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 mb-4 border rounded"
          />
          <button onClick={handleBack} className="px-4 py-2 mr-2 bg-gray-500 text-white rounded">חזור</button>
          <button onClick={handleNext} className="px-4 py-2 bg-blue-500 text-white rounded">המשך</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700">מספר טלפון</label>
          <input
            type="text"
            name="phoneNumber"
            value={userDetails.phoneNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 mb-4 border rounded"
          />
          <button onClick={handleBack} className="px-4 py-2 mr-2 bg-gray-500 text-white rounded">חזור</button>
          <button onClick={handleNext} className="px-4 py-2 bg-blue-500 text-white rounded">המשך</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700">כתובת מייל</label>
          <input
            type="text"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            className="w-full px-3 py-2 mb-4 border rounded"
          />
          <button onClick={handleBack} className="px-4 py-2 mr-2 bg-gray-500 text-white rounded">חזור</button>
          <button onClick={handleDone} className="px-4 py-2 bg-blue-500 text-white rounded">המשך</button>
        </div>
      )}
      {step === 4 && (
        <div>
          <h3 className="mb-4 text-lg font-bold">פרטים שמולאו</h3>
          <p>שם פרטי: {userDetails.firstName}</p>
          <p>שם משפחה: {userDetails.lastName}</p>
          <p>מספר טלפון: {userDetails.phoneNumber}</p>
          <p>כתובת מייל: {userDetails.email}</p>
          <button onClick={() => setStep(0)} className="px-4 py-2 mr-2 bg-gray-500 text-white rounded">עריכה</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-green-500 text-white rounded">שליחה</button>
        </div>
      )}
    </div>
  );
};

export default CustomerDetailsForm;
