"use client";

import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ConsultationDialog from "@/components/dialogs/ConsultationDialog";

export default function FaqSection() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const faqs = [
        {
            q: "Что дает мне пополнение депозита?",
            a: "Пополняя баланс, вы покупаете время работы специалиста. Остаток средств не сгорает и переносится на следующий месяц. Сумма списывается только за часы реальной работы над вашей задачей."
        },
        {
            q: "Какие работы вы выполняете?",
            a: "Мы выполняем как личные (бронь отелей, поиск врачей, покупка билетов), так и бизнес-задачи (сбор баз данных, анализ конкурентов, заполнение таблиц, контроль дедлайнов). Если задача в рамках закона и выполнима удаленно — мы это сделаем."
        },
        {
            q: "На какую сумму мне пополнить баланс?",
            a: "Если вы обращаетесь впервые, рекомендуем тариф «Попробуй» (2 490 ₽) — этого хватит, чтобы оценить сервис. Если у вас регулярные задачи, выгоднее брать пакеты от 40 часов, где стоимость часа значительно ниже."
        }
    ];

    return (
        <section className="py-24 relative z-10 w-full bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 text-left">
                <div className="mb-16 md:w-3/4">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                        Часто задаваемые <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-500">вопросы</span>
                    </h2>
                    <p className="text-xl text-slate-600">
                        Всё, что нужно знать перед тем, как делегировать свою первую задачу.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, idx) => (
                            <AccordionItem key={idx} value={`item-${idx}`} className="border-b-slate-100 py-2">
                                <AccordionTrigger className="text-left text-lg font-bold text-slate-800 hover:text-brand hover:no-underline data-[state=open]:text-brand transition-colors">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed text-base pt-2">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                <div className="flex justify-start mt-12">
                    <Button onClick={() => setDialogOpen(true)} className="bg-brand hover:bg-brand-light text-white rounded-xl h-14 px-8 text-lg font-bold shadow-xl shadow-brand/20 transition-all hover:scale-105">
                        Задать свой вопрос
                    </Button>
                </div>
            </div>

            <ConsultationDialog open={dialogOpen} setOpen={setDialogOpen} />
        </section>
    );
}
