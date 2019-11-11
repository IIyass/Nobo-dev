import axios from 'axios';
export const FilmsCall = term =>async( dispatch)=> {
axios.get(
    `https://api.tvmaze.com/search/shows?q=${term}`
).then(res => {

    dispatch({
        type: "FilmCall",
        payload:res.data
})
})
}

export const GetFilmDetail = id =>async( dispatch)=> {
    axios.get(
        `http://api.tvmaze.com/shows/${id}`
    ).then(res => {
    
        dispatch({
            type: "Filmdetail",
            payload:res.data    
    })
    })
    }

