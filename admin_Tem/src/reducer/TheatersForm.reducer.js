import ActionTypes from "../action/ActionTypes";

const initState = {
    TheaterName: '',
    Address: '',
    Des: '',
    DateFound: '',
    isActive:'',
}

const TheaterFormReduce = (State = initState,Action)=>
{
    console.log(Action);
    
    switch (Action.type){
        case  ActionTypes.SIGNIN_INPUT_CHANGED:
            return Object.assign({},State,Action.payload);
        default: 
            return State; 

    }
   
}

export default TheaterFormReduce; 