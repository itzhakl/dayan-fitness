import {
  PayPalButtons,
  PayPalButtonsComponentProps,
} from '@paypal/react-paypal-js';
import { FC } from 'react';
import { completePayment } from '../API/serverRequests';
import { useNavigate } from 'react-router-dom';

export type OrderInPayPal = {
  orderID: string;
  payerID?: string;
  paymentID?: string;
  billingToken?: null;
  facilitatorAccessToken: string;
  autoCode?: string;
  subscriptionID?: string;
};

interface PayPalProps {
  totalMoney: string;
  currencyCode?: string;
}

const PayPal: FC<PayPalProps> = ({ totalMoney, currencyCode = 'ILS' }) => {
  const Navigate = useNavigate();
  const handleApprove = async(orderData: OrderInPayPal) => {
    Navigate('/bot-access-details');
    await completePayment(orderData);
  };

  const buttonProps: PayPalButtonsComponentProps = {
    className: 'w-[80%]',

    createOrder: (_, actions) => {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              currency_code: currencyCode,
              value: totalMoney,
            },
          },
        ],
        intent: 'CAPTURE',
      });
    },

    onApprove: async (data, actions) => {
      if (actions.order) {
        const order = await actions.order.capture();
        handleApprove({ ...data, ...order } as OrderInPayPal);
      }
    },

    onCancel: () => {
      console.log('Payment cancelled!');
    },

    onError: (err) => {
      console.error('PayPal error:', err);
    },
  };

  return <PayPalButtons {...buttonProps} />;
};

export default PayPal;
