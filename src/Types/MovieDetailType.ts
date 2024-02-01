export type MovieDetailType = {
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
   
   export interface MovieDetailState {
       MovieDetail:MovieDetailType | null,
   }