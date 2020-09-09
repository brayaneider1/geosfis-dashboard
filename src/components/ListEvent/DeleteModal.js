import React from "react";
import { Modal, Button } from 'antd';



 const DeleteModal =({ visible, setVisible,id,question })=>{
    return(
        <Modal
        title="Eliminar"
        key={id}
        //okButtonProps={{ style: { display: 'none' ,},title: }}
        cancelButtonProps={{ style: { display: 'none' } }}
        visible={visible}
        onOk={null}
        onCancel={() => setVisible(false)}
        width='40%'
        closable={true}
        >
            <span>{question}¿Estas seguro de que deseas eliminar esta pregunta?</span>
    </Modal>

    )
}


export default DeleteModal