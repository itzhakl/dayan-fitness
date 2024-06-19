import React from 'react';
import imageLogo from '../assets/images/imageLogo.png';
import image1 from '../assets/images/image1.png';
import logo from '../assets/svgs/logo.svg';

type Props = {
  onTryClick: () => void;
  onLearnMoreClick: () => void;
  onJoinNowClick: () => void;
};

const TRY_CLICK = 'תן לי לנסות את כושר-בוט';
const MAIN_TEXT = 'איך לעצב את הבטן ב-90 דקות ביום מבלי לשנות את התזונה?';
const I_WANT_TO_TRY = 'אני רוצה לנסות!';
const TELL_ME_ABOUT = 'ספר לי על כושר-בוט';
const GET_TO_KNOW = 'הכירו את כושר-בוט!';
const GET_TO_KNOW_TEXT = 'כושר-בוט הוא בוט וואצאפ שישלח לך את כל פרטי האימון יישירות לוואצאפ באופן יומיומי בלי צורך לצאת מהבית או לשלם אלפי שקלים למאמיני כושר. ';

const HeaderSection: React.FC<Props> = ({ onTryClick, onLearnMoreClick, onJoinNowClick }: Props) => {
  return (
    <section className="relative top-0 w-full">
      <div className="w-full bg-mobile-bg bg-cover bg-center p-3 lg:bg-desktop-bg lg:p-8">
        <div className="relative flex w-full justify-between text-right text-xl font-medium text-primary">
          <img
            loading="lazy"
            src={imageLogo}
            className="aspect-[4] h-9 shrink-0"
          />
          <button
            onClick={onTryClick}
            className="rounded-3xl bg-secondary px-3 pt-1 text-sm text-primary-text lg:text-2xl"
          >
            {TRY_CLICK}
          </button>
        </div>
        <div className="flex flex-col pt-10 lg:flex-row lg:pt-16">
          <div className="flex flex-col items-start p-3 pt-8 lg:w-3/5">
            <p className="font-myfont text-5xl font-bold text-secondary lg:text-[5rem] lg:leading-[5rem]">
              {MAIN_TEXT}
            </p>
            <div className="flex flex-col justify-center gap-5 pt-4 lg:flex-row">
              <button
                onClick={onJoinNowClick}
                className="rounded-3xl bg-secondary px-5 py-1 font-myfont font-medium leading-[normal] tracking-[0] text-primary-text lg:text-2xl"
              >
                {I_WANT_TO_TRY}
              </button>
              <button
                onClick={onLearnMoreClick}
                className="rounded-3xl bg-highlight px-5 py-1 font-myfont font-medium leading-[normal] tracking-[0] text-secondary lg:text-2xl"
              >
                {TELL_ME_ABOUT}
              </button>
            </div>
          </div>
          <div
            // style={{ clipPath: 'inset(0 0 0 15%)' }}
            className="relative -left-3 flex h-[40vh] w-2/3 items-center justify-end self-end overflow-visible pb-28 lg:pt-20"
          >
            <img
              className="lg:-top-19 absolute -right-8 z-10 w-[200px]" // increased width to 150%
              alt="man with food"
              src={image1}
            />
            <div className="absolute overflow-hidden">
              <img
                className="inset-y-0 left-0 h-full object-cover w-[200%]"
                alt="logo svg"
                src={logo}
                // style={{ clipPath: 'inset(0 0 0 15%)' }} // CSS property to clip the left third
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 pt-36 text-center text-secondary lg:w-[45vw] lg:text-right">
        <p className="text-2xl font-bold leading-[4rem] lg:text-5xl">
          {GET_TO_KNOW}
        </p>
        <p className="font-normal leading-[2rem] lg:text-2xl">
          {GET_TO_KNOW_TEXT}
        </p>
      </div>
    </section>
  );
};

export default HeaderSection;
