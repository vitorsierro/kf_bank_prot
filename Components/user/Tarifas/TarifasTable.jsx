import { useState } from "react";
import { Table, Input, Button, Space } from 'antd';
import styled from '../../../styles/Transferencia.module.css';

export default function TarifasTable() {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const columns = [
    {
      title: 'Descrição',
      dataIndex: 'descricao',
    },
    {
      title: 'Valor',
      dataIndex: 'Valor',
    }
  ];
  
  const data = [
    {
      key: '1',
      descricao: 'Boleto - Valor da tarifa a ser cobrada por boleto liquidado (R$)',
      Valor: 'R$ 4,50',
      
    },
    {
      key: '2',
      descricao: 'Ted - Valor da tarifa a ser cobrada por solicitação de transferência (R$)',
      Valor: 'R$ 10,00',
    }
  ];
  
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }
  
  return(
    <Table columns={columns} dataSource={data} onChange={onChange}
    pagination={{ pageSize:5 }} className={styled.TableBackground} />
    )
};
