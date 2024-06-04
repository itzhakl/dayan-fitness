import React from 'react';
import { Check as CheckIcon, Edit as EditIcon } from '@mui/icons-material';
import ProgressBar from './ProgressBar';
import StepComponent from './StepComponent';
import useCustomerDetailsForm from '../hooks/useCustomerDetailsForm';

const CustomerDetailsForm: React.FC = () => {
  const {
    step,
    userDetails,
    steps,
    progress,
    handleChange,
    handleNext,
    handleBack,
    handleSubmit,
    setStep,
  } = useCustomerDetailsForm();

  return (
    <div className="mx-auto max-w-lg rounded-lg bg-white p-8 shadow-lg">
      <h1 className="mb-6 text-center text-2xl font-bold">טופס פרטי לקוח</h1>
      <ProgressBar progress={progress} />
      {step < 4 ? (
        <>
          <h2 className="mb-4 text-xl font-semibold">{steps[step].label}</h2>
          <StepComponent
            description={steps[step].description}
            name={steps[step].name}
            value={steps[step].value}
            error={steps[step].error}
            onChange={handleChange}
            onNext={handleNext}
            onBack={handleBack}
            step={step}
          />
        </>
      ) : (
        <div>
          <h2 className="mb-4 text-xl font-semibold">פרטים שמולאו</h2>
          <p className="mb-2">
            <strong>שם פרטי:</strong> {userDetails.firstName}
          </p>
          <p className="mb-2">
            <strong>שם משפחה:</strong> {userDetails.lastName}
          </p>
          <p className="mb-2">
            <strong>מספר טלפון:</strong> {userDetails.phoneNumber}
          </p>
          <p className="mb-4">
            <strong>כתובת מייל:</strong> {userDetails.email}
          </p>
          <div className="mt-4 flex justify-between">
            <button
              onClick={() => setStep(0)}
              className="flex items-center justify-center rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
            >
              <EditIcon className="ml-1" /> ערוך
            </button>
            <button
              onClick={handleSubmit}
              className="flex items-center justify-center rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
            >
              <CheckIcon className="mr-1" /> שלח
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerDetailsForm;
