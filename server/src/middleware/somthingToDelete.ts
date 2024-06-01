import { config } from 'dotenv';

config();

export const authToken = Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString("base64");
import axios from 'axios';
const headers = {
  "Content-Type": "application/json",
  Authorization: `Basic ${authToken}`,
};



export const orderVerification = async (orderId: string) => {
  console.log(orderId);

  try {
    const response = await axios.get(process.env.PAYPAL_VERIFY_URL + orderId, {
      headers
    });
    const data = response.data;
    if (response.status === 200) {
      console.log(data);
      return data;
    } else {
      console.log(data);
      throw new Error("Something went wrong");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.log(error.response.data);
        throw new Error(error.response.data.message);
      } else if (error.request) {
        console.log(error.request);
        throw new Error("No response received from server");
      } else {
        throw new Error(error.message);
      }
    }
  }
};



