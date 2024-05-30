import { WhatsApp as WhatsAppIcon } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { useState } from 'react';
import Plans from './Plans';

const WhatsAppAccessComponent = () => {
  const [plans, setPlans] = useState<boolean>(false);
  const handlePurchase = () => {
    setPlans((p) => !p);
  };

  return (
    <div className="text-center">
      <Typography variant="h5" gutterBottom>
        גישה לבוט ב-WhatsApp
      </Typography>
      <Typography variant="body1" gutterBottom>
        קבל גישה לבוט ב-WhatsApp והיה תמיכה 24/7 בכל שאלה או בקשה. קבל מענה מהיר
        ואישי לצרכיך.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handlePurchase}
        startIcon={<WhatsAppIcon />}
      >
        קנה גישה לבוט
      </Button>
      {plans && <Plans />}
    </div>
  );
};

export default WhatsAppAccessComponent;
