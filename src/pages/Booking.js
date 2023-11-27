import React, { useEffect, useState } from 'react';
import { DefaultLayout } from '../components/DefaultLayout';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getAllVehicles } from '../redux/actions/vehicleActions';
import { Loader } from '../components/Loader';
import { Row, Col, Button } from 'antd';

export function Booking({ match }) {

    const { vehicle } = useSelector(state => state.vehicleReducer);
    const { loading } = useSelector(state => state.alertsReducer);
    const [vehicles, setVehicle] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllVehicles())
        if (vehicle.length > 0) {
            setVehicle(vehicle.find(o => o._id == params.vehicleid));
        }
    }, [vehicle]);


    const params = useParams();
    return (
        <DefaultLayout>
            <h2>Confirm Booking Vehicle</h2>
            <h4>{vehicles.name}</h4>
            <Row justify={'center'}>
                
                <Col lg={5} sm={24} xs={24}>
                
                    <img src={vehicles.image} className='carimagebooking bs1' />
                </Col>
                <Col lg={8} sm={24} xs={24}>
                    
                </Col>
                    <div>
                        <h1>{vehicles.name} </h1>
                        <p><b>Vehicle Type </b> : {vehicles.type} </p>
                        <p><b>Fuel Type </b> : {vehicles.fuelType} </p>
                        <p><b>Capacity </b> : {vehicles.capacity} Seater</p>
                        <p><b>Rent Per Day </b> : {vehicles.rentPerHour} {vehicles.currencyType} </p>
                        <Button>Book</Button>
                    </div>
            </Row>
          
          
        </DefaultLayout>
    );
}

