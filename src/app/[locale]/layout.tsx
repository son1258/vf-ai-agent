import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import "./globals.css";
import NavBar from '@/components/header/NavBar';

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
                    <div className="fixed top-0 w-full z-10">
                        <NavBar />
                    </div>
                    <main>
                        {children}
                    </main>

                </NextIntlClientProvider>
            </body>
        </html>
    );
}

export async function generateStaticParams() {
    return ['en', 'vi'].map((locale) => ({ locale }));
}   