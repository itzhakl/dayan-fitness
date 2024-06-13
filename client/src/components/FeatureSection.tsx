import React from 'react';

const FeatureSection: React.FC = () => {
  return (
    <>
      <div className="relative mt-40 self-end text-right text-7xl font-bold leading-[72px] text-sky-950 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        הכירו את כושר-בוט!
      </div>
      <div className="z-10 mt-3 flex w-full max-w-[1638px] flex-col max-md:max-w-full">
        <div className="w-[855px] self-end text-right text-4xl text-sky-950 max-md:max-w-full">
          כושר-בוט הוא בוט וואצאפ שישלח לך את כל פרטי האימון יישירות לוואצאפ
          באופן יומיומי בלי צורך לצאת מהבית או לשלם אלפי שקלים למאמני כושר.
        </div>
      </div>
      <div className="mt-80 self-center text-right text-7xl font-bold leading-[72px] text-sky-950 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        למה דווקא כושר-בוט?
      </div>
      <div className="mt-16 flex w-[1237px] max-w-full items-start justify-between gap-5 self-center text-right text-4xl text-sky-950 max-md:mt-10 max-md:flex-wrap">
        <button className="justify-center self-start rounded-[45px] bg-zinc-50 px-10 py-11 font-medium shadow-lg max-md:px-5">
          בלי צורך לצאת מהבית!
        </button>
        <button className="mt-8 justify-center self-end rounded-[45px] bg-zinc-50 px-10 py-12 shadow-lg max-md:max-w-full max-md:px-5">
          המעטפת היחידה בארץ שתגרום לכם לראות תוצאות
        </button>
      </div>
    </>
  );
};

export default FeatureSection;
