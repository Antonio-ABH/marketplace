'use client'

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-grow justify-center pt-10">
      <article className="flex gap-6 w-[90%]  md:w-[80%] xl:w-[60%] justify-start xl:justify-between flex-col lg:flex-row h-full items-center">
        <div className="flex flex-col gap-2 w-full lg:w-[60%] justify-evenly items-start">
          <div>
            <h1 className="text-lg md:text-2xl font-bold">Descubre productos únicos hechos por artesanos locales</h1>
            <p className="text-base md:text-lg">Un espacio para apoyar al talento artesanal. Compra directamente a creadores y lleva a tu hogar piezas con historia.</p>
          </div>
          <button onClick={() => window.location.href = "/catalog"} className="bg-[#5bafd2] py-2 px-4 rounded-md text-lg md:text-2xl font-semibold hover:bg-[#b2def1] hover:cursor-pointer">Explorar Catalogo</button>
        </div>
        <Image src='/images/artesanal.webp' alt="Image Artesanal" width={300} height={300} className="w-full lg:w-[40%] rounded-2xl h-[45%] lg:h-[30%] 2xl:h-[55%]" />
      </article>
    </main>
  );
}
