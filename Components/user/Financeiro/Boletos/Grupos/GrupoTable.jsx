import { Table } from 'antd';
import styled from '../../../../../styles/Transferencia.module.css';

export default function GrupoTable() {
  const columns = [
    {
      title: 'Código',
      dataIndex: 'codigo',
    },
    {
      title: 'Nome',
      dataIndex: 'nome',
    },
    {
      title: 'Ação',
      dataIndex: 'acao',
    }
  ];
  const data = [
    {
      key: '1',
      codigo:'codigo',
      nome:'nome',
      acao:'...' 
    },
    {
      key: '2',
      codigo:'codigo',
      nome:'nome',
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
