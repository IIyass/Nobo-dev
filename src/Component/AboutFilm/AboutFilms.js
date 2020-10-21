import React, { useEffect, useState } from 'react'
import { StyledTableCell, StyledTableRow } from './style'
import { compose } from 'redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { movieActions } from '../../store/MovieDetail/reducer'
import {
    selectIsLoading,
    selectServerErr,
    selectMovieDetail
} from '../../store/MovieDetail/selectors'
import {
    faStar
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



const AboutFilms = ({ isLoading, onSubmit, serverErr, movieDetail, ...props }) => {


    const [favorite, setFavorite] = useState(localStorage.getItem('favorites') || '')
    const [starColor, setstarColor] = useState(favorite.includes(props.match.params.id))

    useEffect(() => {
        onSubmit(props.match.params.id);

    }, [])
    const AddtoFavorite = (id) => {
        localStorage.setItem("favorites", [id, favorite]);
        setstarColor(!starColor)
    }

    const RemovefromFavorite = (id) => {
        const FavoriteMovie = favorite.split(",");
        const filterdFavorite = FavoriteMovie.filter((element) => element !== "" && element != id)
        localStorage.setItem("favorites", [filterdFavorite]);
        setstarColor(!starColor)
    }

    return (
        isLoading ? <div style={{ width: "100%", backgroundColor: " #b3b3cc", textAlign: "center", display: 'flex', flexDirection: 'column' }} >
            <img src={movieDetail.Poster} />
            <Table >
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="right"><span>Add to favorite</span> </StyledTableCell>
                        <StyledTableCell align="right"> {starColor ? <div style={{ color: "gold" }}>  <FontAwesomeIcon onClick={(e) => RemovefromFavorite(movieDetail.imdbID)} style={{ cursor: 'pointer' }} icon={faStar} /></div> : <FontAwesomeIcon onClick={(e) => AddtoFavorite(movieDetail.imdbID)} style={{ cursor: 'pointer' }} icon={faStar} />}  </StyledTableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    <StyledTableRow>
                        <StyledTableCell align="right"><span>Name</span></StyledTableCell>
                        <StyledTableCell align="right">{movieDetail.Title}</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell align="right">type</StyledTableCell>
                        <StyledTableCell align="right">{movieDetail.Genre}</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell align="right">language</StyledTableCell>
                        <StyledTableCell align="right">{movieDetail.Language}</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell align="right">Year</StyledTableCell>
                        <StyledTableCell align="right">{movieDetail.Year}</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell align="right">Runtime</StyledTableCell>
                        <StyledTableCell align="right">{movieDetail.Runtime}</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell align="right">officialSite</StyledTableCell>
                        <StyledTableCell align="right">{movieDetail.officialSite}</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell align="right">Writer</StyledTableCell>
                        <StyledTableCell align="right">{movieDetail.Writer}</StyledTableCell>
                    </StyledTableRow>

                </TableBody>
            </Table>
        </ div> : <h1 style={{ textAlign: "center" }}>Loading ...</h1>
    )

}

export function mapDispatchToProps(dispatch) {
    return {
        onSubmit: (id) => dispatch(movieActions.getMovie(id)),
    };
}

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsLoading,
    serverErr: selectServerErr,
    movieDetail: selectMovieDetail
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(AboutFilms);
