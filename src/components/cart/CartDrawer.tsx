"use client";

import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ArrowRight } from "lucide-react";

export default function CartDrawer({ open, setOpen, selectedTariff }: { open: boolean, setOpen: (open: boolean) => void, selectedTariff: any }) {
    if (!selectedTariff) return null;

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerContent className="bg-white/90 backdrop-blur-xl border-t border-slate-200 z-50">
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle className="text-2xl font-bold flex items-center gap-2">
                            <ShoppingBag className="w-6 h-6 text-blue-600" />
                            Ваш заказ
                        </DrawerTitle>
                        <DrawerDescription>Оформление покупки тарифа ассистента.</DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                        <div className="flex items-center justify-between glass p-4 rounded-xl mb-4">
                            <div>
                                <p className="font-semibold text-slate-900">Тариф "{selectedTariff.name}"</p>
                                <p className="text-sm text-slate-500">{selectedTariff.hours ? `${selectedTariff.hours} часов` : selectedTariff.desc}</p>
                            </div>
                            <div className="font-bold text-lg text-slate-900">{selectedTariff.price}</div>
                        </div>
                    </div>
                    <DrawerFooter>
                        <Button className="w-full text-lg h-14 rounded-xl bg-blue-600 hover:bg-blue-700 shadow-lg" onClick={() => { alert("Имитация перехода к оплате!"); setOpen(false); }}>
                            Оплатить <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <DrawerClose asChild>
                            <Button variant="outline" className="w-full h-12 rounded-xl">Отмена</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
