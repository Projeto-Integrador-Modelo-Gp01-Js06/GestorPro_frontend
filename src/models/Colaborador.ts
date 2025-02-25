export default interface Colaborador {
    id: number;
    nome: string;
    email: string;
    cargo: string;
    salario: number;
    dataContratacao: string; // Em frontend, datas geralmente são tratadas como string
}