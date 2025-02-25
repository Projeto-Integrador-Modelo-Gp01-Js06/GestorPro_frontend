import { Pencil, Trash } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

interface CardColaboradoresProps {
    colaborador: {id: number, nome: string, cargo: string}
}

function CardColaboradores({ colaborador }: CardColaboradoresProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>
            <img
                        src={"https://ik.imagekit.io/u4ctxhv0m/Usuarios/13.jpg?updatedAt=1738264724541"}
                        className='h-12 rounded-full'
                        alt={"imagem do usuário"} />
                Colaborador
            </header>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{colaborador.nome}</p>
            <p className='p-8 text-xl bg-slate-200 h-full'>{colaborador.cargo}</p>


            <div className="flex items-center justify-center w-full text-slate-100 bg-indigo-800 py-1 gap-2">
                <Link to={`/editarcolaborador/${colaborador.id}`}>
                        <Pencil size={36} className="#ffffff " />
                </Link>

                <Link to={`/deletarcolaborador/${colaborador.id}`} >
                        <Trash size={36} color="#ffffff" />
                </Link>
            </div>

        </div>
    )
}

export default CardColaboradores