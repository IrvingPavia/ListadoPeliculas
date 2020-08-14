import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable({
    providedIn:'root'
})
export class AppService{

    private APP_URL = environment.server;
    constructor(private http: HttpClient){ }
   

  getQuery( query: string, ) {

    const url = `${ environment.server }${ query }?${ environment.Autentication }&${ environment.lenguage }`;
    return this.http.get( url );

  }


  getMovies()  {
    return this.getQuery(`now_playing`);
  }

  getMovieDetails(id:string) {
      return this.getQuery(`${id}`);
  }

}

export interface Movie{
    popularity : string;
    vote_count :  string;
    video :  boolean;
    poster_path : string;
    id : number;
    adult : boolean;
    backdrop_path : string;
    original_language : string;
    original_title : string;
    genre_ids: number[];
    title : string;
    vote_average : string;
    overview: string;
    release_date: string;
  }

export interface MovieDetail{
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: any;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: string;
    poster_path: string;
    production_companies: ProductionCompani[];
    production_countries: ProductionCountri[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: Lenguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: string;
    vote_count: number;
}

export interface Genre{
    id: number;
    name: string;
}

export interface ProductionCompani{
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface ProductionCountri{
    iso_3166_1: string;
    name: string;
}

export interface Lenguage{
    iso_639_1: string;
    name: string;
}
