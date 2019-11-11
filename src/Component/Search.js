import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {FilmsCall} from '../action';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
        }
    }
   

    Onfill = (e) => {
        e.preventDefault();
        this.props.FilmsCall(this.state.searchText)
       
    }
   
    render() {
        return (
            <form onSubmit={this.Onfill}>
                <TextField
                    autoComplete='off'
                    name='searchText'
                    value={this.state.searchText}
                    onChange={e => this.setState({ searchText: e.target.value })}
                    floatingLabelText='Search for Films'
                    fullWidth={true}
                />

                <Button type="submit" style={{margin:"20px 600px "}} variant="contained" color="primary"> Search </Button>


            </form>
        )
    }
}
export default connect(
    null,
    {FilmsCall}
    ) (Search); 