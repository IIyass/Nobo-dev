import { createSelector } from 'reselect/lib/index';

const selectMovies = (state) => state.get('movies');

const makeSelectLoading = createSelector(selectMovies, (MoviesState) =>
    MoviesState.get('isLoading'),
);

const makeSelectServerErr = createSelector(selectMovies, (MoviesState) =>
    MoviesState.get('serverErrMessages'),
);

const selectCurrentMovies = createSelector(selectMovies, (MoviesState) =>
    MoviesState.get('data'),
);

export { makeSelectLoading, makeSelectServerErr, selectCurrentMovies };
