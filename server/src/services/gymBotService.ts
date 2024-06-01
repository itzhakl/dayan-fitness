import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';
import paypal from 'paypal-rest-sdk';
import User from '../models/UserGymBot';
import HealthDeclaration from '../models/HealthDeclaration';
import { config } from 'dotenv';
import { orderVerification } from '../middleware/somthingToDelete';

config();

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID || 'your_paypal_client_id';
const PAYPAL_SECRET = process.env.PAYPAL_SECRET || 'your_paypal_secret';

paypal.configure({
  mode: 'sandbox',
  client_id: PAYPAL_CLIENT_ID,
  client_secret: PAYPAL_SECRET,
});

export const registerUser = async ({ username, password }: { username: string, password: string }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();
};

export const loginUser = async ({ username, password }: { username: string, password: string }) => {
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error('Invalid username or password');
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid username or password');
  }
  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
  return token;
};

export const createPayment = async ({ plan }: { plan: any }) => {
  const paymentJson = {
    intent: 'sale',
    payer: {
      payment_method: 'paypal',
    },
    redirect_urls: {
      return_url: 'http://your-website.com/success',
      cancel_url: 'http://your-website.com/cancel',
    },
    transactions: [{
      item_list: {
        items: [{
          name: plan.name,
          sku: plan.sku,
          price: plan.price,
          currency: 'USD',
          quantity: 1,
        }],
      },
      amount: {
        currency: 'USD',
        total: plan.price,
      },
      description: `Payment for plan: ${plan.name}`,
    }],
  };

  return new Promise<string>((resolve, reject) => {
    paypal.payment.create(paymentJson, (error, payment) => {
      if (error) {
        reject(error);
      } else {
        const approvalUrl = payment.links?.find(link => link.rel === 'approval_url')?.href;
        resolve(approvalUrl!);
      }
    });
  });
};

interface CustomJwtPayload extends JwtPayload {
  id: string;
}

export const saveHealthDeclaration = async ({ token, fullName, phone, signature }: { token: string, fullName: string, phone: string, signature: string }) => {
  const decoded = jwt.verify(token, JWT_SECRET) as CustomJwtPayload;

  if (typeof decoded !== 'object' || !('id' in decoded)) {
    throw new Error('Invalid token');
  }

  const userId = decoded.id;
  const healthDeclaration = new HealthDeclaration({ userId, fullName, phone, signature });
  await healthDeclaration.save();
};

export const grantBotAccess = async ({ phone }: { phone: string }) => {
  // Add your bot access logic here
};

export const verifyPaymentService = async (body: any ) => {
  const { orderID } = body;
  console.log({body}, {orderID});
  try {
    const data  = await orderVerification(orderID)
    console.log('success', data);
  } catch (error) {
    console.log(error);
  }
  
};