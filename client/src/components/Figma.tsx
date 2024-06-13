import React from 'react'
import vector1 from '../assets/svgs/vector1.svg';

type Props = {}

const Figma = (props: Props) => {
  return (
    <div className=''>
      <img className='absolute inset-0 w-full bg-center object-cover -z-10' alt='svgvector' src={vector1}/>
      <p className="font-myfont text-xl font-thin">Ultra Light Text</p>
      <p className="font-myfont text-xl font-extralight">Light Text</p>
      <p className="font-myfont text-xl font-black">Black Text</p>
      <p className="font-myfont text-xl font-bold">Bold Text</p>
      <p className="font-myfont text-xl font-semibold">Demi Bold Text</p>
      <p className="font-myfont text-xl font-medium">Medium Text</p>
      <p className="font-myfont text-xl font-normal">Regular Text</p>
      <p className="font-myfont text-xl font-extrabold">Ultra Bold Text</p>
    </div>
  );
}

export default Figma