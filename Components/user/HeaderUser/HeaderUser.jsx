import React from 'react';
//Libs
import Link from 'next/link';
import Image from 'next/image';

//Images
import logo from '../../../public/img/logo_alterado.png'

//Components
import Modal from './Modal';
import PopUpLeft from './PopUpLeft';
import Perfil from './Perfil/Perfil';

//CSS 
import styled from '../../../styles/HeaderUser.module.css'
import { Input, Button, Badge } from 'antd';


const { Search } = Input


export default function HeaderUser() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [isDrawVisible, setIsDrawVisible ] = React.useState(false);
  const logado = /*global.contextApi*/ true;
  let logoUrl = '';

  const showModal  = () => { setIsModalVisible(!isModalVisible)};
  const showDrawer = () => { setIsDrawVisible(true) };
  
  const onClose = () => {
    setIsDrawVisible(false);
  }
  if(logado === true ){
    logoUrl = '/Users';
  }else {
    logoUrl = '/';
  }

  const onSearch = (event) => console.log(event.target)
  return (
    <>
      <nav className={styled.Nav}>
        <div className={styled.Logo}>
          <Link href={logoUrl}>
            <Image quality="100%" src={logo} />
          </Link>
        </div>
        <Search placeholder="Pesquisar" onSearch={onSearch} enterButton className={styled.Pesquisar} />
        <div className={styled.Notificacoes}>
        <Button type="text" onClick={showDrawer}>
              {/* <BellOutlined> */}
          <Badge count={30} />
          </Button>            
        </div>
        <PopUpLeft onClose={() => setIsDrawVisible(false)} isDrawVisible={isDrawVisible}/>
        <Perfil />
      </nav>
      <div>
        <div className={styled.Hamburgue}>
          <input type="checkbox"  id="checkbox-menu" value={isDrawVisible} onClick={showModal} />
          <label for="checkbox-menu">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
       {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)} />  : null }
      </div>
    </>
  )
};
