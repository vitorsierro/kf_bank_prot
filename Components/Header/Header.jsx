import React from 'react';
//Libs
import Link from 'next/link';
import Image from 'next/image';

//CSS
import styled from '../../styles/Header.module.css'

//Image
import logo from '../../public/img/logo_alterado.png'

export default function Header() {
  return (
    <nav className={styled.Nav}>
      <div className={styled.Logo}>
        <Link href="/">
          <Image quality="100%" src={logo} />
        </Link>
      </div>
      <div className={styled.Menu}>
      <ul>
      <Link href="#cpf"><li>Para você</li></Link>
      <Link href="#cnpj"><li>Para sua Empresa</li></Link>
      <Link href="#app"><li>Nosso app</li></Link>
      <Link href="#duvida"><li>Tire sua dúvida</li></Link>
      <Link href='/Login'><li>Logar</li></Link>
      <Link href='/Cadastro'><li>Cadastra-se</li></Link>
      </ul>
      </div>
    </nav>
  );
};
