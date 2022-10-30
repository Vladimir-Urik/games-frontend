import React from 'react';
import {useRecoilState} from 'recoil';
import {sessionStateAtom} from '../../../cache';
import {Button} from '../../../components';

export const SelectNextMoveForm: React.FC = () => {
  const [session, setSession] = useRecoilState(sessionStateAtom);

  if (session.screen !== 'SELECT_NEXT_MOVE') {
    return <></>;
  }

  return (
    <>
      <Button variant={'primary'} onClick={() => {
        setSession({
          ...session,
          screen: 'JOIN_GAME',
        });
      }}>Join a game</Button>
      <Button variant={'primary'} onClick={() => {
        setSession({
          ...session,
          screen: 'CREATE_GAME',
        });
      }}>Create a game</Button>
      <Button variant={'danger'} className="mt-4" onClick={() => {
        setSession({
          ...session,
          nickname: '',
          screen: 'SELECT_GAME',
          game: undefined,
        });
      }}>
          Exit
      </Button>
    </>
  );
};
