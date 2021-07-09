import { Form, Input, Select } from 'antd';
import FormFinanceiro from '../../FormularioComDados/DadosFinanceiro/FormFinanceiro';
import FormPessoal from '../../FormularioComDados/DadosPessoais/FormPessoal';
import FormEndereco from '../../FormularioComDados/DadosEndereco/FormEndereco';

const  Option  = Select;

export default function ReqCardModal() {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  
  return(
    <Form name="validacaoCardModal" size='large' layout="vertical" onFinish={onFinish} requiredMark={false}>
    <FormPessoal />    
    <Form.Item label="Nome da Mãe Completo:">
      <Input placeholder='nome da mãe completo:' />  
    </Form.Item>
    <h3>Endereço</h3>
    <FormEndereco />  
    <h2>Dados do Cartão Avulso</h2>
    <FormFinanceiro />
  </Form>
  );
};
