import React, { useEffect, useState } from 'react'
import MoviesSchema from './MoviesSchema';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
    selectIsLoading, selectServerErr, selectFavoriteMovies
} from '../store/FavoriteMovies/selectors'

import { moviesActions } from '../store/FavoriteMovies/reducer'
const FavoriteMovies = ({ FavoriteMovies, serverErr, isLoading, onSubmit }) => {

    const [data, setData] = useState(localStorage.getItem('favorites') === null ? [] : localStorage.getItem('favorites').split(","))

    useEffect(() => {
        onSubmit(data)
    }, [])

    return (
        isLoading ? <MoviesSchema favoritePart films={FavoriteMovies} loading={isLoading} serverErr={serverErr} /> : <h1 style={{ textAlign: "center" }}>Loading ...</h1>
    )
}

export function mapDispatchToProps(dispatch) {
    return {
        onSubmit: (data) => dispatch(moviesActions.getFavoriteMovies(data)),
    };
}

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsLoading,
    serverErr: selectServerErr,
    FavoriteMovies: selectFavoriteMovies,

});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(FavoriteMovies);


