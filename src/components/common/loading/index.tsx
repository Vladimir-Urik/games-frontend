import React from 'react';
import {useRecoilState} from 'recoil';
import {sessionStateAtom} from '../../../cache';

export const Loading: React.FC = () => {
  const texts = [
    'Reticulating splines...',
    'Generating witty dialog...',
    'Swapping time and space...',
    'Spinning violently around the y-axis...',
    'Tokenizing real life...',
    'Bending the spoon...',
    'Filtering morale...',
    'Don\'t think of purple hippos...',
    'We need a new fuse...',
    'Have a good day.',
    'Upgrading Windows, your PC will restart several times. Sit back and relax.',
    '640K ought to be enough for anybody',
    'The architects are still drafting',
    'The bits are breeding',
    'Feeding unicorns...',
    'Rupturing the subspace barrier',
    'Creating an anti-time reaction',
    'Converging tachyon pulses',
    'Bypassing control of the matter-antimatter integrator',
    'Adjusting the dilithium crystal converter assembly',
    'Reversing the shield polarity',
    'Disrupting warp fields with an inverse graviton burst',
    'Up, Up, Down, Down, Left, Right, Left, Right, B, A.',
    'Do you like my loading animation? I made it myself',
    'Whoah, look at it go!',
    'No, I\'m awake. I was just resting my eyes.',
    'One mississippi, two mississippi...',
    'Don\'t panic... AHHHHH!',
    'Ensuring Gnomes are still short.',
    'Baking ice cream...',
    'Updating Updater...',
    'Downloading Downloader...',
    'Debugging Debugger...',
    'Reading Terms and Conditions for you.',
    'Digested cookies being baked again.',
    'Live long and prosper.',
    'There is no cow level, but there\'s a goat one!',
    'Deleting all your hidden porn...',
    'Running with scissors...',
    'Definitely not a virus...',
    'You may call me Steve.',
    'You seem like a nice person...',
    'Mining some bitcoins...',
    'Downloading more RAM..',
    'Updating to Windows Vista...',
    'Deleting System32 folder',
    'Hiding all ;\'s in your code',
    'Alt-F4 speeds things up.',
    'Initializing the initializer...',
    'When was the last time you dusted around here?',
    'Optimizing the optimizer...',
    'Last call for the data bus! All aboard!',
    'Running swag sticker detection...',
    'Never let a computer know you\'re in a hurry.',
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
