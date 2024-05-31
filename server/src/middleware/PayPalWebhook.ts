import fetch from 'node-fetch';
import { config } from 'dotenv';

config();

const webhookUrl = process.env.PAYPAL_WEBHOOK_URL;
const accessToken = process.env.PAYPAL_ACCESS_TOKEN; // הכנס את שם המשתנה שלך מקובץ ה-env

const createWebhook = async () => {
    try {
        const response = await fetch('https://api-m.sandbox.paypal.com/v1/notifications/webhooks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify({
                url: webhookUrl,
                event_types: [
                    { name: 'PAYMENT.AUTHORIZATION.CREATED' },
                    { name: 'PAYMENT.AUTHORIZATION.VOIDED' }
                ]
            })
        });

        const responseData = await response.json();
        console.log('Webhook created:', responseData);
    } catch (error) {
        console.error('Error creating webhook:', error);
    }
};

createWebhook();
