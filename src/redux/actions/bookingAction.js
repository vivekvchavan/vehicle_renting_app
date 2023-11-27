import axios from 'axios';
import { message} from 'antd';

export const bookVehicles = (reqObj) => async dispatch=>{
    dispatch({type:'LOADING', payload:true})
    try{
        await axios.post('/api/bookings/bookvehicle');
        message.success('Vehicle Booked Successfully');
        dispatch({type:'LOADING', payload:false});
    }
    catch(error){
        dispatch({type:'LOADING', payload:false});
        message.error('Something Went Wrong Please try again later');
        console.log(error);
    }

}