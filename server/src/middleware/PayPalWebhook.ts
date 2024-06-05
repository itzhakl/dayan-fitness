import { Request, Response } from "express";
import crypto from "crypto";

const PAYPAL_WEBHOOK_ID = process.env.PAYPAL_WEBHOOK_ID || "YOUR_WEBHOOK_ID";
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID || "YOUR_CLIENT_ID";
const PAYPAL_SECRET = process.env.PAYPAL_SECRET || "YOUR_SECRET";

export const webhookHandler = async (req: Request, res: Response) => {
    console.log(req.body);
    
  const body = req.body;
  const transmissionId = req.headers["paypal-transmission-id"] as string;
  const transmissionTime = req.headers["paypal-transmission-time"] as string;
  const certUrl = req.headers["paypal-cert-url"] as string;
  const authAlgo = req.headers["paypal-auth-algo"] as string;
  const transmissionSig = req.headers["paypal-transmission-sig"] as string;

  // Step 1: Generate the expected signature
  const expectedSignature = crypto
    .createHmac("sha256", PAYPAL_SECRET)
    .update(
      transmissionId +
        transmissionTime +
        PAYPAL_WEBHOOK_ID +
        JSON.stringify(body)
    )
    .digest("base64");

  // Step 2: Compare the signature
  if (transmissionSig !== expectedSignature) {
    return res.status(400).send("Invalid signature");
  }

  // Step 3: Verify the webhook event
  if (authAlgo !== "SHA256") {
    return res.status(400).send("Invalid auth algorithm");
  }

  // Handle the event
  switch (body.event_type) {
    case "PAYMENT.SALE.COMPLETED":
      console.log("Payment completed:", body);
      break;
    case "PAYMENT.SALE.DENIED":
      console.log("Payment denied:", body);
      break;
    // Add more cases as needed
    default:
      console.log("Unhandled event:", body.event_type);
  }

  res.status(200).send("Webhook received");
};
