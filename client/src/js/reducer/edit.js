import {TOGGLE_FALSE,TOGGLE_TRUE} from "../constant/edit"
const initstate={
    edit:false
}

export const editReducer=(state=initstate,{type})=>{
switch (type) {
    case TOGGLE_TRUE:return{...state,edit:true};
    case TOGGLE_FALSE:return{...state,edit:false};    

    default:return state;
        
}
}