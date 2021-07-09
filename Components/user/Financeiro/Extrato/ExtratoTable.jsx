import { Table } from 'antd';
import  styled  from '../../../../styles/Transferencia.module.css' 

export default function RelatorioCobrancasTable() {
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
      dataIndex: 'Tipo',
    },
    {
      title: 'Valor',
      dataIndex: 'valor',
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
      de:'De',
      para:'Para',
      descricao:'Descricao',
      tipo: 'Tipo',
      valor:'R$ 20,00',
      data: 'Data',
      acao:'...' 
    },
    {
      key: '2',
      de:'De',
      para:'Para',
      descricao:'Descricao',
      tipo: 'Tipo',
      valor:'R$ 20,00',
      data: 'Data',
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
