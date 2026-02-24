export default function Footer() {
    return (
        <footer className="bg-brand text-slate-300 py-12 md:py-16 w-full">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6 opacity-90 hover:opacity-100 transition-opacity">
                            <img src="/img/logo.svg" alt="GoldFish Life Logo" className="h-12 w-auto" />
                        </div>
                        <p className="max-w-xs text-sm text-blue-100/60 leading-relaxed">
                            Ваш надежный онлайн-помощник для выполнения рутинных личных поручений и сложных бизнес-задач.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Контакты</h4>
                        <ul className="space-y-4 text-sm text-blue-100/80">
                            <li>
                                <a href="#" className="hover:text-white transition-colors bg-white/10 px-3 py-1.5 rounded-lg inline-flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-blue-400"></span> Telegram
                                </a>
                            </li>
                            <li><a href="tel:+74951119999" className="hover:text-white transition-colors block">+7 495 111-99-99</a></li>
                            <li><a href="mailto:mail@goldfish.life" className="hover:text-white transition-colors block">mail@goldfish.life</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Компания</h4>
                        <ul className="space-y-4 text-sm text-blue-100/80">
                            <li>ООО "Желание"</li>
                            <li><span className="text-blue-200 font-medium">Время работы:</span><br />Пн. - Вс.: 9:00 - 21:00</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-100/40">
                    <p>© {new Date().getFullYear()} GoldFish Life. Все права защищены.</p>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        <a href="#" className="hover:text-white transition-colors">Договор оферты</a>
                        <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
                        <a href="#" className="hover:text-white transition-colors">Кодекс этики</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
