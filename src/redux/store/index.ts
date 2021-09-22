import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { genericReducer } from "../reducers";
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import { encryptTransform } from "redux-persist-transform-encrypt";
import createCompressor from 'redux-persist-transform-compress'
import { initialState } from '../reducers'

export const groupedReducers = combineReducers({
    data: genericReducer,
})

const compressor = createCompressor()

// interface initialStateTypes  {
//     dataFromRequest:{
//         dataFromList: []
//     }
//     isLoading:boolean
//     isError:boolean
// }
// export const initialState: initialStateTypes ={
//     dataFromRequest:{
//         dataFromList: []
//     },
//     isLoading: true,
//     isError: false
// }

const persistanceKey:any = process.env.REACT_APP_REDUX_PERSISTANCE_KEY

const configPersistance ={
    key: 'root',
    storage,
    transforms:[
        encryptTransform({
            secretKey: persistanceKey
        }),
        compressor
    ]
}

console.log(initialState, 'from store')

export const persistedReducer = persistReducer(configPersistance, groupedReducers)
const store = createStore(
    persistedReducer,
    initialState,
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk))
    )
    
    // applyMiddleware(thunk)
    
export const persistor = persistStore(store)

export const storeExports = {
    persistor: persistor,
    store: store
}

export default storeExports