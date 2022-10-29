import {Game} from 'interfaces';
import {createRequest} from '../index';

export async function getGames(): Promise<Game[]> {
  return createRequest<Game[]>({
    url: 'games',
    method: 'GET',
  });
}

