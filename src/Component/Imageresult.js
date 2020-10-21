import React from 'react'
import MoviesSchema from './MoviesSchema';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectLoading, makeSelectServerErr, selectCurrentMovies
} from '../store/Movies/selectors'
const ImageResults = ({ Movies, serverErr, isLoading }) => {

  return (
    <MoviesSchema films={Movies} loading={isLoading} serverErr={serverErr} />
  )
}

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectLoading,
  serverErr: makeSelectServerErr,
  Movies: selectCurrentMovies,

});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(ImageResults);


