import { Table } from 'antd';
import  styled  from '../../../styles/Transferencia.module.css';

export default function BeneficiarioPixTable() {
  const columns = [
    {
      title: 'Tipo da Chave',
      dataIndex: 'tipoChave',
    },
    {
      title: 'Chave',
      dataIndex: 'chave',
    },
    {
      title: 'Nome',
      dataIndex: 'nome',
    },
    {
      title: 'Documento',
      dataIndex: 'documento',
    },
    {
      title: 'Banco',
      dataIndex: 'banco',
    },
    {
      title: 'Agência',
      dataIndex: 'agencia',
    },
    {
      title: 'Conta',
      dataIndex: 'conta',
    },
    {
      title: 'Ação',
      dataIndex: 'acao',
    }
  ];
  
  const data = [
    {
      key: '1',
      tipoChave:'Vitor',
      chave:'Lucas',
      nome: 'Boleto',
      documento:'ted',
      banco: 'banco',
      agencia: 'agencia',
      conta:'conta',
      acao:'...' 
    },
    {
      key: '2',
      tipoChave:'Vitor',
      chave:'Lucas',
      nome: 'Boleto',
      documento:'ted',
      banco: 'banco',
      agencia: 'agencia',
      conta:'conta',
      acao:'...' 
    }
  ];
  
  function onChange(pagination) {
    console.log('params', pagination);
  }
  
  return(
    <Table columns={columns} dataSource={data} 
    pagination={{ pageSize:5 }}
    onChange={onChange} className={`${styled.TableBackground} ${styled.TablePix}`}  />
    )
};