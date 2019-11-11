
const INIT_STATE ={
    
   Films:[]
}



export default (state=INIT_STATE,action)=>{

    switch(action.type){
         case 'FilmCall': 
         return {
             ...state,
            Films:action.payload
         }
         default:
             return state;

        }};