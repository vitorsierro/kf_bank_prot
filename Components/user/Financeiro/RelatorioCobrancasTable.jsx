import { Table } from 'antd';
import  styled  from '../../../styles/Transferencia.module.css' 

export default function RelatorioCobrancasTable() {
  const columns = [
    {
      title: 'Data da Cobrança',
      dataIndex: 'dataCobranca',
    },
    {
      title: 'Descrição',
      dataIndex: 'descricao',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Opções de Pagamento',
      dataIndex: 'opcoesPagamento',
    },
    {
      title: 'Valor Cobrado',
      dataIndex: 'valorCobrado',
    },
    {
      title: 'Valor Recebido',
      dataIndex: 'valorRecebido',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Data do Pagamento',
      dataIndex: 'dataPagamento',
    }
  ];
  const data = [
    {
      key: '1',
      dataCobranca:'22/06/2021  14:05:00',
      descricao:'Pagar luz',
      email:'contato@kfbank.com.br',
      opcoesPagamento:'pix',
      valorCobrado: 'R$ 150,50',
      valorRecebido: 'R$ 200,00',
      status:'Pendente',
      dataPagamento:'25/07/2021' 
    },
    {
      key: '2',
      dataCobranca:'22/06/2021  14:05:00',
      descricao:'Pagar luz',
      email:'contato@kfbank.com.br',
      opcoesPagamento:'pix',
      valorCobrado: 'R$ 150,50',
      valorRecebido: 'R$ 200,00',
      status:'Pendente',
      dataPagamento:'25/07/2021' 
    },
  ];
  
  function onChange(pagination) {
    console.log('params', pagination);
  }
  
  return(
    <Table columns={columns} dataSource={data} 
    pagination={{ pageSize:10 }}
    onChange={onChange} className={`${styled.TableBackground} ${styled.TablePix}`} />
    )
};
