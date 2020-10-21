import { call, put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import { moviesActions, moviesTypes } from './reducer';

export function* fetchFavoriteMovies(data) {

    try {

        const response = yield all(data['array'].map((id) => {
            return call(axios.get, `http://omdbapi.com/?apikey=f9a3ba6e&i=${id}`)
        }))

        const response2 = response.map(e => e.data)
        yield put(moviesActions.FavoriteMovies(response2));
        yield put(moviesActions.moviesSuccess());


    }
    catch (error) {
        yield put(moviesActions.moviesFailed(error.message));

    }
}

export default [takeLatest(moviesTypes.GET_FAVORITE_MOVIES, fetchFavoriteMovies)];


