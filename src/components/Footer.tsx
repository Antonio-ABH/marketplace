'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {

    const links = [{name: "Inicio", href: "/"}, {name: "Catalog", href: "/catalog"}, {name: "Contact", href: "/contact"}];
    const pathname = usePathname();

    return (
        <footer className="w-full flex items-center justify-center">
            <div className="flex gap-4 w-[90%] md:w-[80%] xl:w-[60%] flex-col">
                <hr className="w-full h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className="flex gap-4 justify-between w-full">
                    <div>
                        <h2 className="text-[#0ea5e9] font-poppins font-bold text-xl sm:text-2xl flex items-center bg-blue-200 p-2 rounded-md justify-center">Hecho Aquí</h2>
                        <p>Artesania con Identidad.</p>
                    </div>
                    <ul className="md:flex gap-2 h-auto flex-col">
                        {links.map((link) => (
                            <li key={link.name} className= "font-poppins font-bold text-xl flex items-center">
                                <Link href={link.href} className={`${pathname === link.href ? "bg-[#bbbec0]" : ""} p-2 rounded-md text-sm md:text-lg hover:bg-gray-100`}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col gap-10">
                        <div className="flex gap-4 justify-end">
                            <FaInstagram size={38} />
                            <FaFacebook size={38} />    
                        </div>
                        <p>© 2025 Hecho Aquí. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}