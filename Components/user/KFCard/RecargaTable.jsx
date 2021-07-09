import { Table } from 'antd';
import  styled  from '../../../styles/Transferencia.module.css' 

export default function RecargaTable() {
  const columns = [
    {
      title: 'Data da Solicitação',
      dataIndex: 'dataSolicitacao',
    },
    {
      title: 'Cartão',
      dataIndex: 'cartao',
    },
    {
      title: 'Número',
      dataIndex: 'numero',
    },
    {
      title: 'Valor',
      dataIndex: 'valor',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    }
  ];
  const data = [
    {
      key: '1',
      dataSolicitacao:'22/06/2021  14:05:00',
      cartao:'xxxx xxxx xxxx xxxx',
      numero: '(xx)xxxxx-xxxx',
      valor:'R$ 25,00',
      status:'Pago'
    },
    {
      key: '2',
      dataSolicitacao:'22/06/2021  14:05:00',
      cartao:'xxxx xxxx xxxx xxxx',
      numero: '(xx)xxxxx-xxxx',
      valor:'R$ 25,00',
      status:'Pago'
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

