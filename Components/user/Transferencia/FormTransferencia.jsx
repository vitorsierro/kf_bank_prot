import { Form, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Link from 'next/link';

const normFile = e => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};
const modelo = "https://app.kfbank2.com/upload/leiaute_transfer_between_user.csv";

const FormTransferencia = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form name="validacaoTransferrencia" onFinish={onFinish}>
      <Form.Item
        name="enviar"
        label="Enviar"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload name="logo" action="/enviaTransferenciaEmMassa" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
        <p style={{color:'#808080', marginTop:'10px'}}><Link href={modelo}>Abrir Modelo</Link>. E-mail (ou Carteira Pública), Documento, Nome, Descrição, Valor (Ex.: 10.23). Formato CSV separado por ponto e vírgula.</p>
      </Form.Item>
    </Form>
  );
}

export default FormTransferencia;