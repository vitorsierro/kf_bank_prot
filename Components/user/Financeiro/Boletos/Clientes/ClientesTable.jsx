import { Table } from 'antd';
import styled from '../../../../../styles/Transferencia.module.css';

export default function ClientesTable() {
  const columns = [
    {
      title: 'Nome',
      dataIndex: 'nome',
    },
    {
      title: 'Documento',
      dataIndex: 'Documento',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Cidade',
      dataIndex: 'cidade',
    },
    {
      title: 'Estado',
      dataIndex: 'estado',
    },
    {
      title: 'Grupo',
      dataIndex: 'grupo',
    },
    {
      title: 'Plano',
      dataIndex: 'plano',
    },
    {
      title: 'Ação',
      dataIndex: 'acao',
    }
  ];
  const data = [
    {
      key: '1',
      nome:'Nome',
      documento:'Documento',
      email:'Email',
      cidade:'Cidade',
      estado:'Estado',
      grupo:'Grupo',
      plano:'Plano',
      acao:'...' 
    },
    {
      key: '2',
      nome:'Nome',
      documento:'Documento',
      email:'Email',
      cidade:'Cidade',
      estado:'Estado',
      grupo:'Grupo',
      plano:'Plano',
      acao:'...' 
    }
  ];
  
  function onChange(pagination) {
    console.log('params', pagination);
  }
  
  return(
    <Table columns={columns} dataSource={data} 
    pagination={{ pageSize:10 }}
    onChange={onChange} className={`${styled.TableBackground} ${styled.TablePix} ${styled.padding1rem}`}  />
    )
};
