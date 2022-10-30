import {Game} from '../game';

export interface Session {
    nickname: string;
    screen: 'SELECT_GAME' | 'SELECT_NEXT_MOVE' | 'JOIN_GAME' | 'CREATE_GAME' | undefined;
    game: Game | undefined;
}
