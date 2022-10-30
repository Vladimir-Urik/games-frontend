import {Game} from '../game';
import {Party} from '../party';

export interface Session {
    nickname: string;
    screen: 'SELECT_GAME' | 'SELECT_NEXT_MOVE' | 'JOIN_GAME' | 'CREATE_GAME' | undefined;
    game: Game | undefined;
    party: Party | undefined;
    loading: boolean;
}
