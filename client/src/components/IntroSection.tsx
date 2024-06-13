import React from 'react';

type Props = {
    onLearnMoreClick: () => void;
    onJoinNowClick: () => void;
}

const IntroSection: React.FC<Props> = ({ onLearnMoreClick, onJoinNowClick }: Props) => {
  return (
    <div className="relative mt-10 w-full max-w-[1700px] self-center max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex w-[39%] flex-col max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="http://b.io/ext_27-"
            className="aspect-[0.78] w-full grow max-md:max-w-full"
          />
        </div>
        <div className="ml-5 flex w-[61%] flex-col max-md:ml-0 max-md:w-full">
          <div className="relative mt-32 flex flex-col text-right max-md:mt-10 max-md:max-w-full">
            <div className="text-9xl font-bold leading-[120px] text-sky-950 max-md:max-w-full max-md:text-4xl max-md:leading-10">
              איך לעצב את הבטן ב-90 דקות ביום מבלי לשנות את התזונה?
            </div>
            <div className="mt-12 flex gap-5 self-end text-4xl font-medium max-md:mt-10 max-md:flex-wrap">
              <button
                onClick={onLearnMoreClick}
                className="w-fit grow justify-center rounded-3xl bg-orange-400 px-7 py-3.5 text-sky-950 max-md:px-5"
              >
                ספר לי על כושר-בוט
              </button>
              <button
                onClick={onJoinNowClick}
                className="w-fit grow justify-center rounded-3xl bg-sky-950 px-9 py-3.5 text-zinc-50 max-md:px-5"
              >
                אני רוצה לנסות!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
