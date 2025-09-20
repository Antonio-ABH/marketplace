'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaAlignJustify, FaMixer } from 'react-icons/fa';

export default function Navbar() {

    const [open, setOpen] = useState(false);

    const pathname = usePathname();

    const links = [{name: "Inicio", href: "/"}, {name: "Catalog", href: "/catalog"}, {name: "Contact", href: "/contact"}];

    return (
        <nav className="w-full h-20 flex flex-col items-center justify-center pt-4">
            <div className="flex gap-4 justify-between w-[90%] md:w-[80%] xl:w-[60%]">
                <h1 className="text-[#0ea5e9] font-poppins font-bold text-xl sm:text-2xl h-20 flex items-center bg-blue-200 p-2 rounded-md">Hecho Aquí</h1>
                <ul className="hidden md:flex gap-4 h-auto">
                    {links.map((link) => (
                        <li key={link.name} className= "font-poppins font-bold text-xl flex items-center">
                            <Link href={link.href} className={`${pathname === link.href ? "bg-[#bbbec0]" : ""} p-2 rounded-md hover:bg-gray-100`}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
                <button onClick={() => setOpen(!open)} className="md:hidden">
                    {open ? < FaMixer size={28} /> : <FaAlignJustify size={28} />}
                </button>
            </div>
             {open && (
                    <ul className="absolute top-20 right-0 flex flex-col w-[50%] md:hidden bg-blue-100 p-2 rounded-lg shadow-lg">
                        {links.map((link) => (
                            <li key={link.name} className= "font-poppins font-bold text-xl flex items-center">
                                <Link href={link.href} className={`${pathname === link.href ? "bg-[#bbbec0]" : ""} p-2 rounded-md`}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                )}
        </nav>
    );
}