import React, { Component } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {connect} from 'react-redux';
import {GetFilmDetail} from '../action';


const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

class AboutFilms extends Component {

   



componentDidMount(){
   
    this.props.GetFilmDetail(this.props.match.params.id);
}

    render() {
        console.log(this.props.Detail)
             return (
                    <div  style={{ width: "100%", backgroundColor: " #b3b3cc" }} >
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="right"><span>detail</span> </StyledTableCell>
                                    <StyledTableCell align="right"> Info </StyledTableCell>
        
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell align="right"><span>Name</span></StyledTableCell>
                                    <StyledTableCell align="right">{this.props.Detail.name}</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell align="right">type</StyledTableCell>
                                    <StyledTableCell align="right">{this.props.Detail.type}</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell align="right">language</StyledTableCell>
                                    <StyledTableCell align="right">{this.props.Detail.language}</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell align="right">status</StyledTableCell>
                                    <StyledTableCell align="right">{this.props.Detail.status}</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell align="right">runtime</StyledTableCell>
                                    <StyledTableCell align="right">{this.props.Detail.runtime}</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell align="right">officialSite</StyledTableCell>
                                    <StyledTableCell align="right">{this.props.Detail.officialSite}</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell align="right">summary</StyledTableCell>
                                    <StyledTableCell align="right">{this.props.Detail.summary}</StyledTableCell>
                                </StyledTableRow>
        
                            </TableBody>
                        </Table>
                    </ div>
                )}}

const  mapStateToProps=(state)=>{
    
    return ({
   Detail:state.Detail.Detail
    });
    
    }
export default connect(
    mapStateToProps,
    {GetFilmDetail}
    ) (AboutFilms); 