import { createReducer, createActions } from 'reduxsauce';
import { fromJS } from 'immutable';

const { Types, Creators } = createActions({
    moviesInfo: ['data'],
    getMovies: ['term'],
    moviesSuccess: ['data'],
    moviesFailed: ['message'],
});

export const moviesTypes = Types;
export const moviesActions = Creators;

/* ------------- Initial State ------------- */
export const initialState = fromJS({
    data: null,
    isLoading: false,
    serverErrMessages: null,
});

export const movies = (state, { data }) => state.set('data', data.Search);

export const moviesSuccess = (state) =>
    state.set('isLoading', true).set('serverErrMessages', null);

export const moviesFailed = (state, { message }) =>
    state.set('isLoading', false).set('serverErrMessages', message);

export const reducer = createReducer(initialState, {
    [Types.MOVIES_INFO]: movies,
    [Types.MOVIES_SUCCESS]: moviesSuccess,
    [Types.MOVIES_FAILED]: moviesFailed,
    [Types.GET_MOVIES]: null
});

export default reducer;
