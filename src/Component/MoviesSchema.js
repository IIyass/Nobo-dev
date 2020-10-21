import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

const MoviesSchema = ({ films, favoritePart }) => {


    const item = films && films.map(film => {
        if (film.Poster) {
            return (
                <GridListTile key={film.imdbID} >
                    <img src={film.Poster} alt={film.Title} />
                    <GridListTileBar
                        title={film.Title}
                        subtitle={<Link to={`/about/${film.imdbID}`}>Title: {film.Title}</Link>}
                        actionIcon={
                            <IconButton aria-label={`info about ${film.Title}`} style={{
                                color: 'rgba(255, 255, 255, 0.54)'
                            }}>

                            </IconButton>
                        }
                    />
                </GridListTile>
            );
        }

    });

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'auto',
            backgroundColor: "white",
        }}>
            <GridList cellHeight={180} style={{
                width: "40%",
                height: "450",

            }}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto', overflow: 'auto' }}>
                    <ListSubheader component="div"  >{favoritePart ? <h1 style={{ textAlign: "center" }}>My favorite Movies</h1> : <h1 style={{ textAlign: "center" }}>Movies</h1>}</ListSubheader>
                </GridListTile>
                {item}
            </GridList>
        </div>
    );
}

export default MoviesSchema