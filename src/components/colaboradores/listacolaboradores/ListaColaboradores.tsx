import { useEffect, useState } from "react"
import CardColaboradores from "../cardcolaboradores/CardColaboradores"
import Colaborador from "../../../models/Colaborador"
import { buscar } from "../../../services/Service"
import { Oval } from "react-loader-spinner"

function ListarColaboradores() {

    const [colaboradores, setColaboradores] = useState<Colaborador[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function buscarColaboradores() {
        setIsLoading(true)

        try {
            await buscar('/colaboradores', setColaboradores)
        } catch (error: any) {
            console.log("Erro ao listar as Colaboradores!")
        } finally {
            setIsLoading(false)
        }

    }

    useEffect(() => {
        buscarColaboradores()
    }, [colaboradores.length])

    return (
        <>
            {isLoading && (

                <Oval
                    color="#0D9488"
                    height="80"
                    width="80"
                    visible={true}
                    aria-label="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col mx-4">
                    {(!isLoading && colaboradores.length === 0) && (
                        <span className="my-8 text-3xl text-center">
                            Nenhuma categoria foi
                            encontrada
                        </span>
                    )}

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {colaboradores.map((categoria) => (
                            <CardColaboradores
                                key={categoria.id}
                                categoria={categoria}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListarColaboradores