import { Table } from 'antd';
import  styled  from '../../../../../styles/Transferencia.module.css';

export default function TransacoesTable() {
  const columns = [
    {
      title: 'Data',
      dataIndex: 'data',
    },
    {
      title: 'Código',
      dataIndex: 'codigo',
    },
    {
      title: 'Descrição',
      dataIndex: 'descricao',
    },    
    {
      title: 'Recorrência',
      dataIndex: 'recorrencia',
    },
    {
      title: 'Total',
      dataIndex: 'total',
    },
    {
      title: 'Crédito',
      dataIndex: 'credito',
    },
    {
      title: 'Parcelas',
      dataIndex: 'parcelas',
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
      data:'22/06/2021  14:05:00',
      codigo:'codigo',
      descricao:'descrição',
      recorrencia:'recorrencia',
      total:'total',
      credito:'credito',
      parcelas:'parcelas',
      status: 'status',
      acao:'...' 
    },
    {
      key: '2',
      data:'22/06/2021  14:05:00',
      codigo:'codigo',
      descricao:'descrição',
      recorrencia:'recorrencia',
      total:'total',
      credito:'credito',
      parcelas:'parcelas',
      status: 'status',
      acao:'...' 
    },
  ];
  
  function onChange(pagination) {
    console.log('params', pagination);
  }
  
  return(
    <Table columns={columns} dataSource={data} 
    pagination={{ pageSize:10 }}
    onChange={onChange} className={`${styled.TableBackground} ${styled.TablePix} ${styled.TransacoesTable}`} />
    )
};
