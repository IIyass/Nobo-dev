

import { createSelector } from 'reselect/lib/index';

const selectMovie = (state) => state.get('movie');

const selectIsLoading = createSelector(selectMovie, (MovieState) =>
    MovieState.get('isLoading'),
);

const selectServerErr = createSelector(selectMovie, (MovieState) =>
    MovieState.get('serverErrMessages'),
);

const selectMovieDetail = createSelector(selectMovie, (MovieState) =>
    MovieState.get('detail'),
);

export { selectIsLoading, selectServerErr, selectMovieDetail };
