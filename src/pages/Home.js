import React, { useEffect } from 'react';
import { DefaultLayout } from '../components/DefaultLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getAllVehicles } from '../redux/actions/vehicleActions';


export function Home() {
    const {vehicle} = useSelector(state=>state.vehicleReducer);
    const {loading} = useSelector(state=>state.alertsReducer);
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllVehicles())
    }, []);

    return(
        <DefaultLayout>
           <h1>Home Page</h1>
           <h1>The length is vehicles is {vehicle.length}</h1>
        </DefaultLayout>
    );
}

