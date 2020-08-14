import { Component, OnInit } from '@angular/core';
import { AppService, MovieDetail, Movie } from '../../services/app.services';
import { Router, ActivatedRoute } from '@angular/router'



@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit {

  public objMovie:MovieDetail;
  public name_genres: string;
  public movieId: string;
  public cMonths:string[]  = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  constructor(private _appService: AppService, private _router: Router, private _activatedRoute: ActivatedRoute) { 
    this._activatedRoute.params.subscribe(params=>{
        this.movieId = params['movieId'].toString();
    });

  }

  ngOnInit(): void {
    this.load_Movie(this.movieId);
  }

  public load_Movie(movieId:string)
  {
    this._appService.getMovieDetails(movieId)
    .subscribe((response: any) => {
      this.objMovie = response;
      this.objMovie.backdrop_path = `https://image.tmdb.org/t/p/w500/${this.objMovie.backdrop_path}`;
      this.objMovie.poster_path = `https://image.tmdb.org/t/p/w500/${this.objMovie.poster_path}`;
      
      this.name_genres = '';
      let genres = this.objMovie.genres;
      for (let index = 0; index < genres.length; index++) {
        this.name_genres = `${this.name_genres}${(this.name_genres.length > 0)? ', ':''}${genres[index].name.toString()} `;
      }
    },(error: any) => {
      console.log('error', error);
    });
  }

  public navigateBack() {
    this._router.navigate(['/listado']);
  }
  
  public getMovieDate(){
    let dateRelease = this.objMovie.release_date.split('-');
    return `${dateRelease[2]} ${this.cMonths[Number(dateRelease[1])]} ${dateRelease[0]}`;
  }

}

