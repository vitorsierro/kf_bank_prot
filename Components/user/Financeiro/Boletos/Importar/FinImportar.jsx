import styled from '../../../../../styles/Transferencia.module.css';
import { Row, Col, Form, Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Link from 'next/link'

export default function FinImportar() {
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
    <Row className={styled.Row} style={{justifyContent:'initial'}}>
      <Row gutter={[48, 48]}>
        <Col className={styled.Col} >
          <Form.Item rules={[{ colon: false, required: true }]}>
            <h3 style={{color:'white', marginBottom:'1rem'}}>Importar arquivo (*.csv)</h3>
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
            <h5 style={{color:'white',marginTop:'1rem'}} >
            <Link href="https://www.google.com/">Abrir Modelo</Link>. Documento, Nome Completo, CEP, Endereço, Bairro, Cidade, Estado (UF), Data de Vencimento, Carnê, Instruções 1, Instruções 2, Instruções 3, Valor, E-mail do sacado. Formato CSV separado por ponto e vírgula. Criar carnê, será gerado a quantidade de boleto informada com vencimento recorrente. E-mail do sacado, quando preenchido o sacado recerá notificação com o Boleto.</h5>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[48, 48]}>
        <Col className={styled.Col}>
          <Button key="submit"  onClick={() => onFinish}
            className={styled.Button}>
              IMPORTAR
          </Button>
        </Col>
      </Row>
    </Row>
    </>
  );
};
