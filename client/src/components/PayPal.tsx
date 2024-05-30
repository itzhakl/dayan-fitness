import {
  PayPalButtons,
  PayPalButtonsComponentProps,
} from '@paypal/react-paypal-js';
import { FC } from 'react';

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
  currencyCode: string; // הוספת סוג המטבע לממשק הפרופס
}

const PayPal: FC<PayPalProps> = ({ totalMoney, currencyCode }) => {
  const handleApprove = (orderData: OrderInPayPal) => {
    console.log('orderData: ', orderData);
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
        console.log(order);
      }
    },

    onCancel: () => {
      console.log('Payment cancelled!');
    },

    onError: (err) => {
      console.error('PayPal error:', err);
    },
  };

  return <PayPalButtons {...buttonProps}  />;
};

export default PayPal;
