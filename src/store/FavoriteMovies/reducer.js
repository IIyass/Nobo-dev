import { createReducer, createActions } from 'reduxsauce';
import { fromJS } from 'immutable';

const { Types, Creators } = createActions({
    FavoriteMovies: ['data'],
    getFavoriteMovies: ['array'],
    moviesSuccess: ['data'],
    moviesFailed: ['message'],
});

export const moviesTypes = Types;
export const moviesActions = Creators;

/* ------------- Initial State ------------- */
export const initialState = fromJS({
    favoriteData: null,
    isLoading: false,
    serverErrMessages: null,
});

export const favoritemovies = (state, { data }) => state.set('favoriteData', data);

export const moviesSuccess = (state) =>
    state.set('isLoading', true).set('serverErrMessages', null);

export const moviesFailed = (state, { message }) =>
    state.set('isLoading', false).set('serverErrMessages', message);

export const reducer = createReducer(initialState, {
    [Types.FAVORITE_MOVIES]: favoritemovies,
    [Types.MOVIES_SUCCESS]: moviesSuccess,
    [Types.MOVIES_FAILED]: moviesFailed,
    [Types.GET_FAVORITE_MOVIES]: null
});

export default reducer;
