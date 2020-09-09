import React, { useState } from 'react';
import {
	Row, Col, Typography, Input, Form, Button,
	Radio, Switch, Slider, Select, message, Upload
} from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router';
import { UploadOutline } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';


const { Title } = Typography;

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};

const EditEvent = () => {
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	const handleSubmit = (values) => {
		setLoading(true);
		axios.post(`http://localhost:5000/users`,
			values
		)
			.then(res => {
				setLoading(false);
				message.success('User Added Successfully!');
				history.push('/list');
			})
			.catch(error => {
				setLoading(false);
				message.error(error);
			})
	}

	const props = {
		name: 'file',
		action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
		headers: {
			authorization: 'authorization-text',
		},
		onChange(info) {
			if (info.file.status !== 'uploading') {
				console.log(info.file, info.fileList);
			}
			if (info.file.status === 'done') {
				message.success(`${info.file.name} El archivo ha sido subido correctamente`);
			} else if (info.file.status === 'error') {
				message.error(`${info.file.name} Error al subir.`);
			}
		},
	};

	return (
		<div>
			<Row gutter={[40, 0]}>
				<Col span={23}>
					<Title style={{ textAlign: 'center' }} level={2}>
						Edita los datos de la pregunta
            </Title>
				</Col>
			</Row>
			<Row gutter={[60, 0]}>
				<Col className="add-event" span={24}>
					<Form  {...layout} onFinish={handleSubmit}>
						<Form.Item name="username" label="Pregunta"
							rules={[
								{
									required: true,
									message: 'Obligatorio',
								}
							]}>
							<TextArea placeholder="Ingrese la pregunta" />
						</Form.Item>
						<Form.Item
							name="image"
							label="Subir imagen"
							rules={[{ required: true, message: 'Obligatorio' }]}>
							<Upload {...props}>
								<Button type="dashed"  >Subir</Button>
							</Upload>
						</Form.Item>
						<Form.Item
							name="image"
							label="Respuesta correcta"
							rules={[{ required: true, message: 'Obligatorio' }]}>
							<Input placeholder="Correcta" />
						</Form.Item>
						<Form.Item
							name="image"
							label="Respuestas incorrectas"
							rules={[{ required: true, message: 'Obligatorio' }]}>
							<Row className="content-incorrects">

							<Input placeholder="#1" />
							<Input placeholder="#2" />
							<Input placeholder="#3" />
							<Input placeholder="#4" />


							</Row>
						</Form.Item>
						<div style={{ textAlign: "right" }}>
							<Button type="primary" loading={loading} htmlType="submit">
								Guardar
            </Button>{' '}
							<Button type="danger" htmlType="button" onClick={() => history.push('/list')}>
								Volver
            </Button>
						</div>
					</Form>
				</Col>
			</Row>
		</div>
	);
}

export default EditEvent;
