import CarouselIntegrantes from "../../components/carousel/CarouselIntegrantes";

function Sobre() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-100">
        <h1 className="text-rose-950 text-3xl font-bold flex justify-center mb-4">
          QUEM SOMOS
        </h1>
        <p className="text-gray-700 text-xl mb-8 text-center max-w-2xl font-semibold">
          Somos uma equipe dedicada de desenvolvedores comprometidos em entregar
          soluções de alta qualidade. Conheça nossos integrantes abaixo.
        </p>
        <CarouselIntegrantes />
      </div>
    </>
  );
}

export default Sobre;
