import { useEffect, useState } from "react"
import { RotatingLines } from "react-loader-spinner"
import { useNavigate, useParams } from "react-router-dom"
import Colaborador from "../../../models/Colaborador"
import { deletar, listar } from "../../../service/Service"

function DeletarColaborador() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [colaborador, setColaborador] = useState<Colaborador>({} as Colaborador)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await listar(`/colaborador/${id}`, setColaborador)
        } catch (error: any) {
            navigate('/')
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarColaborador() {
        setIsLoading(true)

        try {
            await deletar(`/colaborador/${id}`)

            alert('Colaborador apagada com sucesso')

        } catch (error: any) {

            alert('Erro ao deletar a colaborador.')
            navigate('/')
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/postagens")
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Colaborador</h1>

            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o colaborador a seguir?
            </p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header
                    className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
                    Colaborador
                </header>
                <div className="p-4">
                    <p className='text-3xl h-full'>{colaborador.nome}</p>
                    <p className='text-xl h-full'>{colaborador.email}</p>
                    <p className='text-xl h-full'>{colaborador.cargo}</p>
                </div>
                <div className="flex">
                    <button
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button
                        className='w-full text-slate-100 bg-indigo-400 
                        hover:bg-indigo-600 flex items-center justify-center'
                        onClick={deletarColaborador}>

                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarColaborador