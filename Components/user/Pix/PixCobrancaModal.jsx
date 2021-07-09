import { Form, InputNumber, Input } from 'antd';
export default function PixCobrancaModal() {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  

  return (
    <Form name="validacaoTransferrencia" size='large' layout="vertical" onFinish={onFinish}>
    <Form.Item label="Descrição:">
          <Input  placeholder />
        </Form.Item>
        <Form.Item label="Valor:">
        <InputNumber min={1} max={1000000000} style={{width: 200}}
          formatter={value => `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} />  
        </Form.Item>
        <Form.Item label="Expira em quantos minutos:">
        <InputNumber min={1} max={1000} defaultValue={15} />
        <h5>Por padrão é dado 15 minutos, mas você pode definir um tempo diferente</h5>
        </Form.Item>
    </Form>
  );
};
