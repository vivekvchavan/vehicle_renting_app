import React, { useEffect, useState } from 'react';
import { DefaultLayout } from '../components/DefaultLayout';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getAllVehicles } from '../redux/actions/vehicleActions';
import { Loader } from '../components/Loader';
import { Row, Col, Button, DatePicker } from 'antd';
import moment from 'moment';
import { bookVehicles } from '../redux/actions/bookingAction';

const {RangePicker} = DatePicker;

export function Booking({ match }) {

    const { vehicle } = useSelector(state => state.vehicleReducer);
    const { loading } = useSelector(state => state.alertsReducer);
    const [vehicles, setVehicle] = useState({});
    const [from, setFrom] = useState();
    const [to, setTo] = useState();
    const [totalHrs, setTotalHrs] = useState();
    const [totalAmt, setTotalAmt] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllVehicles())
        if (vehicle.length > 0) {
            setVehicle(vehicle.find(o => o._id == params.vehicleid));
        }
    }, [vehicle]);

    function selectTimeSlots(values){
        setFrom(moment(values[0].format('MMM DD YYYY HH:mm')));
        setTo(moment(values[1].format('MMM DD YYYY HH:mm')));
        setTotalHrs(values[1].diff(values[0], 'hours'));
        setTotalAmt(values[1].diff(values[0])*totalHrs);
    }

    function bookNow(){

        const reqObj ={
            user : JSON.parse(localStorage.getItem('user'))._id,
            vehicle: vehicle._id,
            totalHrs,
            totalAmt,
            bookTimeSlots:{
                from,to
            }
        }

        dispatch(bookVehicles(reqObj))
    }


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
                        <p><b>Rent Per Hour </b> : {vehicles.rentPerHour} {vehicles.currencyType} </p>
                        <p><b>Availability </b>
                        <RangePicker showTime format='MMM DD YYYY HH:MM' onChange={selectTimeSlots}></RangePicker>
                        </p>
                        <p><b>No of Hours </b> : {totalHrs}</p>
                        <p hidden={!totalHrs}><b>Total Cost </b> : {totalHrs*vehicles.rentPerHour} {vehicles.currencyType}</p>
                        <hr/>
                        <Button disabled={!totalHrs}>Book</Button>
                    </div>
            </Row>
          
          
        </DefaultLayout>
    );
}

