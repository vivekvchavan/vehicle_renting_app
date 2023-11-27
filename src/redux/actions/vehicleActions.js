import axios from 'axios';

export const getAllVehicles = () => async dispatch=>{
    dispatch({type:'LOADING', payload:true})
    try{
        const response  = await axios.get('/api/vehicles/getAllVehicles');
        dispatch({type:'GET_ALL_VEHICLES', payload:response.data});
        dispatch({type:'LOADING', payload:false});
    }
    catch(error){
        dispatch({type:'LOADING', payload:false});
        console.log(error);
    }

}