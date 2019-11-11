import {combineReducers} from 'redux';
import FilmReducers from './FilmReducers'
import FilmDetail from './FilmDetail';



export default combineReducers({

    Films:FilmReducers,
    Detail:FilmDetail
})