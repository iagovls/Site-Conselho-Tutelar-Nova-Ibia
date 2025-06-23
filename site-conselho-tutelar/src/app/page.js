import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" mt-24 flex flex-col items-center gap-10">
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="relative">
          <div className="w-full h-1/2 bg-pink-500 rounded-4xl absolute -z-10 top-28 left[]"></div>
          <Image
            src={"/CriancasCorrendo.png"}
            alt="Crianças alegres correndo"
            width={500}
            height={500}
            className="w-[900px]"
          ></Image>
        </div>
        <div className="flex flex-col w-5/12 text-end gap-2 mt-32">
          <h1 className="text-4xl font-extralight text-start">
            Um <strong className="text-pink-500 font-bold">futuro melhor</strong> para nossas <br/> <strong className="text-cyan-400 font-bold">crianças</strong> e <strong className="text-green-400 font-bold">adolescentes</strong></h1>
          <p className="text-justify w-[505px] ">O Conselho Tutelar é o órgão encarregado pela sociedade de zelar pelo cumprimento dos direitos da criança e do adolescente, definidos pelo Estatuto da Criança e do Adolescente (ECA). Tem como atribuições atender as crianças e adolescentes que necessitam de proteção, quando em situações de risco, violência ou negligência.</p>
        </div>
      </div>
      <div className="bg-white rounded-4xl shadow-sm w-96 h-auto flex justify-between p-14 items-start">
        <Link
        href={"https://www.gov.br/mdh/pt-br/navegue-por-temas/crianca-e-adolescente/publicacoes/eca_mdhc_2024.pdf"}
        className="flex flex-col gap-3 items-center"
        >
          <Image
            src={"/doc.png"}
            alt=""
            width={80}
            height={80}
            className="w- text-center"
          ></Image>
          <h1 className="text-center font-bold">
            
            Estatuto <br/> 
            da Criança e <br/>
            do Adolescente
          </h1>
        </Link>
        
        <Link
        href={"/"}
        className="flex flex-col gap-3 items-center"
        >
        <Image
          src={"/whatsapp.png"}
          alt=""
          width={100}
          height={100}
        ></Image>
        <h1 className="text-center font-bold">
          Fale <br/>
          conosco
          </h1>
        </Link>
        
        
      </div>
    </div>
  );
}
