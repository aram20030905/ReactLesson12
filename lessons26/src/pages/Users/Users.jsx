import { useEffect, useReducer, useState } from "react"
import "./user.css"
const initialState={
    users:[]
}

function reducer(state,action){
    switch(action.type){
        case 'SET_USERS':
            return{state,users:action.payload}
    
        case 'DELEATE_ITEM':
            return {...state, users:state.users.filter(user=>user.id!==action.payload)}
        default:
            return state;
}
}
function Users(){
    let [state,dispatch]=useReducer(reducer,initialState)
    
    useEffect(()=>{
const  get=async()=>{
const respone=await fetch('https://dummyjson.com/users')
const data=await respone.json()

dispatch({ type: 'SET_USERS', payload: data.users });

}
get()
    },[])
    const deleteUser = (id) => {
        dispatch({ type: 'DELEATE_ITEM', payload: id });
    };




    return(
        <div className="User">
           {state.users.map((el)=>{
            return(
            <div key={el.id} className="UserData">
              
                <p>{el.id}</p>
                <img src={el.image}/>
                <p>{el.firstName}</p>
                <p>{el.lastName}</p>
                <p>{el.birthDate}</p>
                <p>{el.gender}</p>
                <button onClick={()=>deleteUser(el.id)}><i class="fa-solid fa-trash"></i></button>
                <button><i class="fa-solid fa-pen-to-square"></i></button>
             

            </div>
            )
           })}
        
        </div>
    )
}
export default Users