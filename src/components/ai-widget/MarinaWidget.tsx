"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function MarinaWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
        { role: 'ai', text: 'Здравствуйте! Я Марина, AI-ассистент сервиса GoldFish life. Чем могу помочь?' }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!input.trim()) return;
        const userText = input.trim();
        setMessages(prev => [...prev, { role: 'user', text: userText }]);
        setInput("");
        setIsTyping(true);

        setTimeout(() => {
            let reply = "Я пока только учусь на основе нашей базы знаний. Оставьте заявку на сайте, и наш менеджер вам поможет!";
            const lower = userText.toLowerCase();

            if (lower.includes("тариф") || lower.includes("цен") || lower.includes("скольк")) {
                reply = "Мы предлагаем удобные тарифы: 'Попробуй' (2490₽), 'Стандарт' (12990₽) и 'Макси' (19990₽). И пакеты на месяц: Лайт (27990₽) и Про (39990₽). Списание идет только за время работы.";
            } else if (lower.includes("график") || lower.includes("врем") || lower.includes("когда")) {
                reply = "Команда дежурных ассистентов на связи и готова выполнять задачи с 09:00 до 21:00 ежедневно, без выходных!";
            } else if (lower.includes("услуг") || lower.includes("может") || lower.includes("делает")) {
                reply = "Мы закрываем личные поручения (поиск клининга, бронь отелей) и бизнес-задачи (ресерч, таблицы, контроль дедлайнов). Делегировать можно почти всё!";
            } else if (lower.includes("привет") || lower.includes("здрав")) {
                reply = "Добрый день! Рада видеть вас. Чем команда GoldFish может быть полезна сегодня?";
            }

            setMessages(prev => [...prev, { role: 'ai', text: reply }]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <>
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-2xl shadow-blue-500/50 z-50 transition-shadow"
                    >
                        <MessageCircle className="w-8 h-8" />
                    </motion.button>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="fixed bottom-6 right-6 w-80 md:w-96 h-[500px] bg-white/95 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white flex justify-between items-center shadow-md">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <Bot className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">AI-ассистент Марина</h3>
                                    <p className="text-xs text-blue-100 flex items-center gap-1.5 mt-0.5">
                                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                        В сети
                                    </p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors p-1">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 bg-slate-50/50">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] p-3.5 rounded-2xl text-[15px] leading-relaxed shadow-sm ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-sm' : 'bg-white border border-slate-200 text-slate-700 rounded-tl-sm'}`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-slate-200 text-slate-500 p-4 rounded-2xl rounded-tl-sm flex gap-1.5 items-center shadow-sm">
                                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-3 bg-white border-t border-slate-100 flex gap-2 w-full shrink-0 items-center box-border">
                            <Input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Спросите меня о сервисе..."
                                className="flex-1 rounded-full h-11 bg-slate-50 border-slate-200 focus-visible:ring-blue-500 min-w-0"
                            />
                            <Button onClick={handleSend} size="icon" className="rounded-full w-11 h-11 bg-blue-600 hover:bg-blue-700 shrink-0">
                                <Send className="w-4 h-4 ml-0.5" />
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
