"use client";

import { useState, useCallback, useEffect } from 'react';

type ToastType = 'info' | 'success' | 'warning' | 'error';

interface Toast {
    id: string;
    message: string;
    type: ToastType;
}

let subscribers: Function[] = [];
let toasts: Toast[] = [];

const notify = () => {
    subscribers.forEach(sub => sub([...toasts]));
};

export const toast = {
    show: (message: string, type: ToastType = 'info') => {
        const id = Math.random().toString(36).substring(2, 9);
        toasts.push({ id, message, type });
        notify();

        setTimeout(() => {
            toasts = toasts.filter(t => t.id !== id);
            notify();
        }, 4000);
    }
};

export function useToast() {
    const [currentToasts, setCurrentToasts] = useState<Toast[]>(toasts);

    useEffect(() => {
        const sub = (newToasts: Toast[]) => setCurrentToasts(newToasts);
        subscribers.push(sub);
        return () => {
            subscribers = subscribers.filter(s => s !== sub);
        };
    }, []);

    return currentToasts;
}
