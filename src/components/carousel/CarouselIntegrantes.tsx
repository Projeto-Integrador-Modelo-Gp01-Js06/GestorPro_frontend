import { LinkedinLogo, GithubLogo } from "phosphor-react";
import { Carousel } from "primereact/carousel";

const integrantes = [
  {
    id: 1,
    nome: "Gustavo Teles",
    image: "/gustavo.png",
    github: "https://github.com/ustavoteles",
    linkedin: "https://linkedin.com/in/ustavoteles",
  },
  {
    id: 2,
    nome: "Carlos Henrique",
    image: "/carlos.png",
    github: "https://github.com/CrMessiProgrammer",
    linkedin: "https://www.linkedin.com/in/carlos-h-dev/",
  },
  {
    id: 3,
    nome: "Ana Paula",
    image: "/ana.png",
    github: "https://github.com/anapaula-sds",
    linkedin: "https://www.linkedin.com/in/anapaula-sds/",
  },
  {
    id: 4,
    nome: "Adrielly Ramos",
    image: "/adrielly.png",
    github: "https://github.com/AdriellyN",
    linkedin: "https://www.linkedin.com/in/adrielly-do-nascimento-ramos/",
  },
  {
    id: 5,
    nome: "Eduarda Galeno",
    image: "/eduarda.png",
    github: "https://github.com/eduarda-galeno",
    linkedin: "https://www.linkedin.com/in/eduardagaleno/",
  },
  {
    id: 6,
    nome: "Jeisa Boaventura",
    image: "/jeisa.png",
    github: "https://github.com/Caaarolb",
    linkedin: "https://www.linkedin.com/in/-caroline-boaventura/",
  },
  {
    id: 7,
    nome: "Simone Gonzaga",
    image: "/simone.png",
    github: "https://github.com/si-gonz",
    linkedin: "https://www.linkedin.com/in/simonegonzagag/",
  },
  {
    id: 8,
    nome: "Gabriel Domiciano",
    image: "/gabriel.png",
    github: "https://github.com/GabrielSDomiciano",
    linkedin: "https://www.linkedin.com/in/gabriel-domiciano96/",
  },
 
];

const responsiveOptions = [
  {
    breakpoint: "1024px",
    numVisible: 2,
    numScroll: 2,
  },
  {
    breakpoint: "768px",
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: "560px",
    numVisible: 1,
    numScroll: 1,
  },
];

const integranteTemplate = (integrantes: any) => {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-gray-400 p-10 rounded overflow-hidden mx-2">
      {" "}
      <img
        src={integrantes.image}
        alt={integrantes.nome}
        className="w-40 h-40 rounded-full mb-4"
      />
      <h3 className="text-3xl font-bold text-center">{integrantes.nome}</h3>
      <p className="text-xl font-bold text-rose-950 mt-3">DEV</p>
      <div className="flex space-x-4 mt-4 ">
        <a href={integrantes.github} target="_blank">
          <GithubLogo size={28} weight="bold" className="hover:text-rose-950"/>
        </a>
        <a href={integrantes.linkedin} target="_blank">
          <LinkedinLogo size={28} weight="bold" className="hover:text-rose-950" />
        </a>
      </div>
    </div>
  );
};
function CarouselIntegrantes() {
  return (
    <>
      {" "}
      <div className="flex justify-center items-center w-full h-full">
        <Carousel
          value={integrantes}
          numVisible={2}
          numScroll={2}
          responsiveOptions={responsiveOptions}
          itemTemplate={integranteTemplate}
          className="w-full md:w-3/4 lg:w-2/4 my-2"
          />
      </div>
    </>
  );
}

export default CarouselIntegrantes;
