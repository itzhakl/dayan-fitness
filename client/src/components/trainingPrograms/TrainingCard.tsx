import React from 'react';
import V_gray from '../../assets/svgs/V-gray.svg';
import V_green from '../../assets/svgs/V-green.svg';


const instructionalVideoEveryDay_text = 'סירטון הדרכה בכל יום.';
const buyingButton = 'אני רוצה לרכוש מנוי לכושר-בוט';

type TrainingCardProps = {
    toggle?: boolean;
    title: string;
    onClick: () => void;
};

const TrainingCard: React.FC<TrainingCardProps> = ({ toggle, title, onClick }) => {
    const repetitions = 10;

    return (
        <div className='flex flex-col w-[350px] mb-12 mx-3 xl:mx-0 items-center rounded-3xl bg-primary p-5'>
            <div className='flex flex-col'>
                <p className="text-2xl font-bold text-secondary my-4">{title}</p>
                {Array.from({ length: repetitions }, (_, index) => {
                    const color_icon = (toggle && (index > 4))
                    return (
                        <div className="mt-2 flex items-center" key={index}>
                            <img
                                className="w-4 ml-2"
                                alt="V-icon"
                                src={color_icon ? V_gray : V_green}
                            />
                            <p className={`md:text-2xl ${color_icon && 'text-secondary opacity-[50%]'}`}>{instructionalVideoEveryDay_text}</p>
                        </div>
                    )
                })}
            </div>
            <button className={`mt-14 px-4 py-2 w-[230px] ${toggle ? 'bg-secondary':'bg-strong-highlight'} text-white rounded-full`} onClick={onClick}>{buyingButton}</button>
        </div>
    );
}

export default TrainingCard;
