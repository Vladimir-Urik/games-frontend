import React from 'react';
import {useRecoilState} from 'recoil';
import {sessionStateAtom} from '../../../cache';
import {Button} from '../../../components';

export const CreateGameForm: React.FC = () => {
  const [session, setSession] = useRecoilState(sessionStateAtom);

  if (session.screen !== 'CREATE_GAME') {
    return <></>;
  }

  return (
    <>
      <div className="flex flex-col gap-1 bg-white p-2 rounded">
        <p className="text-red-600 text-[48px] text-center font-mono" >
          {session.party.code}
        </p>

        <p className="text-gray-900 text-[12px] font-bold text-center" >
            Share this ID with your friends
        </p>
      </div>

      <Button variant={'danger'} className="mt-8" onClick={() => {
        setSession({
          ...session,
          screen: 'SELECT_NEXT_MOVE',
          party: undefined,
        });
      }}>
          Cancel
      </Button>
    </>
  );
};
