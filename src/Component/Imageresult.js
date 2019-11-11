import React, { Component } from 'react'
import {connect} from 'react-redux';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';


class ImageResults extends Component {
 
render(){
 
  const item = this.props.films.map(film => {
     if(film.show.image){
       return(
            <GridListTile key={film.show.id} >
            <img src={film.show.image.original} alt={film.show.title} />
            <GridListTileBar 
              title={film.show.title}
              subtitle={<Link  to ={`/about/${film.show.id}`}>Title: {film.show.name}</Link>}
              actionIcon={
                <IconButton aria-label={`info about ${film.show.name}`} style={{
                  color: 'rgba(255, 255, 255, 0.54)'
                }}>
                  
                </IconButton>
              }
            />
          </GridListTile>
        );
            }
       
    });
  
  
    
       
 
 return(
    <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: "white",
    }}> 
     <GridList cellHeight={180} style={ {width: "40%",
    height: "450"}}>
  <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
    <ListSubheader component="div" >Films</ListSubheader>
  </GridListTile>
  {item}
</GridList>
</div>
        );
    }}



const  mapStateToProps=(state)=>{
    
    return ({
   films:state.Films.Films
    });
    
    }

export default connect(
    mapStateToProps,
    
    ) (ImageResults); 







    
    
{/* <GridList cellHeight={180} className={classes.gridList}>
  <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
    <ListSubheader component="div">Films</ListSubheader>
  </GridListTile>
  {this.props.films.map(film => (
    <GridListTile key={film.show.id}>
      <img src={film.show.image.original} alt={film.show.title} />
      <GridListTileBar
        title={film.show.title}
        subtitle={<span>by: {film.show.language}</span>}
        actionIcon={
          <IconButton aria-label={`info about ${film.show.title}`} className={classes.icon}>
            <InfoIcon />
          </IconButton>
        }
      />
    </GridListTile>
  ))}
</GridList> */}