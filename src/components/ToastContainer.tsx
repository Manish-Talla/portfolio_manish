"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/useToast";
import { Info, CheckCircle, AlertTriangle, XCircle, X } from "lucide-react";

const icons = {
    info: <Info className="w-5 h-5 text-blue-400" />,
    success: <CheckCircle className="w-5 h-5 text-emerald-400" />,
    warning: <AlertTriangle className="w-5 h-5 text-amber-400" />,
    error: <XCircle className="w-5 h-5 text-rose-400" />,
};

const bgColors = {
    info: "border-blue-500/20 bg-blue-500/5",
    success: "border-emerald-500/20 bg-emerald-500/5",
    warning: "border-amber-500/20 bg-amber-500/5",
    error: "border-rose-500/20 bg-rose-500/5",
};

export default function ToastContainer() {
    const toasts = useToast();

    return (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-3 pointer-events-none w-full max-w-md px-6">
            <AnimatePresence>
                {toasts.map((t) => (
                    <motion.div
                        key={t.id}
                        initial={{ opacity: 0, y: -20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                        className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-2xl border glass shadow-2xl ${bgColors[t.type]}`}
                    >
                        <div className="flex-shrink-0">
                            {icons[t.type]}
                        </div>
                        <p className="text-sm font-medium text-white/90 flex-grow">
                            {t.message}
                        </p>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}
