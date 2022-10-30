import React from 'react';
import {useRecoilState} from 'recoil';
import {sessionStateAtom} from '../../../cache';
import {Button} from '../../../components';

export const JoinGameForm: React.FC = () => {
  const [session, setSession] = useRecoilState(sessionStateAtom);

  if (session.screen !== 'JOIN_GAME') {
    return <></>;
  }

  return (
    <>
      <div className="flex flex-col gap">
        <label className="text-gray-900 text-[16px] font-bold text-left" >
                  Game ID:
        </label>
        <input maxLength={8} name="gameId" disabled={session.game === undefined} type="text" className="bg-white outline-none rounded-md p-2 text-gray-900 text-[16px] font-semibold disabled:opacity-60 disabled:cursor-not-allowed border-b-4 border-gray-400" placeholder="Enter your nickname"></input>
      </div>

      <Button variant={'primary'}>Join</Button>
      <Button variant={'info'} className="mt-4" onClick={() => {
        setSession({
          ...session,
          screen: 'SELECT_NEXT_MOVE',
        });
      }}>
          Back
      </Button>
    </>
  );
};
