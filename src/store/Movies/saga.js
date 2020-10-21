import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { moviesActions, moviesTypes } from './reducer';

export function* fetchMovies({ term }) {

    try {

        const response = yield call(axios.get, `http://omdbapi.com/?apikey=f9a3ba6e&s=${term}`);

        yield put(moviesActions.moviesInfo(response.data));
        yield put(moviesActions.moviesSuccess());

    } catch (error) {
        yield put(moviesActions.moviesFailed(error.message));
    }
}

export default [takeLatest(moviesTypes.GET_MOVIES, fetchMovies)];
