import paypal from "@paypal/checkout-server-sdk";
import fetch from 'node-fetch';
import 'dotenv/config';

const environment = () => {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    throw new Error("Missing PayPal credentials");
  }
  return new paypal.core.SandboxEnvironment(clientId, clientSecret);
};

export const paypalClient = () => new paypal.core.PayPalHttpClient(environment());

// export const verifyPayment = async(paymentId: string, accessToken: string): Promise<any> => {
//   const response = await fetch(`https://api.paypal.com/v1/payments/payment/${paymentId}`, {
//     headers: {
//       'Authorization': `Bearer ${accessToken}`,
//       'Content-Type': 'application/json',
//     },
//   });

//   if (!response.ok) {
//     throw new Error('Failed to verify payment');
//   }

//   return response.json();
// }


