"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Clock, ShieldCheck } from "lucide-react";
import { useState } from "react";
import ConsultationDialog from "@/components/dialogs/ConsultationDialog";

export default function HeroOverlay() {
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <div className="relative z-10 flex flex-col justify-start lg:justify-center min-h-screen px-4 pt-10 sm:pt-14 lg:pt-20 pb-4 lg:pb-12 pointer-events-none">
            <div className="w-full max-w-7xl mx-auto flex">
                <div className="max-w-3xl text-left pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-block mb-6 px-5 py-2 rounded-full glass text-sm font-semibold text-slate-700 shadow-sm pointer-events-auto"
                    >
                        ✨ Ваш персональный онлайн-ассистент
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 drop-shadow-sm leading-tight pointer-events-auto"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                            Сервис ассистентов
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl drop-shadow-sm pointer-events-auto"
                    >
                        Удаленный сервис личных и бизнес-ассистентов. Делегируйте рутинные задачи и сложные поручения профессионалам. Оплата — только за реальный результат!
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-start gap-4 mb-5 lg:mb-20 pointer-events-auto"
                    >
                        <Button size="lg" className="bg-brand hover:bg-brand-light text-white border-brand hover:border-brand-light rounded-full h-14 px-8 text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300" onClick={() => setDialogOpen(true)}>
                            Воспользоваться сервисом
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base glass border-white/60 hover:bg-white/60 hover:scale-105 transition-all duration-300">
                            Узнать тарифы
                        </Button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        className="grid grid-cols-3 gap-2 md:gap-6 w-full mt-24 sm:mt-32 lg:mt-10 pointer-events-auto"
                    >
                        <div className="glass rounded-xl md:rounded-2xl px-2 py-3 md:p-6 flex flex-col items-center md:items-start justify-center gap-1 md:gap-3 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                            <div className="flex w-8 h-8 md:w-12 md:h-12 rounded-full bg-blue-100 items-center justify-center text-blue-600 mb-1 md:mb-2 shadow-sm">
                                <CheckCircle className="h-4 w-4 md:h-6 md:w-6" />
                            </div>
                            <h3 className="font-bold text-slate-900 text-xs sm:text-sm md:text-lg text-center md:text-left w-full">Выгодно</h3>
                            <p className="hidden md:block text-slate-600 text-sm leading-relaxed">Почасовая оплата или безлимитное количество задач. Платите только за результат.</p>
                        </div>
                        <div className="glass rounded-xl md:rounded-2xl px-2 py-3 md:p-6 flex flex-col items-center md:items-start justify-center gap-1 md:gap-3 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                            <div className="flex w-8 h-8 md:w-12 md:h-12 rounded-full bg-cyan-100 items-center justify-center text-cyan-600 mb-1 md:mb-2 shadow-sm">
                                <Clock className="h-4 w-4 md:h-6 md:w-6" />
                            </div>
                            <h3 className="font-bold text-slate-900 text-xs sm:text-sm md:text-lg text-center md:text-left w-full">Удобно</h3>
                            <p className="hidden md:block text-slate-600 text-sm leading-relaxed">Персональный ассистент на связи с 9:00 до 21:00. Подтвержденное качество.</p>
                        </div>
                        <div className="glass rounded-xl md:rounded-2xl px-2 py-3 md:p-6 flex flex-col items-center md:items-start justify-center gap-1 md:gap-3 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                            <div className="flex w-8 h-8 md:w-12 md:h-12 rounded-full bg-indigo-100 items-center justify-center text-indigo-600 mb-1 md:mb-2 shadow-sm">
                                <ShieldCheck className="h-4 w-4 md:h-6 md:w-6" />
                            </div>
                            <h3 className="font-bold text-slate-900 text-xs sm:text-sm md:text-lg text-center md:text-left w-full">Надежно</h3>
                            <p className="hidden md:block text-slate-600 text-sm leading-relaxed">Опытная команда и строгий отбор (NDA). Помощь ИИ-нейросетей.</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <ConsultationDialog open={dialogOpen} setOpen={setDialogOpen} />
        </div>
    );
}
