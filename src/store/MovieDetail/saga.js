import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { movieActions, movieTypes } from './reducer';

export function* fetchMovie({ id }) {

    try {
        const response = yield call(axios.get, `http://omdbapi.com/?apikey=f9a3ba6e&i=${id}`);
        yield put(movieActions.movieDetail(response.data));
        yield put(movieActions.movieSuccess());

    } catch (error) {
        yield put(movieActions.movieFailed(error.message));
    }
}
export default [takeLatest(movieTypes.GET_MOVIE, fetchMovie)];
