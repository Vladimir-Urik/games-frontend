import {PartyClose} from '../party-close';

export interface PartyMessage {
    type: 'CLOSE';
    payload: PartyClose;
}
