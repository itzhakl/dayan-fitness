import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Button } from '@mui/material';

const BotAccessDetails: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-green-500 p-4">
      <div className="mx-auto max-w-md rounded-lg bg-white p-8 text-center shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-blue-600">
          תודה על רכישת הבוט שלנו!
        </h2>
        <p className="mb-4 text-gray-700">
          אנחנו כל כך מתרגשים להתחיל לעבוד איתך! יתכן שיחלפו מספר דקות עד שהבוט
          יתעדכן במספר שלך. בינתיים, כדאי להוסיף את כושר-בוט לאנשי הקשר שלך.
        </p>
        <Button
          variant="contained"
          color="success"
          startIcon={<WhatsAppIcon />}
          onClick={() => window.open('https://wa.me/+972503908171', '_blank')}
          className="mt-4"
        >
          בואו נתחיל עכשיו!
        </Button>
      </div>
    </div>
  );
};

export default BotAccessDetails;
