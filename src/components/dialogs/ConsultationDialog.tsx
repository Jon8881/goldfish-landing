"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ConsultationDialog({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px] glass rounded-3xl p-8 border-white/40 shadow-2xl z-50">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-slate-900">Бесплатная консультация</DialogTitle>
                    <DialogDescription className="text-slate-600 text-base">
                        Оставьте свои контакты, и наш менеджер свяжется с вами для обсуждения задач.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-6 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name" className="text-slate-700">Имя</Label>
                        <Input id="name" placeholder="Как к вам обращаться?" className="h-12 rounded-xl bg-white/50 border-white/60 focus-visible:ring-blue-500 shadow-sm" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phone" className="text-slate-700">Телефон</Label>
                        <Input id="phone" placeholder="+7 (999) 000-00-00" className="h-12 rounded-xl bg-white/50 border-white/60 focus-visible:ring-blue-500 shadow-sm" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="time" className="text-slate-700">Удобное время для звонка</Label>
                        <Input id="time" placeholder="Например, 14:00 - 16:00" className="h-12 rounded-xl bg-white/50 border-white/60 focus-visible:ring-blue-500 shadow-sm" />
                    </div>
                </div>
                <Button className="w-full h-12 rounded-xl bg-slate-900 text-white hover:bg-slate-800 shadow-lg text-base" onClick={() => { alert("Заявка успешно отправлена!"); setOpen(false); }}>
                    Отправить заявку
                </Button>
            </DialogContent>
        </Dialog>
    );
}
