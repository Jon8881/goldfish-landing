"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function ComparisonSection() {
    const comparisonData = [
        { label: "Стоимость", gf: "Оплата за результат", hire: "Оклад + налоги" },
        { label: "График", gf: "Гибкий, без привязки", hire: "Фиксированный рабочий день" },
        { label: "Навыки", gf: "Команда мультиспециалистов", hire: "Зависят от одного человека" },
        { label: "Безопасность", gf: "Гарантирована договором (NDA)", hire: "Выше риск утечки без строгих ИБ-мер" },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 w-full h-full flex flex-col justify-center py-24">
            <div className="mb-16 md:w-3/4">
                <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                    Онлайн-сервис или <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-500">традиционный найм?</span>
                </h2>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass rounded-[2rem] overflow-hidden border border-slate-200 shadow-xl"
            >
                {/* Desktop Header */}
                <div className="hidden md:grid grid-cols-3 bg-slate-50 border-b border-slate-200 p-8">
                    <div className="font-semibold text-slate-500">Критерий</div>
                    <div className="font-bold text-brand text-xl">GoldFish.life</div>
                    <div className="font-bold text-slate-400 text-xl pl-8">Штатный сотрудник</div>
                </div>

                <div className="divide-y divide-slate-100">
                    {comparisonData.map((row, idx) => (
                        <div key={idx} className="flex flex-col md:grid md:grid-cols-3 p-6 md:p-8 hover:bg-slate-50/50 transition-colors md:items-center gap-4 md:gap-0">
                            {/* Criterion Label */}
                            <div className="font-bold text-slate-900 text-lg md:text-base md:font-semibold md:text-slate-700 bg-slate-50 md:bg-transparent -mx-6 -mt-6 p-4 md:p-0 mb-2 md:mb-0 md:mx-0 border-b border-slate-100 md:border-none text-center md:text-left">
                                {row.label}
                            </div>

                            {/* GoldFish Column */}
                            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 text-emerald-600 font-medium">
                                <div className="md:hidden text-brand font-bold text-sm uppercase tracking-wider mb-2">GoldFish.life</div>
                                <div className="flex items-center gap-3 text-center md:text-left">
                                    <Check className="w-5 h-5 shrink-0" />
                                    <span>{row.gf}</span>
                                </div>
                            </div>

                            {/* Regular Hire Column */}
                            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 text-slate-400 font-medium md:pl-8 mt-4 md:mt-0 pt-4 md:pt-0 border-t border-slate-100 md:border-none">
                                <div className="md:hidden text-slate-400 font-bold text-sm uppercase tracking-wider mb-2">Штатный сотрудник</div>
                                <div className="flex items-center gap-3 text-center md:text-left">
                                    <X className="w-5 h-5 shrink-0" />
                                    <span>{row.hire}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            <div className="text-center mt-12">
                <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
                    GoldFish.life идеально подходит для тех, кто ценит свое время и хочет избежать бумажной и кадровой волокиты.
                </p>
            </div>
        </div>
    );
}
