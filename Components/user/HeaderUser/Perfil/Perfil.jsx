import Link from 'next/link';
import Image from 'next/image';

import styled from '../../../../styles/HeaderUser.module.css';


import PerfilImage from '../../../../public/img/perfilTest.jpg'

export default function Perfil() {
  
  return (
    <div className={styled.NavPerfil}>
    <button className={styled.NavPerfil}><Image width={60} height={60} src={PerfilImage} alt="" placeholder="blur" /></button>
    <div className={styled.NavPerfilContent}>
      <ul>
        <li>Colaboradores Grupos e Usuários
          <ul>
          <li><Link href="/Users/Colaboradores/Grupos" >Grupos</Link></li>
          <li><Link href="/Users/Colaboradores/Usuarios" >Usuários</Link></li>
          </ul>
        </li>
        <li><Link href="/Configuracoes" >Configurações</Link></li>
        <li><Link href="/Ajuda" >Ajuda</Link></li>
        <li><Link href="/" >Sair</Link></li>
      </ul>
    </div>
  </div>
  );
};
