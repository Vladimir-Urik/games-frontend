export interface Party {
    id: number,
    name: string,
    code: string,
    gameType: 'SHIPS' | 'CARDS',
    creationDate: number,
    expirationDate: number,
}
