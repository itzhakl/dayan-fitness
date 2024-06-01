const clientId = "ARvRfu6tyPMGsK0LPXS1gvTbj3c-fjYpicB1VKZ1WC6U3C9UtSthdPKSnw7NNIf1KAn54R2B7_cBajQ2";
const clientSecret = "EI0J1Y-Gap5SvQc6thP2-9cp3-gqdQWOiSsYWG-0Pgq8YatR4hfIS66XQeydCkqjfUihKFyyYEA6zi0l";
export const authToken = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
import axios from 'axios';
const headers = {
  "Content-Type": "application/json",
  Authorization: `Basic ${authToken}`,
};



export const orderVerification = async (orderId: string) => {
  console.log(orderId);
  
  try {
    const response = await axios.get(`https://sandbox.paypal.com/v2/checkout/orders/${orderId}`, {
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



