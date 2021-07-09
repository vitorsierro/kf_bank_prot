import { Table } from 'antd';
import  styled  from '../../../../styles/Transferencia.module.css' 

export default function BoletoDepositoTable() {
  const columns = [
    {
      title: 'Vencimento',
      dataIndex: 'vencimento',
    },
    {
      title: 'Descrição',
      dataIndex: 'descricao',
    },
    {
      title: 'Valor',
      dataIndex: 'valor',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Ação',
      dataIndex: 'acao',
    }
  ];
  const data = [
    {
      key: '1',
      vencimento:'vencimento',
      descricao:'descrição',
      valor:'R$ 20,00',
      status:'status',
      acao:'...' 
    },
    {
      key: '2',
      vencimento:'vencimento',
      descricao:'descrição',
      valor:'R$ 20,00',
      status:'status',
      acao:'...' 
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
