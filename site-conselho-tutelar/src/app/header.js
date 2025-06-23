import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className=" flex justify-between">
      <Link
        href={"/"}
       className="flex gap-3">
        <h1 className="text-gray-900 font-bold md:text-3xl ">Conselho Tutelar de</h1>
        <Image
          src={"/logoPrefeitura2.png"}
          alt="Logo Prefeitura de Nova Ibiá"
          width={500}
          height={100}
          className="w-32 h-7"
        />
      </Link>
      <div className="flex gap-5">
        <Link
          href={"/"}
          className="font-bold textxl"
        >
          Início
        </Link>
        <Link
          href={"/"}
          className="font-bold textxl"
        >
          Nossos projetos
        </Link>
        <Link
          href={"/"}
          className="font-bold textxl"
        >
          Contato
        </Link>
        
        
      </div>
    </div>
  );
}
