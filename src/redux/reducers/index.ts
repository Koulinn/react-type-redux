// import { initialState } from '../store'

interface initialStateTypes  {
    data:{
        dataFromList: object[]
    }
    // isLoading:boolean
    // isError:boolean
}
export const initialState: initialStateTypes ={
    data:{
        dataFromList: []
    }
    // isLoading: true,
    // isError: false
    // genericReducerr: {}
}

// console.log(initialState)
export const genericReducer = (state = initialState.data, action:any) => {
    switch (action.type) {
        case 'ADD_RANDOM_DATA':
            console.log(state,  'from REDUCER ADD_RANDOM_DATA ')
            return {
                state
                // dataFromList: [...state.dataFromList, ...action.payload ]
            }
        default: {
            return state
        }

    }
}

