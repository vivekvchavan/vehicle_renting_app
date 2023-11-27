import React from 'react';
import { DefaultLayout } from '../components/DefaultLayout';
import {Link} from 'react-router-dom';
import {Row,Col,Form,Input} from 'antd';
import { useDispatch } from 'react-redux';
import { userRegister } from '../redux/actions/userActions';

export function CreateAccount(){


    const dispatch = useDispatch();

    function onFinish(values){
        dispatch(userRegister(values));
    }

    return(
        <div class='loginForm p-5'>
            <Row className="pd-5">
            <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/112015/untitled-1_171.png?itok=4Z88ZeF3"/> 
            </Row>
            <Row gutter={16} className='d-flex align-items-center'>
                <Col lg={9}>
                </Col>
                <Col lg={6} className='text-left p-5'>
                    <h1>Create an Account</h1>
                    <hr/>
                    <Form layout='vertical' onFinish={onFinish}>
                        <Form.Item name='username' label='Username'rules={[{ required: true, message: 'Please input your username!' }]}>
                           <Input/>
                        </Form.Item>
                        <Form.Item name='password' label='Password'rules={[{ required: true, message: 'Please enter a valid password!' }]}>
                        <Input.Password />
                        </Form.Item>
                        <Form.Item name='confirmPassword' label='Confirm Password'rules={[{ required: true, message: 'Password Mismatch' }]}>
                        <Input.Password />
                        </Form.Item>

                        <button>Register</button>
                        <hr/>
                        <Link to='/login'> Login with Existing Account</Link>
                    </Form>
                </Col>
            </Row>
         
        </div>
    );
}
