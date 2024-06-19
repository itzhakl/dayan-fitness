import React from 'react';
import image3 from '../../assets/images/image3.png';
import TrainingCard from './TrainingCard';

type Props = {
    purchasingSubscriptionForBeginners: () => void;
    purchasingSubscriptionForAdvanced: () => void;
}

const trainingPrograms = 'תוכניות האימונים של כושר-בוט?';
const beginners_text = 'כושר-בוט למתחילים';
const advanced_text = 'כושר-בוט למתקדמים';

const TrainingPrograms: React.FC<Props> = ({ purchasingSubscriptionForBeginners, purchasingSubscriptionForAdvanced }) => {
    return (
        <section className="relative top-0 w-full">
            <div className="flex flex-col w-full h-[800px] p-10 items-center">
                <p className="font-myfont text-3xl md:text-5xl text-center font-bold text-secondary mb-12">
                    {trainingPrograms}
                </p>
                <div className='flex flex-wrap w-[95%] items-center justify-center'>
                    <TrainingCard title={beginners_text} onClick={purchasingSubscriptionForBeginners} toggle />
                    <img
                        className="hidden lg:flex w-[370px]"
                        alt="is strong man"
                        src={image3}
                    />
                    <TrainingCard title={advanced_text} onClick={purchasingSubscriptionForAdvanced}/>
                </div>
            </div>
        </section>
    );
}

export default TrainingPrograms;
