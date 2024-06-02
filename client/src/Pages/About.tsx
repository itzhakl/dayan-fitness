import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-500">אודות האתר</h1>
        <p className="text-lg mb-6 text-gray-700">
          האתר שלנו מספק גישה למאמן כושר אישי מבוסס בוט, המאפשר לך לשפר את הכושר שלך בצורה מותאמת אישית ונוחה.
          אנו מציעים תוכניות מגוונות שנועדו להתאים לכל רמות הכושר, מטרות ובריאות.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-blue-500">היתרונות שלנו:</h2>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li className="mb-2">גישה 24/7 לבוט מאמן הכושר האישי שלך</li>
          <li className="mb-2">תוכניות כושר מותאמות אישית לפי הצרכים והמטרות שלך</li>
          <li className="mb-2">מעקב אחר התקדמות והתאמה אישית בזמן אמת</li>
          <li className="mb-2">הדרכה ותמיכה מתמשכת לשמירה על מוטיבציה</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4 text-blue-500">מי אנחנו?</h2>
        <p className="text-lg mb-6 text-gray-700">
          הצוות שלנו מורכב ממאמני כושר מקצועיים ומומחי טכנולוגיה, ששמים להם למטרה להביא את חווית הכושר האישית לכל אחד.
          אנו מאמינים שכל אחד יכול להגיע למטרות שלו בעזרת הכלים הנכונים וההדרכה הנכונה.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-blue-500">צרו קשר</h2>
        <p className="text-lg text-gray-700">
          אם יש לכם שאלות נוספות או שאתם מעוניינים לדעת יותר על התוכניות שלנו, אל תהססו לפנות אלינו דרך דף <a href="/contact" className="text-blue-500 underline">צור קשר</a>.
        </p>
      </div>
    </div>
  );
}

export default About;
