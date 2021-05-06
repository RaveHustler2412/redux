const initialCounter={
    counter:0,
    counter2:0
}
function reducer(state=initialCounter,action) {
     console.log("type of action is "+action.type)
     console.log("initial state in reducer is "+initialCounter.counter2)

        switch( action.type) {

            case 'INCREASE_COUNTER':
                return {...state,counter:state.counter+1}
            case 'DECREASE_COUNTER' :
                return {...state,counter:state.counter-1}
            case 'INCREASE_COUNTER2':
                return {...state,counter2:state.counter2+2}
            case 'DECREASE_COUNTER2':
                return {...state,counter2:state.counter2-2}     
                }
return state
}





export default reducer 