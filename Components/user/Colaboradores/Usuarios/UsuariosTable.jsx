import { Table } from 'antd';
import styled from '../../../../styles/Transferencia.module.css';

export default function UsuariosTable() {
  const columns = [
    {
      title: 'Data do Registro',
      dataIndex: 'dataRegistro',
    },
    {
      title: 'Nome',
      dataIndex: 'nome',
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
      dataRegistro:'dataRegistro',
      nome:'nome',
      status:'status',
      acao:'Ação'
    },
    {
      key: '2',
      dataRegistro:'dataRegistro',
      nome:'nome',
      status:'status',
      acao:'Ação'
    }
  ];
  
  function onChange(pagination) {
    console.log('params', pagination);
  }
  
  return(
    <Table columns={columns} dataSource={data} 
    pagination={{ pageSize:6 }}
    onChange={onChange} className={`${styled.TableBackground} ${styled.TablePix}`}
    style={{justifyContent:'unset', padding:'3rem 1rem !important', margin:'1rem 0rem !important'}} />
    )
};
