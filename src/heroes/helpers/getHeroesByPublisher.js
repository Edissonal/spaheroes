import {heroes} from '../data/heroes';

export const getHeroesByPublisher=(publisher) =>{
    const validPublisher =['DC Comics','Marvel Comics'];
    if(!validPublisher.includes(publisher)){
        throw new Error(`${publisher} in not a valid publisher`)
    }

    return heroes.filter(heroe => heroe.publisher === publisher);
}