import { Table } from 'antd';
import  styled  from '../../../styles/Transferencia.module.css' 

export default function ContasFavorecidasTable() {
  const columns = [
    {
      title: 'Data de Registro',
      dataIndex: 'dataRegistro',
    },
    {
      title: 'Titular',
      dataIndex: 'titular',
    },
    {
      title: 'Documento',
      dataIndex: 'documento',
    },
    {
      title: 'Nome do Banco',
      dataIndex: 'nomeBanco',
    },
    {
      title: 'Número do Banco',
      dataIndex: 'numeroBanco',
    },
    {
      title: 'Agência',
      dataIndex: 'agencia',
    },
    {
      title: 'Número da Conta',
      dataIndex: 'numeroConta',
    },
    {
      title: 'Tipo de Conta',
      dataIndex: 'tipoConta',
    }
  ];
  const data = [
    {
      key: '1',
      dataRegistro:'dataRegistro',
      titular:'titular',
      documento:'documento',
      nomeBanco:'nomeBanco',
      numeroBanco:'numeroBanco',
      agencia:'agencia',
      numeroConta:'numeroConta',
      tipoConta:'tipoConta'
    },
    {
      key: '2',
      dataRegistro:'dataRegistro',
      titular:'titular',
      documento:'documento',
      nomeBanco:'nomeBanco',
      numeroBanco:'numeroBanco',
      agencia:'agencia',
      numeroConta:'numeroConta',
      tipoConta:'tipoConta'
    }
  ];
  
  function onChange(pagination) {
    console.log('params', pagination);
  }
  
  return(
    <Table columns={columns} dataSource={data} 
    pagination={{ pageSize:6 }}
    onChange={onChange} className={`${styled.TableBackground} ${styled.TablePix}`} />
    )
};
