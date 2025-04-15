import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import "./globals.css";

export default async function RootLayout({
    children,
    params: { locale }
}: {
    children: ReactNode;
    params: { locale: string };
}) {
    const messages = (await import(`@/../messages/${locale}.json`)).default;

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

export async function generateStaticParams() {
    return ['en', 'vi'].map((locale) => ({ locale }));
}   