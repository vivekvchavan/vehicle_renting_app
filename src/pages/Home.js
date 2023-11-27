import React from 'react';
import { DefaultLayout } from '../components/DefaultLayout';
import { useSelector } from 'react-redux';

export function Home() {
    const {vehicle} = useSelector(state=>state.vehicleReducer);
    return(
        <DefaultLayout>
           <h1>Home Page</h1>
           <h1>The length is vehicles is {vehicle.length}</h1>
        </DefaultLayout>
    );
}

