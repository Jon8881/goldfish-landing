"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ConsultationDialog from "@/components/dialogs/ConsultationDialog";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "Услуги", href: "#services" },
        { name: "Как это работает", href: "#steps" },
        { name: "Тарифы", href: "#tariffs" },
        { name: "Преимущества", href: "#advantages" },
        { name: "Контакты", href: "#footer" },
    ];

    const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setMobileMenuOpen(false); // Close mobile menu if open
        const targetId = href.replace('#', '');
        const elem = document.getElementById(targetId);
        if (elem) {
            window.scrollTo({
                top: elem.offsetTop - 80, // Offset for the fixed headers
                behavior: "smooth"
            });
        }
    };

    return (
        <header
            className="fixed top-0 left-0 right-0 z-[100] bg-white shadow-sm py-4 border-b border-slate-100"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <img
                        src="/img/logo.svg"
                        alt="GoldFish Life Logo"
                        className="h-10 w-auto"
                        style={{ filter: "brightness(0) saturate(100%) invert(15%) sepia(19%) saturate(3065%) hue-rotate(188deg) brightness(96%) contrast(95%)" }}
                    />
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleScrollToSection(e, link.href)}
                            className="text-sm font-medium text-slate-600 hover:text-brand transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <Button variant="outline" className="text-brand border-brand/20 hover:bg-brand/5 rounded-full px-5 transition-all duration-300">
                        Личный кабинет
                    </Button>
                    <Button onClick={() => setDialogOpen(true)} className="bg-brand hover:bg-brand-light text-white rounded-full px-6 transition-all duration-300 shadow-md">
                        Заказать звонок
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-slate-800 p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 p-4 flex flex-col gap-4 md:hidden">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleScrollToSection(e, link.href)}
                            className="p-3 bg-slate-50 rounded-lg text-brand font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button variant="outline" className="w-full text-brand border-brand/20 hover:bg-brand/5 mt-4 h-12 rounded-xl">Личный кабинет</Button>
                    <Button onClick={() => setDialogOpen(true)} className="w-full bg-brand text-white mt-2 h-12 rounded-xl">Заказать звонок</Button>
                </div>
            )}

            <ConsultationDialog open={dialogOpen} setOpen={setDialogOpen} />
        </header>
    );
}
