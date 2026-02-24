"use client";

import { motion } from "framer-motion";
import { Heart, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SocialProofSection() {
    const reviews = [
        { text: "Сервис виртуальных помощников «Goldfish» стал для меня почти неотъемлемой частью жизни. Серьезно!) Для решения задач в офисе ты всегда знаешь кому делегировать, но в жизни ассистентов категорически не хватало! Начиная от поиска гитары 70-х годов, заканчивая подбором места на День Святого Валентина – ребята стали выручалочкой.", author: "Алексей, Директор по связям с общественностью" },
        { text: "Внимание это главный ресурс 21 века. Каждая мелкая задача отвлекает от основных дел. Остановился на Gold Fish, потому что самые интересные условия стоимости и несгораемый баланс в личном кабинете. Платить за то, чтобы мое внимание не расфокусировалось, я готов всегда.", author: "Артём Юсов, Бизнесмен" },
        { text: "Мне подарила жена месяц Gold Fish life, сам бы вряд ли начал. Но ребята молодцы, помогали, задавали вопросы, показывали примеры — так за месяц сработались. Почти уже сам ничего не ищу в интернете.", author: "Максим, Предприниматель" },
        { text: "Я обратилась когда мне нужно было найти няню. Ребята взяли на себя самую нудную работу: собрали информацию, разместили объявление, прособеседовали и прислали табличку. Няня нашлась со второго звонка. Получилось очень бюджетно!", author: "Ксения Иванова, Врач реаниматолог" },
        { text: "Есть задачи, которые меня бесят. Например, не люблю разбираться со счетами или ходить за мясом. Прочитал книжку по тайм-менеджменту и начал пользоваться сервисом. Сейчас делегировал 23 задачи, на которые не хочу тратить силы.", author: "Марк, Ведущий" },
        { text: "Больше всего мне нравится возможность кидать голосовые сообщения, так как это сокращает время на подготовку задания. Практически никогда не бывает претензий к качеству выполнений.", author: "Дмитрий" },
        { text: "Делегирование «рыбкам» ряда задач позволило мне уделять больше времени себе и семье. В современном ритме для меня это очень актуально. Gold Fish life, почему я не нашла вас раньше?))", author: "Наталья" },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 w-full h-full flex flex-col justify-center py-24">
            {/* Charity Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-brand rounded-[2.5rem] p-8 md:p-12 mb-24 relative overflow-hidden flex flex-col md:flex-row items-center gap-10"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/20 to-brand-light/20 z-0" />

                <div className="w-full md:w-1/2 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="rounded-3xl overflow-hidden shadow-2xl relative border-4 border-white/10"
                    >
                        <img src="/img/charity_child.png" alt="Благотворительность" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 max-h-[400px]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent pointer-events-none" />
                        <Heart className="absolute bottom-6 right-6 w-12 h-12 text-rose-400 animate-pulse drop-shadow-lg" fill="currentColor" />
                    </motion.div>
                </div>

                <div className="w-full md:w-1/2 relative z-10 text-left">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Помогать — это просто</h2>
                    <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                        Используя промокод <span className="font-bold text-white bg-white/20 px-4 py-1.5 rounded-xl border border-white/30 drop-shadow-sm ml-2 mr-2">DOBRO</span>, вы спасаете детские жизни.
                        <br /><br />
                        Мы перечисляем 5% от стоимости каждого приобретенного тарифа в Благотворительный Фонд «Провидение».
                    </p>
                    <Button className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-8 py-6 text-lg shadow-xl shadow-rose-500/30 transition-all hover:scale-105">
                        Узнать больше о фонде
                    </Button>
                </div>
            </motion.div>

            {/* Reviews Section */}
            <div className="mb-16 md:flex justify-between items-end gap-8 relative z-10 text-left">
                <div className="md:w-3/4">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                        Что говорят наши <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-500">постоянные клиенты</span>
                    </h2>
                    <p className="text-xl text-slate-600">
                        Более <span className="font-bold text-brand">500</span> предпринимателей, руководителей и занятых людей уже доверили нам свои задачи.
                    </p>
                </div>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 w-full">
                {reviews.map((review, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (idx % 3) * 0.1 }}
                        className="glass break-inside-avoid rounded-3xl p-8 flex flex-col justify-between hover:shadow-2xl transition-all border border-slate-100 hover:border-brand/30 group bg-white/60"
                    >
                        <div>
                            <Quote className="w-10 h-10 text-brand/20 mb-4 group-hover:text-brand transition-colors" />
                            <p className="text-slate-600 leading-relaxed mb-6 italic">"{review.text}"</p>
                        </div>
                        <div className="font-bold text-slate-900 pt-4 border-t border-slate-100 mt-2">{review.author}</div>
                    </motion.div>
                ))}
            </div>

            <div className="text-center">
                <Button className="bg-brand hover:bg-brand-light text-white rounded-full px-8 py-6 text-lg shadow-xl shrink-0">
                    Написать отзыв
                </Button>
            </div>
        </div>
    );
}
