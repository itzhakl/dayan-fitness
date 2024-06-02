import React, { useRef, useEffect } from 'react';
import {
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';

interface StepComponentProps {
  description: string;
  name: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNext: () => void;
  onBack: () => void;
  step: number;
}

const StepComponent: React.FC<StepComponentProps> = ({
  description,
  name,
  value,
  error,
  onChange,
  onNext,
  onBack,
  step,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [step]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onNext();
    }
  };

  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-gray-700">
        {description}
      </label>
      <input
        ref={inputRef}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
        className="mb-1 w-full rounded border px-3 py-2"
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
      <div className="mt-4 flex flex-row-reverse justify-between">
        <button
          onClick={onNext}
          className="flex items-center justify-center rounded bg-blue-500 px-4 py-2 text-white"
        >
          <span>המשך</span>
          <ArrowBackIcon className="mr-1" />
        </button>
        {step > 0 && (
          <button
            onClick={onBack}
            className="flex items-center justify-center rounded bg-gray-500 px-4 py-2 text-white"
          >
            <span>חזור</span>
            <ArrowForwardIcon className="ml-1" />
          </button>
        )}
      </div>
    </div>
  );
};

export default StepComponent;
