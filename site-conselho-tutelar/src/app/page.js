import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NODE_ENV === 'production' ? '/Site-Conselho-Tutelar-Nova-Ibia' : '';

export default function Home() {
  return (
    <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start">
        <div className="relative w-full lg:w-auto flex justify-center">
          <div className="w-full max-w-md lg:max-w-none h-1/2 bg-pink-500 rounded-4xl absolute -z-10 top-16 sm:top-20 md:top-24 lg:top-28"></div>
          <Image
            src={`${basePath}/CriancasCorrendo.png`}
            alt="Crianças alegres correndo"
            width={500}
            height={500}
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:w-[900px] h-auto"
          ></Image>
        </div>
        <div className="flex flex-col w-full lg:w-5/12 text-center lg:text-start gap-3 sm:gap-4 mt-8 lg:mt-32 px-4 lg:px-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extralight">
            Um <strong className="text-pink-500 font-bold">futuro melhor</strong> para nossas <br className="hidden sm:block"/> <strong className="text-cyan-400 font-bold">crianças</strong> e <strong className="text-green-400 font-bold">adolescentes</strong></h1>
          <p className="text-justify text-sm sm:text-base leading-relaxed">O Conselho Tutelar é o órgão encarregado pela sociedade de zelar pelo cumprimento dos direitos da criança e do adolescente, definidos pelo Estatuto da Criança e do Adolescente (ECA). Tem como atribuições atender as crianças e adolescentes que necessitam de proteção, quando em situações de risco, violência ou negligência.</p>
        </div>
      </div>
      <div className="bg-white rounded-4xl shadow-sm w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto flex flex-col sm:flex-row justify-center sm:justify-between p-6 sm:p-8 md:p-10 lg:p-14 items-center sm:items-start gap-6 sm:gap-4">
        <Link
        href={"https://www.gov.br/mdh/pt-br/navegue-por-temas/crianca-e-adolescente/publicacoes/eca_mdhc_2024.pdf"}
        className="flex flex-col gap-3 items-center hover:scale-105 transition-transform"
        >
          <Image
            src={`${basePath}/doc.png`}
            alt="Estatuto da Criança e do Adolescente"
            width={80}
            height={80}
            className="w-12 h-16 sm:w-16 sm:h-20 text-center"
          ></Image>
          <h1 className="text-center font-bold text-sm sm:text-base">
            Estatuto <br/> 
            da Criança e <br/>
            do Adolescente
          </h1>
        </Link>
        
        <Link
        href={"/"}
        className="flex flex-col gap-3 items-center hover:scale-105 transition-transform"
        >
        <Image
          src={`${basePath}/whatsapp.png`}
          alt="Fale conosco"
          width={100}
          height={100}
          className="w-20 h-20 sm:w-24 sm:h-24"
        ></Image>
        <h1 className="text-center font-bold text-sm sm:text-base">
          Fale <br/>
          conosco
          </h1>
        </Link>
      </div>
    </div>
  );
}
