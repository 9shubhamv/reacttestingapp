import { useReducer } from "react"

const initialstate={count:0}
function reducer(state,action){
    if (action.type==='increment'){
        return{count:state.count+1}
    }
    else if(action.type==='decrement'){
        if(state.count>0){
        return{count:state.count-1}
        }
        else{
            alert('Value Should not be less than zero')
            return initialstate;
        }
    }
        
    else{
        return initialstate;
    }
}
const App=()=>{

    const[state,dispatch]=useReducer(reducer,initialstate);
    
return(
    <>
        <h1>count:{state.count}</h1>
        <button onClick={()=>{dispatch({type:'increment'})}}>Increment</button>
        <button onClick={()=>{dispatch({type:'decrement'})}}>Decrement</button>
        <button onClick={()=>{dispatch({type:'reset'})}}>Reset</button>
    </>
)
}
export default App;