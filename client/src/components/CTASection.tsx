import React from 'react';

type Props = {
    onSubscribeClick: () => void;
};

const CTASection: React.FC<Props> = ({ onSubscribeClick }: Props) => {
  return (
    <div className="mt-96 flex w-full flex-col px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex w-full items-center justify-center bg-sky-100 px-16 max-md:max-w-full max-md:px-5">
        <div className="z-10 mb-0 mt-0 w-full max-w-[1466px] max-md:mb-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex w-[41%] flex-col max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="http://b.io/ext_38-"
                className="aspect-[0.61] w-full grow max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="ml-5 flex w-[59%] flex-col max-md:ml-0 max-md:w-full">
              <div className="my-auto flex flex-col self-stretch text-right text-sky-950 max-md:mt-10 max-md:max-w-full">
                <div className="text-7xl font-bold leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                  כושר-בוט, הבוט שיעשה לכם סדר בכל מה שקשור לחיטוב
                </div>
                <div className="mt-8 flex w-[688px] max-w-full flex-col self-end text-4xl">
                  <div className="max-md:max-w-full">
                    רק 90 דקות ביום ותראו תוצאות שלא מביישות שנתיים בחדר כושר.
                  </div>
                  <button
                    onClick={onSubscribeClick}
                    className="mt-7 justify-center self-end rounded-3xl bg-orange-400 px-7 py-3.5 max-md:px-5"
                  >
                    לחצו והצטרפו לכושרבוט
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-80 self-center text-center text-7xl font-bold leading-[72px] text-sky-950 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        מה אומרים המנויים שלנו?
      </div>
    </div>
  );
};

export default CTASection;
