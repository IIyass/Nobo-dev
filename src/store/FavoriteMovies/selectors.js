

import { createSelector } from 'reselect/lib/index';

const selectMovie = (state) => state.get('favoriteMovie');

const selectIsLoading = createSelector(selectMovie, (MovieState) =>
    MovieState.get('isLoading'),
);

const selectServerErr = createSelector(selectMovie, (MovieState) =>
    MovieState.get('serverErrMessages'),
);

const selectFavoriteMovies = createSelector(selectMovie, (MovieState) =>
    MovieState.get('favoriteData'),
);

export { selectIsLoading, selectServerErr, selectFavoriteMovies };
