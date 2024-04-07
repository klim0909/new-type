import Buyable from './Buyable';
export default class Move implements Buyable {
    readonly year: number;
    readonly country: string;
    readonly slogan: string;
    readonly genre: string;
    readonly time: any;

    constructor(year: number, country: string, slogan: string, genre: string, time: any){
        this.year = year;
        this.country = country;
        this.slogan = slogan;
        this.genre = genre;
        this.time = time;
    }
}