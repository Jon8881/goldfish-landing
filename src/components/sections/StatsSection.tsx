"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useSpring, useTransform, animate } from "framer-motion";

const AnimatedCounter = ({ from, to, duration = 2, prefix = "", suffix = "" }: { from: number, to: number, duration?: number, prefix?: string, suffix?: string }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (inView) {
            const controls = animate(from, to, {
                duration: duration,
                ease: "easeOut",
                onUpdate(value) {
                    if (nodeRef.current) {
                        // Format the number with spaces (e.g., 45 000)
                        nodeRef.current.textContent = prefix + Math.round(value).toLocaleString("ru-RU") + suffix;
                    }
                }
            });
            return () => controls.stop();
        }
    }, [from, to, duration, inView, prefix, suffix]);

    return <span ref={nodeRef} className="tabular-nums">{prefix}{from.toLocaleString("ru-RU")}{suffix}</span>;
};

export default function StatsSection() {
    const stats = [
        {
            value: 45000,
            prefix: "> ",
            label: "Исполненных желаний",
            desc: "Успешно закрытых задач разного уровня сложности"
        },
        {
            value: 60000,
            prefix: "> ",
            label: "Освобожденных часов",
            desc: "Времени, которое клиенты потратили на себя"
        },
        {
            value: 500,
            prefix: "> ",
            label: "Постоянных клиентов",
            desc: "Доверяют нам свой бизнес и личную жизнь каждый день"
        },
        {
            value: 99,
            suffix: "%",
            label: "SLA и пунктуальность",
            desc: "Задачи выполняются точно в согласованный срок"
        }
    ];

    return (
        <section className="py-24 relative z-10 w-full bg-white overflow-hidden">
            {/* Декоративные элементы фона */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-slate-50/50 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10 text-left">
                <div className="mb-16 md:w-3/4">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                        Философия в <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-500">цифрах</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl">
                        За каждым числом стоит наша кропотливая работа, ответственность и ваше спокойствие.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group"
                        >
                            {/* Decorative background flare */}
                            <div className="absolute -right-10 -top-10 w-32 h-32 bg-slate-50 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

                            <div className="relative z-10">
                                <div className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">
                                    <AnimatedCounter
                                        from={0}
                                        to={stat.value}
                                        duration={2.5}
                                        prefix={stat.prefix}
                                        suffix={stat.suffix}
                                    />
                                </div>

                                <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight">
                                    {stat.label}
                                </h3>

                                <p className="text-sm text-slate-500 leading-relaxed">
                                    {stat.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
