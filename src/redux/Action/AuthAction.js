import axios from "axios";
import { LOGIN, LOGIN_FAIL, LOGIN_SECCESS, REGISTER, REGISTER_FAIL, REGISTER_SECCESS } from "../ActionTypes/ActionTypes"


export const login = (user) =>async(dispatch) =>{
  
    dispatch({
        type:LOGIN
    });
    try {
        let res = await axios.post('/user/login',user)
        dispatch({
            type:LOGIN_SECCESS,
            payload : res.data
        })
    } catch (error) {
        dispatch({
            type:LOGIN_FAIL,
            payload : error.response.data
        })
    }

}
export const register = (user) =>async(dispatch) =>{
    dispatch({
        type:REGISTER
    });
    try {
        let res = await axios.post('/user/register',user)
        dispatch({
            type:REGISTER_SECCESS,
            payload : res.data
        })
    } catch (error) {
        dispatch({
            type:REGISTER_FAIL,
            payload : error.response.data
        })
    }
}
