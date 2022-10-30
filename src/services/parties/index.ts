import {Party} from '../../interfaces';
import {createRequest} from '../index';

export async function createParty(nickname: string, gameType: string): Promise<Party> {
  return createRequest<Party>({
    url: 'parties',
    method: 'POST',
    data: {
      nickname,
      gameType,
    },
  });
}
