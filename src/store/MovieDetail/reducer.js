import { createReducer, createActions } from 'reduxsauce';
import { fromJS } from 'immutable';

const { Types, Creators } = createActions({
    movieDetail: ['data'],
    getMovie: ['id'],
    movieSuccess: ['data'],
    movieFailed: ['message'],
});

export const movieTypes = Types;
export const movieActions = Creators;

/* ------------- Initial State ------------- */
export const initialState = fromJS({
    detail: null,
    isLoading: false,
    serverErrMessages: null,
});

export const movie = (state, { data }) => state.set('detail', data);
export const movieSuccess = (state) =>
    state.set('isLoading', true).set('serverErrMessages', null);

export const movieFailed = (state, { message }) =>
    state.set('isLoading', false).set('serverErrMessages', message);

export const reducer = createReducer(initialState, {
    [Types.MOVIE_DETAIL]: movie,
    [Types.MOVIE_SUCCESS]: movieSuccess,
    [Types.MOVIE_FAILED]: movieFailed,
    [Types.GET_MOVIE]: null
});

export default reducer;
