import React, {useEffect, useState} from 'react';
import {Table, Row, Col, Button, Typography} from 'antd';
import {useHistory} from 'react-router';
import DeleteModal from './DeleteModal'
const {Title} = Typography;


const List = () => {
  const history = useHistory();
  const [allData, setAllData] = useState([]);
  const [visible,setVisble]=useState(false)

  useEffect(() => {
  });

  const columns = [
    {
      title: 'Pregunta',
      dataIndex: 'question',
    },
    {
      title: 'Imagen',
      dataIndex: 'image'
    },
    {
      title: 'Respuesta',
      dataIndex: 'resp'
    },
    {
      title: 'Incorrectas',
      dataIndex: 'incorrect'
    },
    {
      title: 'Editar',
      dataIndex: 'edit',
      render:()=><Button onClick={handleClickEdit} type="ghost">Editar</Button>
    },
    {
      title: 'Eliminar',  
      dataIndex: 'delete',
      render:()=><Button id="question" onClick={handleClickDelete}  type="danger">Eliminar</Button>
    },
  ];

  const data = [{
    question:'Pregunta 1',
    image:'src',
    resp:'verdadera',
    incorrect:['1 ',' 2',' 3']
    
  },{
    question:'Pregunta 2',
    image:'src',
    resp:'verdadera',
    incorrect:['1 ',' 2',' 3']
    
  }];

  const handleClick = () => {
    history.push('/form')
  }
  const handleClickEdit = () => {
    history.push('/edit')
  }

  const handleClickDelete = () => {
    setVisble(true)
  }

  return (
    <div>
        <Row gutter={[40, 0]}>
          <Col span={24}>
            <Title level={2}>
            Preguntas
            </Title>
            </Col>
          <Col span={14}>
          <Button type="primary" onClick={handleClick} block>Agregar preguntas</Button>
          </Col>
        </Row>
        <Row gutter={[40, 0]}>
        <Col span={24}>
        <Table columns={columns} dataSource={data} />
        </Col>
        </Row>

        {data.map(item=>(
        <DeleteModal id={item.question} question={item.question} visible={visible} setVisible={()=>setVisble()} />
        ))}
    </div>
  );
}

export default List;