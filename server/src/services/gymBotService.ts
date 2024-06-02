import { saveUserDetails } from "./../controllers/gymBotController";
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";
import paypal from "paypal-rest-sdk";
import User from "../models/UserGymBot";
import HealthDeclaration from "../models/HealthDeclaration";
import { config } from "dotenv";
import { paymentVerification } from "../middleware/somthingToDelete";
import { addUserDetailsDal, saveUserRegistrationDetailsDal } from "../DAL/usersBotDAL";
import { UserFromClient, UserToRegist } from "../types/types";
import { createUserToRegist } from "../utils/utils";

config();

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";
const PAYPAL_CLIENT_ID =
  process.env.PAYPAL_CLIENT_ID || "your_paypal_client_id";
const PAYPAL_SECRET = process.env.PAYPAL_SECRET || "your_paypal_secret";

paypal.configure({
  mode: "sandbox",
  client_id: PAYPAL_CLIENT_ID,
  client_secret: PAYPAL_SECRET,
});

export const registerUser = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();
};

export const loginUser = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error("Invalid username or password");
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid username or password");
  }
  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
  return token;
};

export const createPayment = async ({ plan }: { plan: any }) => {
  const paymentJson = {
    intent: "sale",
    payer: {
      payment_method: "paypal",
    },
    redirect_urls: {
      return_url: "http://your-website.com/success",
      cancel_url: "http://your-website.com/cancel",
    },
    transactions: [
      {
        item_list: {
          items: [
            {
              name: plan.name,
              sku: plan.sku,
              price: plan.price,
              currency: "USD",
              quantity: 1,
            },
          ],
        },
        amount: {
          currency: "USD",
          total: plan.price,
        },
        description: `Payment for plan: ${plan.name}`,
      },
    ],
  };

  return new Promise<string>((resolve, reject) => {
    paypal.payment.create(paymentJson, (error, payment) => {
      if (error) {
        reject(error);
      } else {
        const approvalUrl = payment.links?.find(
          (link) => link.rel === "approval_url"
        )?.href;
        resolve(approvalUrl!);
      }
    });
  });
};

interface CustomJwtPayload extends JwtPayload {
  id: string;
}

export const saveHealthDeclaration = async ({
  token,
  fullName,
  phone,
  signature,
}: {
  token: string;
  fullName: string;
  phone: string;
  signature: string;
}) => {
  const decoded = jwt.verify(token, JWT_SECRET) as CustomJwtPayload;

  if (typeof decoded !== "object" || !("id" in decoded)) {
    throw new Error("Invalid token");
  }

  const userId = decoded.id;
  const healthDeclaration = new HealthDeclaration({
    userId,
    fullName,
    phone,
    signature,
  });
  await healthDeclaration.save();
};

export const grantBotAccess = async ({ phone }: { phone: string }) => {
  // Add your bot access logic here
};

export const completePurchaseService = async (body: {userDetails: UserFromClient, paypalDetails: {orderID: string}}) => {
  try {
    // Validate the request body
    if (!body || !body.paypalDetails || !body.paypalDetails.orderID || !body.userDetails) {
      console.log({body});
      throw new Error("Missing required fields");
    }
    
    const { paypalDetails: { orderID }, userDetails } = body;

    const verifyPayment = await paymentVerification(orderID);
    if (verifyPayment) {
      if (!userDetails || !userDetails.firstName || !userDetails.lastName || !userDetails.phoneNumber || !userDetails.email || !userDetails.userSignature || !userDetails.planPrice || !userDetails.planDuration) {
        throw new Error("Missing required fields");
      }
      const userToRegist = createUserToRegist(userDetails);
      await saveUserRegistrationDetailsDal(userToRegist);
    } else {
      throw new Error(
        "Something went wrong while verifying the payment. Please try again later."
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    console.log("Error in completePurchaseService:", error);
    throw new Error("Something went wrong. Please try again later.");
  }
};


export const saveUserDetailsService = async (body: any) => {
  const { userDetails } = body;
  const { firstName, lastName, phoneNumber, email } = userDetails;
  if (!firstName || !lastName || !phoneNumber || !email) {
    throw new Error("Missing required fields");
  }
  await addUserDetailsDal(userDetails);
};
