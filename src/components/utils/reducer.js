export default function reducer(state, action){
    switch(action.type){
        case 'handleClick': {
            return{
                ...state, 
                controller: action.data
            }
        }
        default: return state
    }
}