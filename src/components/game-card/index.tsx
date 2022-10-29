import {Game} from 'interfaces';
import React from 'react';

interface GameCardProps {
    game: Game;
    active?: boolean;
    onClick?: () => void;
}

export const GameCard: (props: GameCardProps) => JSX.Element = (props: GameCardProps) => {
  return (
    <div onClick={() => {
      props.onClick?.();
    }} className={'rounded '+ (props.active ? 'bg-white border-b-4 ' : 'bg-white/50 border-b-0') +' border-b-green-500 p-2 w-[200px] transition-all cursor-pointer group hover:bg-white hover:border-b-4'}>
      <img alt={props.game.displayName +'\' icon'} src={'http://localhost:8000/assets/icons/'+ props.game.icon +'.svg'} className={'transition-all '+ (props.active ? 'opacity-100' : 'opacity-50') +' group-hover:opacity-100'} />
      <p className="text-center text-black font-semibold text-xl">{props.game.displayName}</p>
    </div>
  );
};

