import Link from 'next/link';
import Image from 'next/image';

import styled from '../../../../styles/HeaderUser.module.css';


import PerfilImage from '../../../../public/img/perfilTest.jpg'

export default function Perfil() {
  
  return (
    <div className={styled.NavPerfil}>
    <button className={styled.NavPerfil}><Image width={60} height={60} src={PerfilImage} alt="" placeholder="blur" /></button>
    <div class={styled.NavPerfilContent}>
      <ul>
        <li><Link href="/Colaboradores">Colaboradores Grupos e Usuários</Link></li>
        <li><Link href="/Configuracoes">Configurações</Link></li>
        <li><Link href="/Ajuda">Ajuda</Link></li>
        <li><Link href="/">Sair</Link></li>
      </ul>
    </div>
  </div>
  );
};
