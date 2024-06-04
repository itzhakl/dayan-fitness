import paypal from "@paypal/checkout-server-sdk";
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

