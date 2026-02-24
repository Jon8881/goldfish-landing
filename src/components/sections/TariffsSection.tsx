"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Info, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import CartDrawer from "@/components/cart/CartDrawer";
import TariffDetailsDialog from "@/components/dialogs/TariffDetailsDialog";

export default function TariffsSection() {
    const [cartOpen, setCartOpen] = useState(false);
    const [detailsOpen, setDetailsOpen] = useState(false);
    const [selectedTariff, setSelectedTariff] = useState<any>(null);

    const handleSelect = (tariff: any) => {
        setSelectedTariff(tariff);
        setCartOpen(true);
    };

    const handleDetails = (tariff: any) => {
        setSelectedTariff(tariff);
        setDetailsOpen(true);
    };

    const monthlyTariffs = [
        { name: "Лайт", price: "27 990 ₽", hours: 40, rate: "700 ₽/час", popular: false },
        { name: "Про", price: "39 990 ₽", hours: 60, rate: "666 ₽/час", popular: true },
    ];

    const packages = [
        { name: "Попробуй", price: "2 490 ₽", rate: "996 ₽/час", desc: "Минимальный депозит для теста", popular: false },
        { name: "Стандарт", price: "12 990 ₽", rate: "866 ₽/час", desc: "Оптимально для мелких задач", popular: true },
        { name: "Макси", price: "19 990 ₽", rate: "832 ₽/час", desc: "Максимально выгодно", popular: false },
    ];

    const addons = [
        { name: "Закрепление ассистента", price: "+ 14 990 ₽", desc: "Выделенный помощник только для вас", popular: false },
        { name: "Подарочный сертификат", price: "3 000 ₽", desc: "Оплаченные 3 часа работы. Идеально для подарка!", popular: false },
    ];

    return (
        <section className="py-24 relative z-10 w-full h-full">
            <div className="max-w-7xl mx-auto px-4 pb-32 text-left">
                <div className="mb-16 md:flex justify-between items-end gap-8">
                    <div className="md:w-3/4">
                        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                            Тарифы на <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-500">услуги</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-xl">
                            Остаток средств не сгорает и переносится на следующий месяц. Чем больше сумма пополнения, тем выгоднее час работы.
                        </p>
                    </div>
                </div>

                {/* Пакеты на месяц */}
                <h3 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-brand pl-4">Пакеты на месяц</h3>
                <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-4xl text-left">
                    {monthlyTariffs.map((tariff, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${tariff.popular ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-900/20 md:scale-105 md:hover:scale-110" : "glass border-slate-200 hover:border-brand/40"}`}
                        >
                            {tariff.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                    Хит продаж
                                </div>
                            )}
                            <h4 className="text-2xl font-bold mb-2">{tariff.name}</h4>
                            <div className="flex items-end gap-2 mb-6">
                                <span className="text-4xl font-extrabold">{tariff.price}</span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <Check className={`w-5 h-5 ${tariff.popular ? "text-blue-200" : "text-blue-600"}`} />
                                    <span className={tariff.popular ? "text-blue-50" : "text-slate-600"}>{tariff.hours} часов работы в месяц</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check className={`w-5 h-5 ${tariff.popular ? "text-blue-200" : "text-blue-600"}`} />
                                    <span className={tariff.popular ? "text-blue-50" : "text-slate-600"}>Всего {tariff.rate}</span>
                                </li>
                            </ul>
                            <div className="flex gap-2">
                                <Button
                                    onClick={() => handleSelect(tariff)}
                                    className={`flex-1 rounded-xl h-12 text-base ${tariff.popular ? "bg-white text-brand hover:bg-slate-50" : "bg-brand text-white hover:bg-brand-light"}`}
                                >
                                    Выбрать
                                </Button>
                                <button
                                    onClick={() => handleDetails(tariff)}
                                    className={`w-12 h-12 flex items-center justify-center rounded-xl p-0 border transition-colors ${tariff.popular ? "border-white/40 text-white hover:bg-white/20" : "border-brand/20 text-brand hover:bg-brand/5"}`}
                                >
                                    <Info className="w-5 h-5" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Разовые пакеты */}
                <h3 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-brand pl-4">Разовые и стартовые пакеты</h3>
                <div className="grid md:grid-cols-3 gap-6 w-full text-left">
                    {packages.map((pkg, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative bg-white rounded-2xl p-6 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-brand/20"
                        >
                            {pkg.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-3 py-0.5 rounded-full text-xs font-bold">
                                    Оптимальный
                                </div>
                            )}
                            <h4 className="text-xl font-bold text-slate-900 mb-1">{pkg.name}</h4>
                            <p className="text-sm text-slate-500 mb-4 h-10">{pkg.desc}</p>
                            <div className="text-3xl font-extrabold text-slate-900 mb-4">{pkg.price}</div>
                            <div className="px-3 py-1.5 bg-slate-100 rounded-lg text-sm font-medium text-slate-600 inline-block mb-6">
                                Выходит {pkg.rate}
                            </div>
                            <div className="flex gap-2">
                                <Button onClick={() => handleSelect(pkg)} variant={pkg.popular ? "default" : "outline"} className={`flex-1 rounded-xl h-11 ${pkg.popular ? "bg-brand hover:bg-brand-light text-white" : "border-brand/20 text-brand"}`}>
                                    Пополнить
                                </Button>
                                <Button onClick={() => handleDetails(pkg)} variant="outline" className={`w-11 h-11 p-0 rounded-xl ${pkg.popular ? "border-brand/20 text-brand" : "border-brand/20 text-brand"}`}>
                                    <Info className="w-5 h-5" />
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Дополнительные опции */}
                <h3 className="text-2xl font-bold text-slate-900 mb-8 mt-24 border-l-4 border-brand pl-4">Дополнительные опции</h3>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl text-left">
                    {addons.map((addon, idx) => (
                        <motion.div
                            key={`addon-${idx}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass border-slate-200 rounded-3xl p-6 flex flex-col sm:flex-row gap-4 items-center justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-brand/30"
                        >
                            <div>
                                <h4 className="text-xl font-bold text-slate-900 mb-1">{addon.name}</h4>
                                <p className="text-sm text-slate-500">{addon.desc}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-2xl font-extrabold text-brand whitespace-nowrap">{addon.price}</span>
                                <Button onClick={() => handleSelect(addon)} size="icon" className="w-12 h-12 rounded-full bg-slate-100 text-brand hover:bg-brand hover:text-white transition-colors shrink-0">
                                    <Plus className="w-5 h-5" />
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <CartDrawer open={cartOpen} setOpen={setCartOpen} selectedTariff={selectedTariff} />
                <TariffDetailsDialog open={detailsOpen} setOpen={setDetailsOpen} tariff={selectedTariff} />
            </div>
        </section>
    );
}
