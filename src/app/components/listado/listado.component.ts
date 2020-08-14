import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService, Movie } from '../../services/app.services';
import { Router } from '@angular/router'
 
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  public arrMovies:Movie[] = [];

  constructor(private _appService: AppService, private _router: Router) { }

  ngOnInit(): void {
    this.load_Movies();
  }
    

  public load_Movies()
  {
    this._appService.getMovies().subscribe((response:any) => {
      Object.keys(response.results).forEach( (pos:string)  =>{
        let objMovie = <Movie>response.results[pos];
        objMovie.backdrop_path = `https://image.tmdb.org/t/p/w300${objMovie.backdrop_path}`;
        objMovie.poster_path = `https://image.tmdb.org/t/p/w300${objMovie.poster_path}`;
        this.arrMovies.push(objMovie);
      });
    }, error => {
      console.log(error);
    });
  }

  public showMovie(movie: Movie){
      let movieId = movie.id;
      this._router.navigate(['/pelicula', movieId]);
  }

}
