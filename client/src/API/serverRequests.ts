import { OrderInPayPal } from "@/components/PayPal";

const sereverUrl = import.meta.env.VITE_SERVER_URL;
import { UserDetails } from "@/utils/validation";

const routes = {
  submitForm: '/submitForm',
  completePurchase: '/completePurchase',
}

export const submitForm = async (data: any) => {
  try {
    const response = await fetch(sereverUrl + routes.submitForm, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const completePurchase = async (paypalOrderDetails: OrderInPayPal, userDetails: UserDetails) => {
  try {
    const response = await fetch(sereverUrl + routes.completePurchase, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({paypalOrderDetails, userDetails}),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}