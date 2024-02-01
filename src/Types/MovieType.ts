export type MovieType = {
 score:number,
 show:{
    genres:string[],
    id:number,
    image:{
        medium:string,
        original:string,
    },
    language:string,
    name:string,
    premiered:string,
    rating:{
        average:number,
    },
    summary:string,
 }
}

export interface MovieState {
    Movies:MovieType[] | [],
}