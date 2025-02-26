import { useNavigate, useParams } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import Colaborador from "../../../models/Colaborador";
import { RotatingLines } from "react-loader-spinner";
import { atualizar, cadastrar, listar } from "../../../service/Service";

function FormColaborador() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [colaborador, setColaborador] = useState<Colaborador>({} as Colaborador);

    const { id } = useParams<{ id: string }>();

    async function buscarColaboradorPorId(id: string) {
        try {
            await listar(`/colaboradores/${id}`, setColaborador)
        } catch (error: any) {
            alert("Colaborador não encontrado!")
            retornar();
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarColaboradorPorId(id)
        } else {
            setColaborador({
                id: 0,
                nome: "",
                email: "",
                cargo: "",
                salario: 0,
                dataContratacao: ""
            })
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setColaborador({
            ...colaborador,
            [e.target.name]: e.target.value
        })
    }

    async function gerarNovaColaborador(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/colaboradores`, colaborador, setColaborador)

                alert("Colaborador atualizado com sucesso")

            } catch (error: any) {
                alert("Erro ao atualizar o Colaborador")
            }

        } else {
            try {
                await cadastrar(`/colaboradores`, colaborador, setColaborador)

                alert("Colaborador cadastrada com sucesso")

            } catch (error: any) {
                alert("Erro ao cadastrar a Colaborador")
            }
        }

        setIsLoading(false)
        retornar();

    }

    function retornar() {
        navigate("/colaboradores")
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto pb-10">
            <h1 className="my-8 text-4xl text-center">
                {id === undefined ? "Cadastrar Colaborador" : "Editar Colaborador"}
            </h1>

            <form className="flex flex-col w-1/2 gap-4"
                onSubmit={gerarNovaColaborador}
            >
                <div className="flex flex-col gap-2">
                    <label htmlFor="colaborador">Colaborador</label>
                    <input
                        type="text"
                        placeholder="Nome do Colaborador"
                        name="nome"
                        className="p-2 border-1 rounded border-slate-400 bg-white"
                        required
                        value={colaborador.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="colaborador">E-mail</label>
                    <input
                        type="text"
                        placeholder="E-mail do Colaborador"
                        name="email"
                        className="p-2 border-1 rounded border-slate-400 bg-white"
                        required
                        value={colaborador.email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="colaborador">Cargo</label>
                    <input
                        type="text"
                        placeholder="Cargo Atual"
                        name="cargo"
                        className="p-2 border-1 rounded border-slate-400 bg-white"
                        required
                        value={colaborador.cargo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="colaborador">Salário</label>
                    <input
                        type="text"
                        placeholder="Salário Bruto do Colaborador"
                        name="salario"
                        className="p-2 border-1 rounded border-slate-400 bg-white"
                        required
                        value={colaborador.salario}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="colaborador">Data de Admissão</label>
                    <input
                        type="text"
                        placeholder="Data de Contratação do Colaborador"
                        name="dataContratacao"
                        className="p-2 border-1 rounded border-slate-400 bg-white"
                        required
                        value={colaborador.dataContratacao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="flex justify-center w-1/2 py-3 mt-5 mx-auto rounded text-slate-100 bg-gray-400 hover:bg-rose-950"
                    type="submit"
                >
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
                    }
                </button>
            </form>
        </div>
    );
}

export default FormColaborador;