import React from 'react';
import {useRecoilState} from 'recoil';
import {sessionStateAtom} from '../../../cache';
import {Button} from '../../../components';
import {getParty} from '../../../services';

export const JoinGameForm: React.FC = () => {
  const [session, setSession] = useRecoilState(sessionStateAtom);
  const [partyCodeError, setPartyCodeError] = React.useState<string | undefined>(undefined);

  if (session.screen !== 'JOIN_GAME') {
    return <></>;
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('submit');
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const partyCode = formData.get('partyCode') as string;

    if (partyCode.length != 8) {
      setPartyCodeError('Party code must be 8 characters long');
      return;
    }

    if (!/^\d+$/.test(partyCode)) {
      setPartyCodeError('Party code must contain only digits');
      return;
    }
    setPartyCodeError(undefined);

    setSession((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });

    getParty(partyCode).then((party) => {
      setSession((prev) => {
        return {
          ...prev,
          loading: false,
          // TODO
        };
      });
    }).catch((err) => {
      setSession((prev) => {
        return {
          ...prev,
          loading: false,
          error: 'Party not found',
          // TODO
        };
      });
    });
  };

  return (
    <>
      <form onSubmit={(e) => {
        onSubmit(e);
      }} className={'flex flex-col'}>
        <div className="flex flex-col gap">
          <label className="text-gray-900 text-[16px] font-bold text-left" >
              Party Code:
          </label>
          <input maxLength={8} name="partyCode" disabled={session.game === undefined} type="text" className="bg-white outline-none rounded-md p-2 text-gray-900 text-[16px] font-semibold disabled:opacity-60 disabled:cursor-not-allowed border-b-4 border-gray-400" placeholder="Enter party code"></input>
          {partyCodeError && <p className="text-red-500 text-[12px] ml-1 mt-1 font-semibold">{partyCodeError}</p>}
        </div>

        <Button type={'submit'} variant={'primary'} className={'mt-4'}>Join</Button>
      </form>
      <Button variant={'info'} className="mt-8" onClick={() => {
        setSession((prev) => {
          return {
            ...prev,
            screen: 'SELECT_NEXT_MOVE',
          };
        });
      }}>
          Back
      </Button>
    </>
  );
};
