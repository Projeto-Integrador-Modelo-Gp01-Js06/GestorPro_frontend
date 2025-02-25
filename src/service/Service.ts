import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000"
});

// Buscar todos os colaboradores
export const listar = async (url: string, setDados: Function) => {
  const resposta = await api.get(url);
  setDados(resposta.data);
};

//Criar um novo colaborador
export const cadastrar = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

//Atualizar um colaborador existente
export const atualizar = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.put(url, dados);
  setDados(resposta.data);
};

//Deletar um colaborador
export const deletar = async (url: string) => {
  await api.delete(url);
};

