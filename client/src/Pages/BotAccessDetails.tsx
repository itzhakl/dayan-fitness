import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Button } from '@mui/material';

const BotAccessDetails: React.FC = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md text-center">
      <h2 className="text-lg font-bold mb-4">תודה שקנית את הבוט! מפה אנחנו נעבוד ביחד.</h2>
      <p className="mb-4 text-gray-700">
        יתכן שיחלפו מספר דקות שהבוט יתעדכן במספר שלכם. לבינתיים תוסיפו את הכושר-בוט לאנשי קשר.
      </p>
      <Button
        variant="contained"
        color="success"
        startIcon={<WhatsAppIcon />}
        onClick={() => window.open('https://wa.me/+972503908171', '_blank')}
        className="mt-4"
      >
        בוא נתחיל כבר מעכשיו
      </Button>
    </div>
  );
};

export default BotAccessDetails;
