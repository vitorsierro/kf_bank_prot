
import React from 'react'
//CSS 
import styled from '../../../styles/HeaderUser.module.css'
import { Drawer, Form }  from 'antd';

export default function PopUpLeft({onClose = () => { }, isDrawVisible}) {
  const [windowSize, setWindowSize] = React.useState({ width: undefined });
  React.useEffect(() => {
    function handleResize() {
      setWindowSize({width: window.innerWidth });
    }    
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  function widthDivide(){
    const width = windowSize.width;
    console.log(width);
        
    if((width / 2 ) > 600){
      return 720;
    }else{
      return width;
    }
  }
  const width = widthDivide()
  return(
    <>
    <Drawer
      title="Notificações"
      width={width}
      onClose={onClose}
      visible={isDrawVisible}
      bodyStyle={{ paddingBottom: 80 }}
    >
      <Form layout="vertical">
        <div className={styled.NotificacoesInterno}>
          <div><h1>Titulo</h1></div>
          <hr/>
          <div><h4>Descrição</h4></div>
        </div>
        <hr/>
      </Form>
    </Drawer>
  </>
  )
};
