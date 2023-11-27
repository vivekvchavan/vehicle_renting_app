import React, { useEffect } from 'react';
import { DefaultLayout } from '../components/DefaultLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getAllVehicles } from '../redux/actions/vehicleActions';
import { Button, Row, Col } from 'antd';

export function Home() {
    const { vehicle } = useSelector(state => state.vehicleReducer);
    const { loading } = useSelector(state => state.alertsReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllVehicles())
    }, []);

    return (
        <DefaultLayout>
            <Row justify='center'>
                {vehicle.map(vehicle => {
                    return <Col lg={5} sm={24} xs={24}>
                        <div className="vehicleDisplay p-3 mt-5">
                            <img src={vehicle.image} class="vehicleImg" />
                            <div>
                                <h4>{vehicle.name}</h4>
                                <p>{vehicle.rentPerHour} {vehicle.currencyType} / Hr</p>
                            </div>

                            <div>
                                <Button>Book</Button>
                            </div>
                        </div>

                    </Col>
                })
                }
            </Row>
        </DefaultLayout>
    );
}

