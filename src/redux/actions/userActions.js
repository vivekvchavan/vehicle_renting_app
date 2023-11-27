import axios from 'axios';
import {Message, message} from 'antd';

export const userLogin = (reqObj) => async dispatch=>{
    dispatch({type:'LOADING', payload:true})
    try{
        const response  = await axios.post('/api/users/login',reqObj);
        localStorage.setItem('user',JSON.stringify(response.data));
        message.success('Logged in Successfull');
        dispatch({type:'LOADING', payload:false});
    }
    catch(error){
        dispatch({type:'LOADING', payload:false});
        message.error('Error Something went wrong');
        console.log(error);
    }

}



export const userRegister = (reqObj) => async dispatch=>{
    dispatch({type:'LOADING', payload:true})
    try{
        const response  = await axios.post('/api/users/register',reqObj);
        localStorage.setItem('user',JSON.stringify(response.data));
        message.success('User Registered');
        dispatch({type:'LOADING', payload:false});
    }
    catch(error){
        dispatch({type:'LOADING', payload:false});
        message.error('Error Something went wrong');
        console.log(error);
    }

}