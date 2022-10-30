import {atom} from 'recoil';
import {Session} from '../../../interfaces';

export const sessionStateAtom = atom<Session>({
  key: 'session',
  default: {
    nickname: '',
    screen: 'SELECT_GAME',
    game: undefined,
    party: undefined,
    loading: false,
  },
});
