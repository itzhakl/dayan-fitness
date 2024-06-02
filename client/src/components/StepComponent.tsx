import React from 'react';
import { ArrowBack as ArrowBackIcon, ArrowForward as ArrowForwardIcon } from '@mui/icons-material';

interface StepComponentProps {
  label: string;
  name: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNext: () => void;
  onBack: () => void;
  step: number;
}

const StepComponent: React.FC<StepComponentProps> = ({ label, name, value, error, onChange, onNext, onBack, step }) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-bold text-gray-700">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 mb-1 border rounded"
      />
      {error && <p className="text-red-500 text-xs">{error}</p>}
      <div className="flex justify-between mt-4">
        {step > 0 && (
          <button onClick={onBack} className="px-4 py-2 bg-gray-500 text-white rounded flex items-center justify-center">
            <ArrowForwardIcon className="ml-1" /> חזור
          </button>
        )}
        <button onClick={onNext} className="px-4 py-2 bg-blue-500 text-white rounded flex items-center justify-center">
          <ArrowBackIcon className="mr-1" /> המשך
        </button>
      </div>
    </div>
  );
};

export default StepComponent;
