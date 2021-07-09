import React from 'react'
import Header from "../Components/Header/Header";
import { renovar } from "./api/Auth/Auth";

export default function rendimento() {
  var azul;
  React.useEffect(() => {
    renovar("teste", azul)
  }, [])
  
  return (
    <>
      <Header />
      <div>
        <h1>teste</h1>
      </div>
    </>
  );
};
