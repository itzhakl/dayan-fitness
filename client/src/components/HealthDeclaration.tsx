import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Plan } from './Plans';
import PayPal from './PayPal';

interface Props {
  selectedPlan: Plan;
}

type FormValues = {
  fullName: string;
  phone: string;
  signature: string;
};

const HealthDeclaration: React.FC<Props> = ({ selectedPlan }: Props) => {
  const [payment, setPayment] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const sigCanvas = useRef<SignatureCanvas>(null);

  const clearSignature = () => {
    sigCanvas.current?.clear();
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const signature = sigCanvas.current?.toDataURL();
    if (signature) {
      data.signature = signature;
      console.log('Form Data:', data);
      // כאן ניתן להוסיף לוגיקה נוספת לשליחת הטופס
      setPayment(true);
    } else {
      console.error('Signature is required');
    }
  };

  return (
    <div className="mx-auto max-w-xl rounded bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-bold">הצהרת בריאות</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700">שם מלא</label>
          <input
            {...register('fullName', { required: 'שדה זה הינו חובה' })}
            className="mt-1 block w-full rounded border border-gray-300 p-2"
          />
          {errors.fullName && (
            <span className="text-red-500">{errors.fullName.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">מספר טלפון</label>
          <input
            {...register('phone', { required: 'שדה זה הינו חובה' })}
            className="mt-1 block w-full rounded border border-gray-300 p-2"
          />
          {errors.phone && (
            <span className="text-red-500">{errors.phone.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">חתימה</label>
          <div className="rounded border border-gray-300">
            <SignatureCanvas
              ref={sigCanvas}
              canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
              penColor="black"
            />
          </div>
          <button
            type="button"
            onClick={clearSignature}
            className="mt-2 rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
          >
            נקה חתימה
          </button>
        </div>
        <button
          type="submit"
          className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          שלח
        </button>
      </form>
      {payment && selectedPlan && (
        <PayPal totalMoney="0.1" currencyCode="ILS" />
      )}
    </div>
  );
};

export default HealthDeclaration;
