import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Button from '@material-ui/core/Button';

import { moviesActions } from '../store/Movies/reducer'

const Search = ({ onSubmit }) => {

    const [searchText, setSearchText] = useState('')

    const Onfill = (e) => {
        e.preventDefault();
        onSubmit(searchText)
    }

    return (
        <form onSubmit={Onfill} style={{ marginTop: '10px' }}>
            <TextField
                autoComplete='off'
                name='searchText'
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
                floatingLabelText='Search for Films'
                fullWidth={true}
            />
            <Button type="submit" style={{ margin: "20px 600px " }} variant="contained" color="primary"> Search </Button>
        </form>
    )

}


export function mapDispatchToProps(dispatch) {
    return {
        onSubmit: (term) => dispatch(moviesActions.getMovies(term)),
    };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(Search);
