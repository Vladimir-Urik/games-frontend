import React from 'react';
import {useRecoilState} from 'recoil';
import {sessionStateAtom} from '../../cache';
import {SelectGameForm} from './forms/select-game-form';
import {SelectNextMoveForm} from './forms/select-next-move-form';
import {JoinGameForm} from './forms/join-game-form';
import {CreateGameForm} from './forms/create-game-form';

export const Home: React.FC = () => {
  const [session] = useRecoilState(sessionStateAtom);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div>
        {session.screen === 'SELECT_GAME' && <SelectGameForm />}

        {(session.screen === 'SELECT_NEXT_MOVE' || session.screen == 'JOIN_GAME' || session.screen == 'CREATE_GAME') && (
          <div className="w-[300px]">
            <div>
              <h1 className="text-center text-gray-900 text-2xl font-semibold">Hello <span className="text-blue-600">{session.nickname}</span>!</h1>
              <p className="text-gray-800 text-md text-center mt-2">You select a {session.game?.displayName}</p>
            </div>
            <div className="mt-6 flex flex-col gap-1">
              <SelectNextMoveForm />
              <JoinGameForm />
              <CreateGameForm />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
