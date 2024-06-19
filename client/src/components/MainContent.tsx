import React from 'react';

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
        <div className="flex flex-col space-y-4">
          {textContents.map((content, index) => (
            <div
              key={content.id}
              className={`p-4 ${
                index % 2 === 0 ? 'self-end' : 'self-start'
              } rounded-3xl text-center text-xl font-medium text-secondary shadow-xl ${content.extraClasses}`}
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
        <div className="ml-5 flex w-[44%] flex-col max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bed8070183bbad3f72af84e3608592623ca43e6c9495e42de68d2cf1bf6fc7a?apiKey=914036782bbf484995add4b780ae9c38&"
            alt=""
            className="aspect-[0.65] w-full grow max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
      <footer className="min-h-[153px] w-full self-stretch bg-sky-950 max-md:max-w-full"></footer>
    </section>
  );
};

export default MainContent;
