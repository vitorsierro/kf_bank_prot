import  styled  from '../../../styles/Transferencia.module.css';
import { Modal, Button, Form, Input } from 'antd';
import { useState } from 'react';

export default function ModalBancario({visibleModal}) {
  const [visible, setVisible] = useState(visibleModal)
  const handleOk = () => { setVisible(false)}
  const handleCancel = () => {setVisible(false)}
  const onFinish = () => {setVisible(false)}
  return(
    <>
        <Modal
          visible={visible}
          title="Dados Bancários"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              CANCELAR
            </Button>,
            <Button key="submit" type="primary" onClick={handleOk}>
              ENVIAR
            </Button>
          ]}>
          <Form onFinish={onFinish}>
          <Form.Item name="agencia" label="Agência" 
          className={styled.PixBancarioModal}>
            <Input placeholder='Agência (sem dígito):' />
          </Form.Item>
          <Form.Item name="agencia" label="Agência" 
          className={styled.PixBancarioModal}
          >
            <Input placeholder='Agência (sem dígito):' />
          </Form.Item>
          <Form.Item name="conta" label="Conta"
            className={styled.PixBancarioModal}
          >
            <Input placeholder='Conta (sem dígito):' />
          </Form.Item>
          <Form.Item name="descricao" label="Descrição"
          className={styled.PixBancarioModal}
          >
            <Input placeholder='Descrição:' />
          </Form.Item>
          <Form.Item name="valor" label="Valor:"
            className={styled.PixBancarioModal}>
            <Input placeholder='Valor:' />
          </Form.Item>
          </Form>
          <h4 style={{ color:'#545454'}}>Valor da tarifa a ser cobrada por pix, por resgate, quando é mesmo titular: R$ 1,00 pagamento, quando é para terceiro R$ 1,00</h4>
        </Modal>
    </>
  );
};
