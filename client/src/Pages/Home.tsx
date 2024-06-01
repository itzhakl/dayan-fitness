import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/choose-plan');
  }

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4">
          קבל מאמן כושר אישי בבוט
        </h1>
        <p className="text-lg mb-6">
          הבוט שלנו יציע לך תוכניות אימונים מותאמות אישית, יעקוב אחרי ההתקדמות שלך וייתן לך תמיכה רציפה.
        </p>
        <p className="text-md mb-8">
          כל זה במרחק קליק אחד בלבד! הצטרף לאלפי לקוחות מרוצים וקבל את גוף החלומות שלך.
        </p>
        <button
          onClick={handleButtonClick}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          קנה עכשיו
        </button>
      </div>
    </div>
  );
}

export default Home;
