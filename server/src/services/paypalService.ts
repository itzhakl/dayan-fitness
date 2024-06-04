import { paypalClient } from "../configs/paypalConfig";
import paypal from "@paypal/checkout-server-sdk";

const getOrderDetails = async (
  orderId: string
): Promise<paypal.orders.Order> => {
  const request = new paypal.orders.OrdersGetRequest(orderId);
  const response = await paypalClient().execute(request);
  return response.result;
};

export { getOrderDetails };
