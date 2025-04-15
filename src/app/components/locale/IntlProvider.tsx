"use client";

import { ReactNode, useEffect, useState } from "react";
import { NextIntlClientProvider } from "next-intl";
import enMessages from "@/locales/en.json";
import viMessages from "@/locales/vi.json";

const messagesMap: Record<string, any> = {
    en: enMessages,
    vi: viMessages,
};

export default function IntlProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState<string | null>(null);

    const getLocale = () => {
        const savedLocale = localStorage.getItem("language");
        setLocale(savedLocale);
    }

    useEffect(() => {
        getLocale();
    }, []);

    if (!locale) return null;

    return (
        <NextIntlClientProvider locale={locale} messages={messagesMap[locale]}>
            {children}
        </NextIntlClientProvider>
    );
}