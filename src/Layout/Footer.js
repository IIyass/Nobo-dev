import React, { Component } from 'react'

import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container'


export default class Footer extends Component {



    render() {
        return (
            <footer style={{ backgroundColor: "#0086b4", flexShrink: "none" }} >
                <Container maxWidth="lg">
                    <Typography variant="h6" align="center" gutterBottom>
                       Nobo-Life
                </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Movies Footer!
                </Typography>
               
                </Container>
            </footer>
        )
    }
}