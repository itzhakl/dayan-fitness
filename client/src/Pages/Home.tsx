import { currentPageAtom } from '@/store/atoms';
import { useSetAtom } from 'jotai';
import React from 'react';
// import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const setCurrentPage = useSetAtom(currentPageAtom);
  // const navigate = useNavigate();

  const handleButtonClick = () => {
    setCurrentPage('choose-plan');
    // navigate('/choose-plan');
  }

  return (
    <div className="flex flex-col items-center justify-center p-8 min-h-svh">
      <div className="text-center max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-600">
          קבל מאמן כושר אישי בבוט
        </h1>
        <p className="text-lg mb-6 text-gray-700">
          הבוט המתקדם שלנו יציע לך תוכניות אימונים מותאמות אישית, יעקוב אחרי ההתקדמות שלך וייתן לך תמיכה רציפה בכל שלב בדרך.
        </p>
        <p className="text-md mb-8 text-gray-600">
          דמיין לעצמך תוכנית אימונים שכולה מותאמת במיוחד עבורך, ללא הצורך לצאת מהבית. תקבל עדכונים שוטפים על ההתקדמות שלך ותוכל ליהנות מתמיכה מקצועית בזמן אמת.
        </p>
        <p className="text-md mb-8 text-gray-600">
          כל זה במרחק כמה קליקים בלבד! הצטרף לאלפי לקוחות מרוצים שכבר השיגו את גוף החלומות שלהם בעזרת הבוט שלנו. אל תבזבז עוד זמן - התחל את השינוי שלך היום!
        </p>
        <button
          onClick={handleButtonClick}
          className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 text-xl font-semibold"
        >
          הצטרף עכשיו
        </button>
      </div>
    </div>
  );
}

export default Home;
