const INIT_STATE ={
    
    Detail:[]
 }
 
 
 
 export default (state=INIT_STATE,action)=>{
 
     switch(action.type){
          case 'Filmdetail': 
          return {
              ...state,
             Detail:action.payload
          }
          default:
              return state;
 
         }};