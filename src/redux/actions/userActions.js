import axios from 'axios';
import { message} from 'antd';

export const userLogin = (reqObj) => async dispatch=>{
    dispatch({type:'LOADING', payload:true})
    try{
        const response  = await axios.post('/api/users/login',reqObj);
        localStorage.setItem('user',JSON.stringify(response.data));
        message.success('Logged in Successfull');
        setTimeout(()=>{
            window.location.href='/';
        },500);
        dispatch({type:'LOADING', payload:false});
    }
    catch(error){
        dispatch({type:'LOADING', payload:false});
        message.error('Invalid Username or Password');
    }

}



export const userRegister = (reqObj) => async dispatch=>{
    dispatch({type:'LOADING', payload:true})
    try{
         await axios.post('/api/users/register',reqObj);
        message.success('User Registered');
        setTimeout(()=>{
            window.location.href='/login';
        },500);
        dispatch({type:'LOADING', payload:false});
    }
    catch(error){
        dispatch({type:'LOADING', payload:false});
        message.error('Error Something went wrong');
    }

}