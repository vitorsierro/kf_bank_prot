import axios from "axios";

export const api = axios.create({
  baseURL: "https://demoapi.suprem.cash/auth/",
});

export const logar = async (dados, setToken) => {
  dados = JSON.stringify(dados)
  api.post("login", dados)
    .then((res) => (setToken(res.data.token)))
    .catch((err) => {
           alert("Não foi possivel efetuar o login!");
           console.log(err)
           })
};

export const renovar = async (token, setToken) => {
  api["Authorization-Bearer"] = `Bearer ${token}`;
    api.post('renew').then((res) => (setToken(res.data.token)))
    .catch((err) => {
           console.log("Não foi possivel efetuar a renovação do token!");
           console.log(err)
           })
};

export const recuperUser = async (dados, setToken) => {
  dados = JSON.stringify(dados)
  api.post("recover", dados)
    .then((res) => (setToken(res.data.token)))
    .catch((err) => {
           console.log("Não foi possivel efetuar a recuperação!");
           console.log(err)
           })
};
