"use client"

import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = pathname.split('/')[1];
    const [isOpen, setIsOpen] = useState(false);

    const changeLanguage = (locale: string) => {
        const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
        router.push(newPath);
        setIsOpen(false);
    };

    const languages = [
        { code: 'en', name: 'English', flag: '/logos/english.svg' },
        { code: 'vi', name: 'Tiếng Việt', flag: '/logos/vietnamese.svg' },
        { code: 'cn', name: 'China', flag: '/logos/china.svg' },
        { code: 'kr', name: 'Korean', flag: '/logos/korea.svg' },
    ];

    return (
        <div className="relative">
            <button
                className="flex items-center gap-1"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Image
                    src={languages.find(lang => lang.code === currentLocale)?.flag || '/en-flag.png'}
                    alt="Current language"
                    width={24}
                    height={24}
                />
                <img src="/logos/dropdown.svg" className='hidden screen-992:block' />
                <span className='screen-992:hidden text-custom-arrow'>{isOpen ? '-' : '+'}</span>
            </button>

            {isOpen && (
                <ul className="absolute top-full mt-1 w-36 bg-white border rounded shadow-lg z-10 px-2 py-1">
                    {languages.map(lang => (
                        <li
                            key={lang.code}
                            className={`flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 ${currentLocale === lang.code ? 'font-bold' : ''
                                }`}
                            onClick={() => changeLanguage(lang.code)}
                        >
                            <Image src={lang.flag} alt={`${lang.name} flag`} width={24} height={24} className='object-contain' />
                            {lang.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}