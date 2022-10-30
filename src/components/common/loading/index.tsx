import React from 'react';
import {useRecoilState} from 'recoil';
import {sessionStateAtom} from '../../../cache';

export const Loading: React.FC = () => {
  const texts = [
    'Collecting hamsters',
    'Baking cookies',
    'Washing dishes',
    'Cleaning the house',
    'Washing the car',
    'Selling the car',
    'Buying a new car',
    'Collecting flowers',
    'Collecting stamps',
    'Removing the trash',
    'Washing the dog',
    'Washing the cat',
    'Drinking coffee',
    'Drinking tea',
    'Drinking water',
    'Drinking milk',
  ];

  const [session] = useRecoilState(sessionStateAtom);
  const [text, setText] = React.useState(texts[Math.floor(Math.random() * texts.length)]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setText(texts[Math.floor(Math.random() * texts.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!session.loading) {
    return <></>;
  }

  return (
    <div className={'bg-blue-800 w-full h-screen flex items-center justify-center z-50 absolute'}>
      <div>
        <span className="loader mx-auto"></span>
        <p className="mt-8 font-bold text-xl text-blue-100">{text}</p>
      </div>
    </div>
  );
};
