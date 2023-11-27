import React from 'react';
import { DownOutlined, SmileOutlined  } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

export function DefaultLayout(props) {

    const user = JSON.parse(localStorage.getItem('user'));


    const items = [
        {
            key: '1',
            label: (
                <a  href="/">
                    Home
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a href="/booking">
                   Bookings
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a href="/profile">
                    Profile
                </a>
            ),
        },
        {
            key: '4',
            label: (
                <a href="/login">
                    Logout
                </a>
            ),
        },
    ];

    return (

        
        <div>
            <div className="header bs1">

                <div className="d-flex justify-content-between">
                    <img height="100px" width="auto" className=""
                        src="https://images.cdn.centreforaviation.com/stories/companies/airlines/etihad/etihad_partners.jpg" />
                    <img height="100px" width="auto" className=""
                        src="https://static.vecteezy.com/system/resources/thumbnails/008/461/390/small/car-rental-logo-on-white-background-luxury-car-illustration-modern-business-concept-car-rental-company-transportation-service-business-vector.jpg" />

                    <Dropdown
                        menu={{
                            items,
                        }}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                {user.username.toUpperCase()}
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </div>
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    );
}
