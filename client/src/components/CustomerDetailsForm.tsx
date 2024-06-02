import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { userDetailsAtom } from '@/store/atoms';
import { useNavigate } from 'react-router-dom';
import { ArrowBack as ArrowBackIcon, ArrowForward as ArrowForwardIcon, Check as CheckIcon, Edit as EditIcon } from '@mui/icons-material';
import ProgressBar from './ProgressBar';
import StepComponent from './StepComponent';
import { UserDetails, Errors, validateInput } from '../utils/validation';

const CustomerDetailsForm: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [userDetails, setUserDetails] = useAtom(userDetailsAtom);
  const [errors, setErrors] = useState<Errors>({});
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const key = name as keyof UserDetails;
    setUserDetails(prev => ({ ...prev, [key]: value }));

    // Validate input
    const error = validateInput(key, value);
    setErrors(prev => ({ ...prev, [key]: error }));
  };

  const handleNext = () => {
    const currentStep = steps[step];
    const key = currentStep.name as keyof UserDetails;
    const error = validateInput(key, userDetails[key]);

    if (!error) {
      setErrors(prev => ({ ...prev, [key]: undefined }));
      setStep(step + 1);
    } else {
      setErrors(prev => ({ ...prev, [key]: error }));
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    console.log('שליחת פרטים:', userDetails);
    navigate('/health-declaration');
  };

  const steps = [
    {
      label: 'היי בוא נכיר, איך לקרוא לך?',
      name: 'firstName',
      value: userDetails.firstName,
      error: errors.firstName,
    },
    {
      label: 'מה שם המשפחה שלך?',
      name: 'lastName',
      value: userDetails.lastName,
      error: errors.lastName,
    },
    {
      label: 'מה מספר הטלפון שלך?',
      name: 'phoneNumber',
      value: userDetails.phoneNumber,
      error: errors.phoneNumber,
    },
    {
      label: 'מה כתובת המייל שלך?',
      name: 'email',
      value: userDetails.email,
      error: errors.email,
    },
  ];

  const progress = (step / steps.length) * 100; // Calculate the progress based on the current step (0-4); // Progress in percentage

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <ProgressBar progress={progress} />
      {step < 4 ? (
        <StepComponent
          label={steps[step].label}
          name={steps[step].name}
          value={steps[step].value}
          error={steps[step].error}
          onChange={handleChange}
          onNext={handleNext}
          onBack={handleBack}
          step={step}
        />
      ) : (
        <div>
          <h3 className="mb-4 text-lg font-bold">פרטים שמולאו</h3>
          <p>שם פרטי: {userDetails.firstName}</p>
          <p>שם משפחה: {userDetails.lastName}</p>
          <p>מספר טלפון: {userDetails.phoneNumber}</p>
          <p>כתובת מייל: {userDetails.email}</p>
          <div className="flex justify-between mt-4">
            <button onClick={() => setStep(0)} className="px-4 py-2 bg-gray-500 text-white rounded flex items-center justify-center">
              <EditIcon className="ml-1" /> עריכה
            </button>
            <button onClick={handleSubmit} className="px-4 py-2 bg-green-500 text-white rounded flex items-center justify-center">
              <CheckIcon className="mr-1" /> שליחה
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerDetailsForm;
