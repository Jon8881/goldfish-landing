"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight } from "lucide-react";

export default function TariffDetailsDialog({ open, setOpen, tariff }: { open: boolean, setOpen: (open: boolean) => void, tariff: any }) {
    if (!tariff) return null;

    const features = [
        "Личный кабинет для постановки задач",
        "Приоритетная поддержка менеджера",
        "Гарантия конфиденциальности (NDA)",
        "Еженедельная отчетность по часам",
        "Команда профильных специалистов",
    ];

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[500px] glass-brand rounded-3xl p-0 border-white/20 shadow-2xl z-50 text-white overflow-hidden">
                <div className="bg-brand-dark/50 p-6 sm:p-8 flex flex-col gap-2">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-bold tracking-widest uppercase text-blue-300">Тариф</span>
                        <h2 className="text-3xl font-extrabold text-white">{tariff.name}</h2>
                    </div>
                    <div className="text-xl text-blue-100/80 mb-4">{tariff.desc || "Пакет часов ассистента"}</div>

                    <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-extrabold text-white">{tariff.price}</span>
                        <span className="text-lg text-blue-200/60">/ {tariff.hours ? "мес" : "пополнение"}</span>
                    </div>
                    <div className="inline-flex w-fit px-3 py-1 bg-white/10 rounded-full text-sm font-medium text-blue-200">
                        Выходит {tariff.rate}
                    </div>
                </div>

                <div className="p-6 sm:p-8 pt-6">
                    <h3 className="font-bold text-lg mb-4 text-white/90">Что включено:</h3>
                    <ul className="space-y-3 mb-8">
                        {features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                                <span className="text-blue-50/90 leading-relaxed">{feature}</span>
                            </li>
                        ))}
                        {tariff.hours && (
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                                <span className="text-blue-50/90 font-medium">Ровно {tariff.hours} часов чистого времени работы</span>
                            </li>
                        )}
                    </ul>

                    <div className="flex gap-3">
                        <Button
                            className="flex-1 bg-white text-brand hover:bg-slate-100 rounded-xl h-12 shadow-lg hover:shadow-xl transition-all font-semibold"
                            onClick={() => {
                                setOpen(false);
                                // In a real scenario, this might directly open the CartDrawer
                                // but for now we just close the details modal
                            }}
                        >
                            Отлично, беру <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                        <DialogClose asChild>
                            <Button variant="outline" className="flex-1 h-12 rounded-xl border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
                                Назад
                            </Button>
                        </DialogClose>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
