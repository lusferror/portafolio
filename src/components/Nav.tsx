
"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const Likns = [
    { name: "inicio", path: "/" },
    { name: "servicios", path: "/services" },
    { name: "resumen", path: "/resume" },
    { name: "trabajos", path: "/work" },
    { name: "contáctame", path: "/contact" },
];

export default function Nav() {

    const pathname = usePathname();

    return (
        <nav className="flex gap-8">
            {Likns.map((link) => {
                return (
                <Link 
                    href={link.path} 
                    key={link.name}
                    className={`${link.path === pathname && "text-accent border-b-2 border-accent" } capitalize font-medium hover:text-accent transition-all`}
                >
                    {link.name}
                </Link>
            )})}
        </nav>
    )
}