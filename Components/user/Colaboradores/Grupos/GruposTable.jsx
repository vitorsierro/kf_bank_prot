import { Table } from 'antd';
import styled from '../../../../styles/Transferencia.module.css';

export default function GruposTable() {
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
      title: 'Grupo',
      dataIndex: 'grupo',
    },
    {
      title: 'Usuário',
      dataIndex: 'usuario',
    },
    {
      title: 'Email',
      dataIndex: 'email',
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
      grupo:'grupo',
      usuario:'usuario',
      email:'email',
      status:'status',
      acao:'Ação'
    },
    {
      key: '2',
      dataRegistro:'dataRegistro',
      nome:'nome',      
      grupo:'grupo',
      usuario:'usuario',
      email:'email',
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
