"use client";

import { motion } from "framer-motion";
import { WalletCards, ListTodo, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ConsultationDialog from "@/components/dialogs/ConsultationDialog";

export default function StepsSection() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const steps = [
        {
            icon: <WalletCards className="w-12 h-12 text-blue-500 drop-shadow-md" strokeWidth={1.5} />,
            title: "Пополните баланс",
            desc: "Самостоятельно на сайте или написав нашему менеджеру в чат. Средства зачисляются мгновенно.",
            delay: 0.1
        },
        {
            icon: <ListTodo className="w-12 h-12 text-blue-500 drop-shadow-md" strokeWidth={1.5} />,
            title: "Поставьте задачу",
            desc: "Напишите или запишите голосовое сообщение о том, что нужно сделать. Ассистент согласует стоимость.",
            delay: 0.2
        },
        {
            icon: <Trophy className="w-12 h-12 text-blue-500 drop-shadow-md" strokeWidth={1.5} />,
            title: "Получите результат",
            desc: "Оплата списывается с баланса только после успешного выполнения поручения.",
            delay: 0.3
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 w-full h-full flex flex-col justify-center items-center">
            <div className="mb-20 w-full">
                <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight text-left">
                    Как начать работу с <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-500">ассистентом?</span>
                </h2>
                <p className="text-xl text-slate-600 text-left max-w-3xl">
                    Наши ассистенты — это живые профессионалы, а не боты. Мы работаем онлайн по всей России и за рубежом.
                </p>
            </div>

            <div className="w-full flex flex-col gap-12 md:gap-20">
                {steps.map((step, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: step.delay, duration: 0.5 }}
                        className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 group relative w-full"
                    >
                        {/* Huge Asymmetric Number - Fixed Alignment */}
                        <div className="text-[10rem] md:text-[14rem] font-black leading-[0.7] text-slate-100 group-hover:text-brand/10 transition-colors duration-500 select-none md:w-64 text-left shrink-0 -ml-4 md:-ml-8">
                            0{idx + 1}
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-left flex flex-col items-start pt-4 md:pt-8 w-full max-w-2xl">
                            <div className="mb-6">
                                {step.icon}
                            </div>
                            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-lg max-w-lg">
                                {step.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-16"
            >
                <Button onClick={() => setDialogOpen(true)} className="bg-brand hover:bg-brand-light text-white rounded-full px-8 py-6 text-lg font-bold shadow-xl shadow-brand/20 transition-all hover:scale-105">
                    Получить бесплатную консультацию
                </Button>
            </motion.div>

            <ConsultationDialog open={dialogOpen} setOpen={setDialogOpen} />
        </div>
    );
}
