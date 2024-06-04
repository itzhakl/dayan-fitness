import { useState } from 'react';
import { useAtom, useSetAtom } from 'jotai';
import { currentPageAtom, userDetailsAtom } from '@/store/atoms';
// import { useNavigate } from 'react-router-dom';
import { UserDetails, Errors, validateInput } from '../utils/validation';

const useCustomerDetailsForm = () => {
  const setCurrentPage = useSetAtom(currentPageAtom);
  const [step, setStep] = useState<number>(0);
  const [userDetails, setUserDetails] = useAtom(userDetailsAtom);
  const [errors, setErrors] = useState<Errors>({});
  // const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const key = name as keyof UserDetails;
    setUserDetails((prev) => ({ ...prev, [key]: value }));

    // Validate input
    const error = validateInput(key, value);
    setErrors((prev) => ({ ...prev, [key]: error }));
  };

  const handleNext = () => {
    const currentStep = steps[step];
    const key = currentStep.name as keyof UserDetails;
    const error = validateInput(key, userDetails[key]);

    if (!error) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
      setStep(step + 1);
    } else {
      setErrors((prev) => ({ ...prev, [key]: error }));
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    // console.log('שליחת פרטים:', userDetails);
    setCurrentPage('health-declaration');
  };

const steps = [
  {
    label: 'היי בוא נכיר, איך לקרוא לך?',
    description: 'אנא הזן את שמך הפרטי כדי שנוכל לפנות אליך בצורה נכונה.',
    name: 'firstName',
    value: userDetails.firstName,
    error: errors.firstName,
  },
  {
    label: 'מה שם המשפחה שלך?',
    description: 'אנא הזן את שם המשפחה שלך כדי שנוכל לזהות אותך באופן מלא.',
    name: 'lastName',
    value: userDetails.lastName,
    error: errors.lastName,
  },
  {
    label: 'מה מספר הטלפון שלך?',
    description:
      'אנא הזן את מספר הטלפון שלך כדי שנוכל ליצור איתך קשר במקרה הצורך.',
    name: 'phoneNumber',
    value: userDetails.phoneNumber,
    error: errors.phoneNumber,
  },
  {
    label: 'מה כתובת המייל שלך?',
    description:
      'אנא הזן את כתובת המייל שלך כדי שנוכל לשלוח לך עדכונים ומידע חשוב.',
    name: 'email',
    value: userDetails.email,
    error: errors.email,
  },
];


  const progress = (step / steps.length) * 100; // Calculate the progress based on the current step (0-4); // Progress in percentage

  return {
    step,
    userDetails,
    errors,
    steps,
    progress,
    handleChange,
    handleNext,
    handleBack,
    handleSubmit,
    setStep,
  };
};

export default useCustomerDetailsForm;
