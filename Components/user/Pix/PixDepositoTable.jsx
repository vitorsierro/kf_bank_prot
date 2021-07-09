import { Table } from 'antd';
import  styled  from '../../../styles/Transferencia.module.css' 

export default function PixDepositoTable() {
  const columns = [
    {
      title: 'Data',
      dataIndex: 'data',
    },
    {
      title: 'Origem',
      dataIndex: 'origem',
    },
    {
      title: 'Valor',
      dataIndex: 'valor',
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
      Origem:'Lucas',
      valor: 'R$ 4,50',
      acao:'...' 
    },
    {
      key: '2',
      data:'24/06/2021  14:05:00',
      Origem:'Lucas',
      valor: 'R$ 40,50',
      acao:'...' 
    },
  ];
  
  function onChange(pagination) {
    console.log('params', pagination);
  }
  
  return(
    <Table columns={columns} dataSource={data} 
    pagination={{ pageSize:5 }}
    onChange={onChange} className={`${styled.TableBackground} ${styled.TablePix}`} />
    )
};
