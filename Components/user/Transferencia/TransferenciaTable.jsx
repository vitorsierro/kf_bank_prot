import { Table } from 'antd';
import  styled  from '../../../styles/Transferencia.module.css'; 

export default function TransferenciaTable() {
  const columns = [
    {
      title: 'De',
      dataIndex: 'de',
    },
    {
      title: 'Para',
      dataIndex: 'para',
    },
    {
      title: 'Descrição',
      dataIndex: 'descricao',
    },
    {
      title: 'Tipo',
      dataIndex: 'tipo',
    },
    {
      title: 'Valor',
      dataIndex: 'valor',
    },
    {
      title: 'Saldo',
      dataIndex: 'saldo',
    },
    {
      title: 'Data',
      dataIndex: 'data',
    },
    {
      title: 'Ação',
      dataIndex: 'acao',
    }
  ];
  
  const data = [
    {
      key: '1',
      de:'Vitor',
      para:'Lucas',
      descricao: 'Boleto',
      tipo:'ted',
      valor: 'R$ 4,50',
      saldo: 'R$ 20,00',
      data:'30/06/2021',
      acao:'...' 
    },
    {
      key: '2',
      de:'Vitor',
      para:'Lucas',
      descricao: 'TED',
      tipo:'ted',
      valor: 'R$ 4,50',
      saldo: 'R$ 20,00',
      data:'30/06/2021',
      acao:'...'
    }
  ];
  
  function onChange(pagination) {
    console.log('params', pagination);
  }
  
  return(
    <Table columns={columns} dataSource={data} 
    pagination={{ pageSize:5 }}
    onChange={onChange} className={styled.TableBackground} />
    )
};
