import {
  PayPalButtons,
  PayPalButtonsComponentProps,
} from '@paypal/react-paypal-js';
import { FC } from 'react';
import { completePurchase } from '../API/serverRequests';
import { useNavigate } from 'react-router-dom';
import { userDetailsAtom } from '@/store/atoms';
import { useAtomValue } from 'jotai';

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
  const userDetails = useAtomValue(userDetailsAtom);
  const Navigate = useNavigate();
  const handleApprove = async(orderData: OrderInPayPal) => {
    await completePurchase(orderData, userDetails);
    Navigate('/bot-access-details');
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
