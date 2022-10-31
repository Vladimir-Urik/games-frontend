import React from 'react';
import {useRecoilState} from 'recoil';
import {sessionStateAtom} from '../../../cache';
import {Button} from '../../../components';
import {createParty} from '../../../services/parties';

export const SelectNextMoveForm: React.FC = () => {
  const [session, setSession] = useRecoilState(sessionStateAtom);

  if (session.screen !== 'SELECT_NEXT_MOVE') {
    return <></>;
  }

  return (
    <>
      <Button variant={'primary'} onClick={() => {
        setSession((prev) => {
          return {
            ...prev,
            screen: 'JOIN_GAME',
          };
        });
      }}>Join a game</Button>
      <Button variant={'primary'} onClick={async () => {
        setSession((prev) => {
          return {
            ...prev,
            loading: true,
          };
        });
        createParty(session.nickname, session.game.id).then((party) => {
          setSession((prev) => {
            return {
              ...prev,
              screen: 'CREATE_GAME',
              party: party,
            };
          });
        });
      }}>Create a game</Button>
      <Button variant={'danger'} className="mt-4" onClick={() => {
        setSession((prev) => {
          return {
            ...prev,
            nickname: '',
            screen: 'SELECT_GAME',
            game: undefined,
            party: undefined,
          };
        });
      }}>
          Exit
      </Button>
    </>
  );
};
