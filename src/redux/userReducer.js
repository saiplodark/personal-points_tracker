import axios from 'axios'

const initialState={
     user:{},
     loading: false
}

const GET_USER = "GET USER"

export function getUserSession(){
    let user= axios.get('/auth/user_session').then(res =>res.data)
    console.log("from redux: ", user)
    return{
        type:GET_USER,
        payload:user
    }
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_USER + '_PENDING':
            return{
                ...state, 
                loagind:true}
        case GET_USER +'_FULFILLED':
            return{
                ...state, 
                user:action.payload, 
                loading:false}
        case GET_USER +'_REJECTED':
            return{
                ...state,
                loading:true
            }
        default:
            return state
    }
}

