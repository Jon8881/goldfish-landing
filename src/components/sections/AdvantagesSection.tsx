"use client";

import { motion } from "framer-motion";
import { Zap, Users, Clock, ShieldCheck } from "lucide-react";

export default function AdvantagesSection() {
    const advantages = [
        {
            icon: <Zap className="w-6 h-6 text-brand" />,
            title: "Гибкость и экономия",
            desc: "Отсутствие налогов, отпускных и затрат на рабочее место. Вы платите только за выполненные задачи, а не за просиживание часов в офисе."
        },
        {
            icon: <Users className="w-6 h-6 text-brand" />,
            title: "Широкий спектр компетенций",
            desc: "Один сервис заменяет целый штат — вам доступны маркетологи, аналитики, дизайнеры и организаторы."
        },
        {
            icon: <Clock className="w-6 h-6 text-brand" />,
            title: "Удобство и скорость (24/7)",
            desc: "Работаем без выходных с 9:00 до 21:00. Общение в удобном для вас мессенджере. Использование ИИ-инструментов ускоряет процессы."
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-brand" />,
            title: "Надежность и безопасность",
            desc: "Строгий отбор сотрудников (опыт от 2 лет), обязательное подписание NDA (соглашение о неразглашении)."
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 w-full h-full flex flex-col justify-center py-24 text-left">
            <div className="mb-16 md:w-3/4">
                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                    Почему выбирают сервис <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Gold Fish Life?</span>
                </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {advantages.map((adv, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                        className="glass-brand rounded-3xl p-8 hover:bg-brand-light/40 transition-colors"
                    >
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-black/10">
                            {adv.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">{adv.title}</h3>
                        <p className="text-blue-100/80 leading-relaxed text-sm md:text-base">
                            {adv.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
