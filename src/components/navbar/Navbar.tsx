import { MagnifyingGlass } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Navbar() {

	return (
		<>
			<div className="flex justify-center w-full py-4 text-white bg-gray-400">
				<div className="container flex items-center justify-between mx-4 text-lg">
					<Link to="/home">
						<img
							src="https://ik.imagekit.io/a210gfzra/GestorPro/download__5_-removebg-preview-removebg-preview.png?updatedAt=1740514136152"
							alt="Logo"
							className="w-50"
						/>
					</Link>

					<div className="relative flex items-center justify-center w-2/5 text-black">
						<form 
							className="flex items-center justify-center w-full"
						>
							<input
								className="w-10/12 px-4 py-4 bg-white rounded-lg h-9 focus:outline-none"
								type="search"
								placeholder="Pesquisar colaborador"
								id="busca"
								name="busca"
								required
							/>
							<button
								type="submit"
								className="h-9 w-9 p-2.5 ms-2 text-sm font-medium text-white bg-rose-950 hover:bg-red-950  rounded-lg border border-gray-400"
							>
								<MagnifyingGlass
									size={14}
									weight="bold"
								/>
							</button>
						</form>
					</div>

					<div className="flex items-center gap-4 py-4">
						<Link
							to="/colaboradores"
							className="hover:underline"
						>
							Colaboradores
						</Link>
						<Link
							to="/cadastrarcolaborador"
							className="hover:underline"
						>
							Cadastrar Colaborador
						</Link>
						<Link
							to="/sobre"
							className="hover:underline"
						>
							Sobre 
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar