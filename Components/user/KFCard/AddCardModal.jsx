import { Form, Input, Select, Row, Col } from 'antd';
import styled from '../../../styles/Transferencia.module.css'
import FormPessoal from '../../FormularioComDados/DadosPessoais/FormPessoal';
import FormEndereco from '../../FormularioComDados/DadosEndereco/FormEndereco';

const  Option  = Select;

export default function AddCardModal() {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  
  return (
    <Form name="validacaoCardModal" size='large' layout="vertical" onFinish={onFinish} requiredMark={false} >
      <FormPessoal />    
      <h3>Endereço</h3>
      <FormEndereco />  
      <Form.Item label="Nome da Mãe Completo:">
        <Input placeholder='nome da mãe completo:' />  
      </Form.Item>
    </Form>
  );
};