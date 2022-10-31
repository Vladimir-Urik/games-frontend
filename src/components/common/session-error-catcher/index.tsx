import React, {useEffect} from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {sessionStateAtom} from '../../../cache';
import {useRecoilState} from 'recoil';

const MySwal = withReactContent(Swal);

export const SessionErrorCatcher: React.FC = () => {
  const [session, setSession] = useRecoilState(sessionStateAtom);

  useEffect(() => {
    const error = session.error;

    if (error == undefined) return;
    if (error.length == 0) return;

    MySwal.fire({
      title: 'Error',
      text: error,
      icon: 'error',
      confirmButtonText: 'Ok',
    }).then(() => {
      setSession((prev) => {
        return {
          ...prev,
          error: undefined,
        };
      });
    });
  }, [session.error]);

  return <></>;
};
