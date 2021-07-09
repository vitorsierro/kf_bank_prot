import { Modal, Button, Upload, message, Form, Input,Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';

const Option = Select;
const TextArea = Input;

export default function ModalAjuda(visible) {
  const [visibleModal, setVisibleModal] = useState(visible);
  
  const handleOk = () => {setVisibleModal(!visibleModal)};
  const handleCancel = () => {setVisibleModal(!visibleModal)};
  
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
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  
  return(
    <>
      <Modal
          visible={visibleModal}
          title="Ticket para ajuda"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Cancelar
            </Button>,
            <Button key="submit" type="primary" onClick={handleOk}>
              Enviar
            </Button>
          ]}
      >
        <Form>
        <Form.Item label="Assunto:">
          <Input placeholder="Assunto:" />
        </Form.Item>
        <Form.Item label="Departamento:">
          <Select>
            <Option value="">Selecione um departamento</Option>
            <Option value="atendentes">atendentes</Option>
            <Option value="xdcontabil">XD CONTABÍL</Option>
            <Option value="gerente">Gerente</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Prioridade:">
          <Select>
            <Option value="">Selecione uma prioridade</Option>
            <Option value="baixa">Baixa</Option>
            <Option value="normal">Normal</Option>
            <Option value="alta">Alta</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Descrição:">
          <TextArea showCount />
        </Form.Item>
        <Form.Item label="Anexo:">
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Escolher Arquivo</Button>
          </Upload>
          <h5>O arquivo não pode ser maior que 6mb</h5>
        </Form.Item>
        </Form>
        </Modal>
    </>    
  );
};
