import React from 'react';
import vector1 from '../assets/svgs/vector1.svg';
import imageLogo from '../assets/images/imageLogo.png';
import image1 from '../assets/images/image1.png';
import logo from '../assets/svgs/logo.svg';

type Props = {
  onTryClick: () => void;
};

const HeaderSection: React.FC<Props> = ({ onTryClick }: Props) => {
  return (
    <section className="relative top-0 w-full">
      {/* <div className="grid grid-cols-5 grid-rows-8 gap-4">
        <div className="col-span-2">
          <img
            loading="lazy"
            src={imageLogo}
            className="aspect-[4] w-[205px] max-w-full shrink-0"
          />
        </div>
        <div className="col-span-2 col-start-4">
          <button
            onClick={onTryClick}
            className="justify-center self-start rounded-3xl bg-sky-950 px-7 py-3 text-primary-text max-md:px-5"
          >
            תן לי לנסות את כושר-בוט
          </button>
        </div>
        <div className="col-span-3 row-span-3 row-start-2">
          <p className="left-0 top-0 font-myfont text-[7.5rem] font-bold leading-[120px] tracking-[0] text-secondary">
            איך לעצב את הבטן ב-90 דקות ביום מבלי לשנות את התזונה?
          </p>
        </div>
        <div className="col-start-1 row-start-5">
          <div className="rounded-3xl bg-secondary">
            <p className="font-myfont text-4xl font-medium leading-[normal] tracking-[0] text-primary-text">
              אני רוצה לנסות!
            </p>
          </div>
        </div>
        <div className="col-start-2 row-start-5">
          <div className="rounded-3xl bg-highlight">
            <p className="font-myfont text-4xl font-medium leading-[normal] tracking-[0] text-secondary">
              ספר לי על כושר-בוט
            </p>
          </div>
        </div>
        <div className="col-span-2 col-start-4 row-span-5 row-start-2">
          <div className="relative flex items-center justify-center">
            <img
              className="-top-19 absolute -right-20"
              alt="man with food"
              src={image1}
            />
            <img className="w-full object-cover" alt="logo svg" src={logo} />
          </div>
        </div>
        <div className="col-span-3 row-span-2 row-start-7">
          <div className="text-secondary">
            <p className="font-bold">הכירו את כושר-בוט!</p>
            <p className="font-normal">
              כושר-בוט הוא בוט וואצאפ שישלח לך את כל פרטי האימון יישירות לוואצאפ
              באופן יומיומי בלי צורך לצאת מהבית או לשלם אלפי שקלים למאמיני כושר.
            </p>
          </div>
        </div>
      </div> */}

      <img
        className="absolute inset-0 -z-10 w-full bg-center object-cover"
        alt="svgvector"
        src={vector1}
      />
      <div className="relative flex justify-between gap-5 p-[1rem] text-right text-4xl font-medium text-primary max-md:max-w-full max-md:flex-wrap">
        <img
          loading="lazy"
          src={imageLogo}
          className="aspect-[4] w-[205px] max-w-full shrink-0"
        />
        <button
          onClick={onTryClick}
          className="justify-center self-start rounded-3xl bg-sky-950 px-7 py-3 text-primary-text max-md:px-5"
        >
          תן לי לנסות את כושר-בוט
        </button>
      </div>
      <div className="flex">
        <div className="flex w-3/5 flex-col items-start">
          <p className="left-0 top-0 font-myfont text-[7.5rem] font-bold leading-[120px] tracking-[0] text-secondary">
            איך לעצב את הבטן ב-90 דקות ביום מבלי לשנות את התזונה?
          </p>
          <div className="flex justify-center gap-5">
            <div className="rounded-3xl bg-secondary">
              <p className="font-myfont text-4xl font-medium leading-[normal] tracking-[0] text-primary-text">
                אני רוצה לנסות!
              </p>
            </div>
            <div className="rounded-3xl bg-highlight">
              <p className="font-myfont text-4xl font-medium leading-[normal] tracking-[0] text-secondary">
                ספר לי על כושר-בוט
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <img
            className="-top-19 absolute -right-20"
            alt="man with food"
            src={image1}
          />
          <img className="w-full object-cover" alt="logo svg" src={logo} />
        </div>
      </div>
      <div className="text-secondary">
        <p className="font-bold">הכירו את כושר-בוט!</p>
        <p className="font-normal">
          כושר-בוט הוא בוט וואצאפ שישלח לך את כל פרטי האימון יישירות לוואצאפ
          באופן יומיומי בלי צורך לצאת מהבית או לשלם אלפי שקלים למאמיני כושר.
        </p>
      </div>
    </section>
  );
};

export default HeaderSection;
