import {Game} from '../../../interfaces';
import {Button, GameCard} from '../../../components';
import React, {FormEvent} from 'react';
import useSWR from 'swr';
import {getGames} from '../../../services';
import {useRecoilState} from 'recoil';
import {sessionStateAtom} from '../../../cache';

export const SelectGameForm: React.FC = () => {
  const {data} = useSWR<Game[]>('games', getGames);
  const [session, setSession] = useRecoilState(sessionStateAtom);
  const [nicknameError, setNicknameError] = React.useState<string | undefined>(undefined);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const nick = formData.get('nickName') as string;

    if (nick.length < 3) {
      setNicknameError('Nickname must be at least 3 characters long');
      return;
    }

    if (nick.length > 16) {
      setNicknameError('Nickname must be at most 16 characters long');
      return;
    }

    setNicknameError(undefined);
    setSession((prev) => {
      return {
        ...prev,
        nickname: nick,
        screen: 'SELECT_NEXT_MOVE',
      };
    });
  };

  if (session.screen !== 'SELECT_GAME') {
    return <></>;
  }

  return (
    <>
      <div className="flex gap-4 justify-center">
        {data?.map((game: Game) => (
          <GameCard game={game} key={game.displayName} active={session.game != undefined && session.game.displayName == game.displayName} onClick={() => {
            setSession((prev) => {
              return {
                ...prev,
                game: game,
              };
            });
          }} />
        ))}
      </div>
      <form onSubmit={(e) => {
        onSubmit(e);
      }}>
        <div className={'mt-8 flex flex-col w-[300px] mx-auto justify-center '+ (session.game ? 'opacity-100' : 'opacity-30 cursor-not-allowed')}>
          <div className="flex flex-col gap">
            <label className="text-gray-900 text-[16px] font-bold text-left" >
                            Nickname:
            </label>
            <input maxLength={16} name="nickName" disabled={session.game === undefined} type="text" className="bg-white outline-none rounded-md p-2 text-gray-900 text-[16px] font-semibold disabled:opacity-60 disabled:cursor-not-allowed border-b-4 border-gray-400" placeholder="Enter your nickname"></input>
            {nicknameError && <p className="text-red-500 text-[12px] ml-1 mt-1 font-semibold">{nicknameError}</p>}
          </div>

          <Button variant={'primary'} disabled={session.game === undefined} type="submit" className="mt-4">Start</Button>
        </div>
      </form>
    </>
  );
};
