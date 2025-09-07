"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const basePath = process.env.NODE_ENV === 'production' ? '/Site-Conselho-Tutelar-Nova-Ibia' : '';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center relative">
      <Link
        href={"/"}
        className="flex gap-2 items-center">
        <h1 className="text-gray-900 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">Conselho Tutelar de</h1>
        <Image
          src={`${basePath}/logoPrefeitura2.png`}
          alt="Logo Prefeitura de Nova Ibiá"
          width={500}
          height={100}
          className="w-20 h-5 sm:w-24 sm:h-6 md:w-28 md:h-6 lg:w-32 lg:h-7"
        />
      </Link>
      
      {/* Menu Desktop */}
      <div className="hidden md:flex gap-5">
        <Link href={"/"} className="font-bold text-lg hover:text-pink-500 transition-colors">Início</Link>
        <Link href={"/"} className="font-bold text-lg hover:text-pink-500 transition-colors">Nossos projetos</Link>
        <Link href={"/"} className="font-bold text-lg hover:text-pink-500 transition-colors">Contato</Link>
      </div>

      {/* Botão Menu Mobile */}
      <button 
        className="md:hidden flex flex-col gap-1 p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu"
      >
        <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-lg mt-2 py-4 px-6 md:hidden z-50">
          <div className="flex flex-col gap-4">
            <Link 
              href={"/"} 
              className="font-bold text-lg hover:text-pink-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              href={"/"} 
              className="font-bold text-lg hover:text-pink-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Nossos projetos
            </Link>
            <Link 
              href={"/"} 
              className="font-bold text-lg hover:text-pink-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
