import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
import { useTranslation } from "react-i18next";
import { useDispatch } from 'react-redux'
import {useHistory} from 'react-router';

import { auth } from '../../../../services/Auth/AuthActions'



const Login = ({ form }) => {

	const { login } = auth;
	const history = useHistory();

	const dispatch = useDispatch()
	const { t } = useTranslation();
	const { getFieldDecorator, validateFields } = form

	const handleSubmit = e => {
		e.preventDefault();
		validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				dispatch(login(values.email, values.password))
			}
		});
	};
	const handleClick = () => {
		history.push('/list')
	  }
	return (
		<Form style={{display:'flex',marginLeft:80,marginRight:80,flexDirection:'column'}} onSubmit={handleSubmit} >
			<Row>
				<Col >
					<Form.Item label={t('mail')}>
						{getFieldDecorator('email', {
							rules: [{ required: true, message: `${t('pleace')}s ${t('mail')}` }],
						})(
							<Input />,
						)}
					</Form.Item>
				</Col>
			</Row>

			<Row>
				<Col >
					<Form.Item label={t('password')}>
						{getFieldDecorator('password', {
							rules: [{ required: true, message: `${t('pleace')}s ${t('password')}` }],
						})(
							<Input
								type="password"
							/>,
						)}
					</Form.Item>
				</Col>
			</Row>

			<Row>
				<Col >
					<Form.Item>
						<a className="login-form-forgot" href="">
							{t('reset_password')}
						</a>
					</Form.Item>
				</Col>
				<Col >
					<Form.Item>
						<Button type="primary" htmlType="submit" className="login-form-button">
							{t('continue')}
						</Button>
					</Form.Item>
				</Col>
			</Row>

			<Row>
				<Col >
					<Form.Item>
						{getFieldDecorator('remember', {
							valuePropName: 'checked',
							initialValue: true,
						})(<Checkbox>{t('remember')}</Checkbox>)}
					</Form.Item>
				</Col>
				<Col >
					<Form.Item>
						<Form.Item>
							<Button type="primary" onClick={handleClick} className="login-form-button">
								{t('register')}
							</Button>
						</Form.Item>
					</Form.Item>
				</Col>
			</Row>
		</Form>
	);
}

export const FormLogin = Form.create({ name: 'FormLogin' })(Login);