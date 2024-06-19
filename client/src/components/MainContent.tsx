import React from 'react';
import image from '../assets/images/image2.png';
import dumbell from '../assets/svgs/dumbell.svg';
type InfoBoxProps = {
  text: string;
  extraClasses?: string;
};

const InfoBox: React.FC<InfoBoxProps> = ({ text, extraClasses }) => {
  return (
    <div
      className={`rounded-[45px] bg-zinc-50 px-6 py-11 text-right text-4xl font-medium text-sky-950 shadow-xl ${extraClasses}`}
    >
      {text}
    </div>
  );
};

type TextContentProps = Array<{
  id: number;
  text: string;
  extraClasses?: string;
}>;

const Title = 'למה דווקא כושר-בוט?';
const buttonText = 'נשמע פצצה! צרף אותי';

const textContents: TextContentProps = [
  {
    id: 1,
    text: 'בלי צורך לצאת מהבית!',
    extraClasses: 'self-start mt-16 ml-24',
  },
  {
    id: 2,
    text: 'המעטפת היחידה בארץ שתגרום לכם לראות תוצאות',
    extraClasses: 'self-end mt-8 px-12 py-12',
  },
  { id: 3, text: 'הדרכה על ידי מאמן כושר מוסמך ומנוסה', extraClasses: '' },
  { id: 4, text: 'בלי לשלם אלפי שקלים למאמנים', extraClasses: '' },
];

const MainContent: React.FC = () => {
  return (
    <section className="flex flex-col items-center bg-white py-20">
      <header className="text-center text-3xl font-bold leading-[72px] text-secondary">
        {Title}
      </header>
      <div className="z-10 mt-0 w-full max-w-[1516px] px-5 max-md:max-w-full">
        <div className="flex flex-col space-y-4 px-4">
          {textContents.map((content, index) => (
            <div
              key={content.id}
              className={`p-4 ${
                index % 2 === 0 ? 'self-end' : 'self-start'
              } rounded-3xl w-2/3 text-center text-xl font-medium text-secondary shadow-xl`}
              // className="flex w-[29%] flex-col max-md:ml-0 max-md:w-full"
            >
              {content.text}
              {/* <InfoBox
                text={content.text}
                extraClasses={content.extraClasses}
              /> */}
            </div>
          ))}
        </div>
      </div>
        <div className="relative pt-28 flex items-center justify-end w-full flex-col">
          <img
            loading="lazy"
            src={image}
            alt="man with trainig dress"
            className="z-10 absolute aspect-[0.65] w-[50%] grow"
          />
          <div className="absolute bottom-0 min-h-[100px] w-full self-stretch bg-secondary"/>
          <img className='object-cover w-40' src={dumbell}/>
        </div>
        <button className='mt-10 rounded-3xl font-medium bg-highlight px-7 py-1 pt-2 text-sky-950'>{buttonText}</button>
    </section>
  );
};

export default MainContent;
