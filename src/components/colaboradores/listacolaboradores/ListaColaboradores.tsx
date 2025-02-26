import { useEffect, useState } from "react"
import CardColaboradores from "../cardcolaboradores/CardColaboradores"
import Colaborador from "../../../models/Colaborador"
import { Oval } from "react-loader-spinner"
import { listar } from "../../../service/Service"

function ListarColaboradores() {

    const [colaboradores, setColaboradores] = useState<Colaborador[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function buscarColaboradores() {
        setIsLoading(true)

        try {
            await listar('/colaboradores', setColaboradores)
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
            <div className="flex justify-center items-center pt-8">
                {isLoading && (

                <Oval
                    color="#99a1af"
                    height="80"
                    width="80"
                    visible={true}
                    aria-label="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
                
            )}
            </div>
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col mx-4">
                    {(!isLoading && colaboradores.length === 0) && (
                        <span className="my-8 text-3xl text-center py-30">
                            Nenhum colaborador foi encontrado
                        </span>
                    )}

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {colaboradores.map((colaborador) => (
                            <CardColaboradores
                                key={colaborador.id}
                                colaborador={colaborador}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListarColaboradores