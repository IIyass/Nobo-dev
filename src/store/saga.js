import moviesSaga from './Movies/saga';
import movieSaga from './MovieDetail/saga'
import favoriteMovieSaga from './FavoriteMovies/saga'


export default [
    ...moviesSaga,
    ...movieSaga,
    ...favoriteMovieSaga

];
