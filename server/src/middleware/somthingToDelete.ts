import { config } from 'dotenv';

config();

export const authToken = Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString("base64");
import axios from 'axios';
const headers = {
  "Content-Type": "application/json",
  Authorization: `Basic ${authToken}`,
};



export const paymentVerification = async (orderId: string) => {
  try {
    const response = await axios.get(process.env.PAYPAL_VERIFY_URL + orderId, {
      headers
    });
    const data = response.data;
    if (response.status >= 200 || response.status <= 299) {
      return true;
    } else {
      console.log(data);
      throw new Error("We could not verify your payment");
    }
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.log(error.response.data);
        throw new Error('Something went wrong');
      } else if (error.request) {
        console.log(error.request);
        throw new Error("No response received from server");
      } else {
        throw new Error('Something went wrong');
      }
    }
  }
};



