import {GameCard} from 'components/game-card';
import {Game} from 'interfaces';
import React, {FormEvent} from 'react';
import {getGames} from 'services';
import useSWR from 'swr';
import {Button} from '../../components';

export const Home: React.FC = () => {
  const [state, setState] = React.useState<'SELECT_GAME' | 'SELECT_NEXT_MOVE' | 'JOIN_GAME' | 'CREATE_GAME'>('SELECT_GAME');

  const [activeGame, setActiveGame] = React.useState<Game | undefined>(undefined);
  const [nicknameError, setNicknameError] = React.useState<string | undefined>(undefined);
  const [nickName, setNickName] = React.useState<string>('');

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
    setNickName(nick);

    setState('SELECT_NEXT_MOVE');
  };

  const {data} = useSWR<Game[]>('games', getGames);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div>
        {state === 'SELECT_GAME' && (
          <>
            <div className="flex gap-4 justify-center">
              {data?.map((game: Game) => (
                <GameCard game={game} key={game.displayName} active={activeGame != undefined && activeGame.displayName == game.displayName} onClick={() => {
                  setActiveGame(game);
                }} />
              ))}
            </div>
            <form onSubmit={(e) => {
              onSubmit(e);
            }}>
              <div className={'mt-8 flex flex-col w-[300px] mx-auto justify-center '+ (activeGame ? 'opacity-100' : 'opacity-30 cursor-not-allowed')}>
                <div className="flex flex-col gap">
                  <label className="text-gray-900 text-[16px] font-bold text-left" >
                      Nickname:
                  </label>
                  <input maxLength={16} name="nickName" disabled={activeGame === undefined} type="text" className="bg-white outline-none rounded-md p-2 text-gray-900 text-[16px] font-semibold disabled:opacity-60 disabled:cursor-not-allowed border-b-4 border-gray-400" placeholder="Enter your nickname"></input>
                  {nicknameError && <p className="text-red-500 text-[12px] ml-1 mt-1 font-semibold">{nicknameError}</p>}
                </div>

                <Button variant={'primary'} disabled={activeGame === undefined} type="submit" className="mt-4">Start</Button>
              </div>
            </form>
          </>
        )}

        {(state === 'SELECT_NEXT_MOVE' || state == 'JOIN_GAME' || state == 'CREATE_GAME') && (
          <div className="w-[300px]">
            <div>
              <h1 className="text-center text-gray-900 text-2xl font-semibold">Hello <span className="text-blue-600">{nickName}</span>!</h1>
              <p className="text-gray-800 text-md text-center mt-2">You select a {activeGame?.displayName}</p>
            </div>
            <div className="mt-6 flex flex-col gap-1">
              {state === 'SELECT_NEXT_MOVE' && (
                <>
                  <Button variant={'primary'} onClick={() => {
                    setState('JOIN_GAME');
                  }}>Join a game</Button>
                  <Button variant={'primary'} onClick={() => {
                    setState('CREATE_GAME');
                  }}>Create a game</Button>
                  <Button variant={'danger'} className="mt-4" onClick={() => {
                    setState('SELECT_GAME');
                    setNickName('');
                    setActiveGame(undefined);
                  }}>
                    Exit
                  </Button>
                </>
              )}

              {state === 'JOIN_GAME' && (
                <>
                  <div className="flex flex-col gap">
                    <label className="text-gray-900 text-[16px] font-bold text-left" >
                      Game ID:
                    </label>
                    <input maxLength={8} name="gameId" disabled={activeGame === undefined} type="text" className="bg-white outline-none rounded-md p-2 text-gray-900 text-[16px] font-semibold disabled:opacity-60 disabled:cursor-not-allowed border-b-4 border-gray-400" placeholder="Enter your nickname"></input>
                  </div>

                  <Button variant={'primary'}>Join</Button>
                  <Button variant={'info'} className="mt-4" onClick={() => {
                    setState('SELECT_NEXT_MOVE');
                  }}>
                        Back
                  </Button>
                </>
              )}

              {state === 'CREATE_GAME' && (
                <>
                  <div className="flex flex-col gap-1 bg-white p-2 rounded">
                    <p className="text-red-600 text-[48px] text-center font-mono" >
                          05462525
                    </p>

                    <p className="text-gray-900 text-[12px] font-bold text-center" >
                            Share this ID with your friends
                    </p>
                  </div>

                  <Button variant={'danger'} className="mt-8" onClick={() => {
                    setState('SELECT_NEXT_MOVE');
                  }}>
                        Cancel
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
