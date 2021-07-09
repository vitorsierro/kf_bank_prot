import { Table } from 'antd';
import  styled  from '../../../../../styles/Transferencia.module.css'; 

export default function RelatorioCobrancasTable() {
  const columns = [
    {
      title: 'Nome',
      dataIndex: 'nome',
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
      nome:'codigo',
      valor:'valor',
      acao:'...' 
    },
    {
      key: '2',
      nome:'codigo',
      valor:'valor',
      acao:'...' 
    }
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
