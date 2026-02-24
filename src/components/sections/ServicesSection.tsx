"use client";

import { motion, Variants } from "framer-motion";
import { Calendar, ShoppingBag, Plane, Wallet, MonitorPlay, FileText, LineChart, Briefcase, UserCheck, Building2 } from "lucide-react";

export default function ServicesSection() {
    const personalTasks = [
        { icon: <Calendar className="w-8 h-8 text-brand fill-blue-100" strokeWidth={1.5} />, title: "Организация расписания", desc: "Оптимизация графика, ведение календаря, напоминания." },
        { icon: <ShoppingBag className="w-8 h-8 text-brand fill-blue-100" strokeWidth={1.5} />, title: "Бытовые поручения", desc: "Заказ продуктов, поиск няни или клининга, вызов мастеров." },
        { icon: <Plane className="w-8 h-8 text-brand fill-blue-100" strokeWidth={1.5} />, title: "Поездки и мероприятия", desc: "Бронирование билетов, отелей, планирование путешествий." },
        { icon: <Wallet className="w-8 h-8 text-brand fill-blue-100" strokeWidth={1.5} />, title: "Финансовые вопросы", desc: "Помощь с оплатой счетов и контроль личного бюджета." },
    ];

    const businessTasks = [
        { icon: <MonitorPlay className="w-8 h-8 text-brand fill-blue-100" strokeWidth={1.5} />, title: "Организация процессов", desc: "Планирование и координация онлайн-встреч и совещаний." },
        { icon: <FileText className="w-8 h-8 text-brand fill-blue-100" strokeWidth={1.5} />, title: "Работа с документами", desc: "Структурирование почты, заполнение таблиц, презентации." },
        { icon: <LineChart className="w-8 h-8 text-brand fill-blue-100" strokeWidth={1.5} />, title: "Исследования и аналитика", desc: "Сбор информации, конкурентный анализ, отчеты." },
        { icon: <Briefcase className="w-8 h-8 text-brand fill-blue-100" strokeWidth={1.5} />, title: "Координация проектов", desc: "Контроль сроков и качества работы подрядчиков." },
    ];

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } }
    };

    return (
        <section className="py-24 relative z-10 bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-4 text-left">
                <div className="mb-16 md:flex justify-between items-end gap-8">
                    <div className="md:w-3/4">
                        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                            Какие задачи можно <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-500">делегировать?</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-xl">
                            Мы берем на себя все: от поиска клининга до составления сложных аналитических отчетов для вашего бизнеса.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 relative mt-12 w-full max-w-7xl mx-auto">
                    {/* Personal Tasks */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                                <UserCheck className="w-6 h-6 stroke-[1.5]" />
                            </div>
                            <h3 className="text-3xl font-extrabold text-slate-900">Личные поручения</h3>
                        </div>
                        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-4 w-full">
                            {personalTasks.map((task, idx) => (
                                <motion.div key={idx} variants={item} className="glass p-6 rounded-2xl flex gap-5 items-start hover:-translate-y-1 transition-transform border border-slate-100">
                                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                                        {task.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 mb-1">{task.title}</h4>
                                        <p className="text-sm text-slate-600 leading-relaxed">{task.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Business Tasks */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 shadow-sm">
                                <Building2 className="w-6 h-6 stroke-[1.5]" />
                            </div>
                            <h3 className="text-3xl font-extrabold text-slate-900">Бизнес-задачи</h3>
                        </div>
                        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-4 w-full">
                            {businessTasks.map((task, idx) => (
                                <motion.div key={idx} variants={item} className="glass p-6 rounded-2xl flex gap-5 items-start hover:-translate-y-1 transition-transform border border-slate-100">
                                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl shrink-0">
                                        {task.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 mb-1">{task.title}</h4>
                                        <p className="text-sm text-slate-600 leading-relaxed">{task.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
