import React from 'react';
import vector1 from '../assets/svgs/vector1.svg';
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
      <img
        className="absolute inset-0 -z-10 w-full bg-center object-cover"
        alt="svgvector"
        src={vector1}
      />
      <div className="p-8">
        <div className="relative flex w-full justify-between text-right text-xl font-medium text-primary">
          <img
            loading="lazy"
            src={imageLogo}
            className="aspect-[4] h-9 shrink-0"
          />
          <button
            onClick={onTryClick}
            className="rounded-3xl bg-secondary text-2xl pt-1 px-3 text-primary-text"
          >{TRY_CLICK}
          </button>
        </div>
        <div className="flex pt-16">
          <div className="flex w-3/5 flex-col items-start pt-8">
            <p className="font-myfont text-[5rem] font-bold text-secondary leading-[5rem]">
              {MAIN_TEXT}
            </p>
            <div className="flex justify-center pt-4 gap-5">
              <button onClick={onJoinNowClick} className="rounded-3xl bg-secondary font-myfont px-5 py-1 text-2xl font-medium leading-[normal] tracking-[0] text-primary-text">
                {I_WANT_TO_TRY}
              </button>
              <button onClick={onLearnMoreClick} className="rounded-3xl bg-highlight font-myfont px-5 py-1 text-2xl font-medium leading-[normal] tracking-[0] text-secondary">
                {TELL_ME_ABOUT}
              </button>
            </div>
          </div>
          <div className="relative pt-20 w-2/5 flex items-center justify-center">
            <img
              className="-top-19 h-[100vh] absolute -right-12"
              alt="man with food"
              src={image1}
            />
            <img className="object-cover w-80" alt="logo svg" src={logo} />
          </div>
        </div>
        <div className="text-secondary pt-36 w-[45vw]">
          <p className="font-bold leading-[4rem] text-5xl">{GET_TO_KNOW}</p>
          <p className="font-normal leading-[2rem] text-2xl">
            {GET_TO_KNOW_TEXT}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
