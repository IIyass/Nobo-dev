
import { combineReducers } from 'redux-immutable';
import moviesReducer from './store/Movies/reducer'
import movieReducer from './store/MovieDetail/reducer'
import favoriteMovieReducer from './store/FavoriteMovies/reducer'
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
    const rootReducer = combineReducers({
        movies: moviesReducer,
        movie: movieReducer,
        favoriteMovie: favoriteMovieReducer,
        ...injectedReducers,
    });

    // Wrap the root reducer and return a new root reducer with router state
    return rootReducer;
}
