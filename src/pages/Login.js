import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,Form,Input, Button} from 'antd';

export function Login() {
    return(
        <div class='loginForm p-5'>
            <Row className="pd-5"></Row>
            <Row gutter={16} className='d-flex align-items-center'>
                <Col lg={9}></Col>
                <Col lg={6} className='text-left p-5'>
                    <h1>Login</h1>
                    <hr/>
                    <Form layout='vertical'>
                        <Form.Item name='username' label='Username'rules={[{ required: true, message: 'Please input your username!' }]}>
                           <Input/>
                        </Form.Item>
                        <Form.Item name='password' type='password' label='Password'rules={[{ required: true, message: 'Please enter a valid password!' }]}>
                        <Input.Password />
                        </Form.Item>

                        <button>Login</button>
                        <hr/>
                        <Link to='/signup'> Create an Account</Link>
                    </Form>
                </Col>
            </Row>
         
        </div>
    );
}
