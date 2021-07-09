import { Table } from 'antd';
import  styled  from '../../../styles/Transferencia.module.css';

export default function PixChaveCobranca() {
  const columns = [
    {
      title: 'Data',
      dataIndex: 'data',
    },
    {
      title: 'Descrição',
      dataIndex: 'descricao',
    },
    {
      title: 'Referência',
      dataIndex: 'referencia',
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
      descricao:"Chave para internet",
      referencia:'Lucas',
      valor: 'R$ 4,50',
      acao:'...' 
    },
    {
      key: '2',
      data:'24/06/2021  14:05:00',
      descricao:"Chave para internet",
      referencia:'Lucas',
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
