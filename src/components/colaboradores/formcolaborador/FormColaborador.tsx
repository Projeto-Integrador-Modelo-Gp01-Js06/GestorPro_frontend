import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ChangeEvent, useEffect, useState } from "react";
import Colaborador from "../../../models/Colaborador";
import { RotatingLines } from "react-loader-spinner";

function FormColaborador() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [colaborador, setColaborador] = useState<Colaborador>({} as Colaborador);

    const { id } = useParams<{ id: string }>();

    async function buscarColaboradorPorId(id: string) {
        try {
            await buscar(`/colaboradores/${id}`, setColaborador)
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
                produto: null
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
        <div className="container flex flex-col items-center justify-center mx-auto">
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
                        placeholder="Colaborador"
                        name="nome"
                        className="p-2 border-1 rounded border-slate-700 bg-white"
                        required
                        value={colaborador.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="flex justify-center w-1/2 py-2 mx-auto rounded text-slate-100 bg-indigo-800 hover:bg-cyan-400"
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