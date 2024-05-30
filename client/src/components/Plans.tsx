import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import PayPal from './PayPal';
import HealthDeclaration from './HealthDeclaration';

export type Plan = {
  name: string;
  price: string;
  description: string;
};

const plans: Plan[] = [
  {
    name: 'חודש',
    price: '50',
    description: 'גישה לבוט למשך חודש אחד',
  },
  {
    name: 'שלושה חודשים',
    price: '135',
    description: 'גישה לבוט למשך שלושה חודשים במחיר מוזל',
  },
  {
    name: 'שישה חודשים',
    price: '250',
    description: 'גישה לבוט למשך שישה חודשים עם הנחה משמעותית',
  },
  {
    name: 'שנה',
    price: '480',
    description: 'גישה לבוט למשך שנה שלמה במחיר משתלם',
  },
];

type Props = {};

const Plans = (props: Props) => {
  const [payPal, setPayPal] = useState<boolean>(false);
  const [selectedPlan, setselectedPlan] = useState<Plan | undefined>()
  const handlePlanClick = (plan: Plan) => {
    setPayPal(p => !p)
    setselectedPlan(plan)
  };

  return (
    <div className="text-center">
      <Typography variant="h4" component="h2" className="mb-4">
        תוכניות רכישה
      </Typography>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className="cursor-pointer"
            onClick={() => handlePlanClick(plan)}
          >
            <CardActionArea>
              <CardContent>
                <Typography variant="h5" component="h3">
                  {plan.name}
                </Typography>
                <Typography variant="h6" component="p" color="textSecondary">
                  {plan.price}
                </Typography>
                <Typography variant="body2" component="p">
                  {plan.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
        {/* {(payPal && selectedPlan) && <PayPal totalMoney='0.1' currencyCode="ILS" />} */}
        {(payPal && selectedPlan) && <HealthDeclaration selectedPlan={selectedPlan}/>}
      </div>
    </div>
  );
};

export default Plans;
