"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function LanguageSwitcher() {
    const [locale, setLocale] = useState("en");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const savedLang = localStorage.getItem("language") || "en";
        setLocale(savedLang);
    }, []);

    const switchLanguage = (lang: string) => {
        if (lang !== locale) {
            localStorage.setItem("language", lang);
            setLocale(lang);
            window.location.reload();
        }
    };

    const options = [
        {
            value: "en",
            label: "English",
            icon: "/logos/english.svg"
        },
        {
            value: "vi",
            label: "Tiếng Việt",
            icon: "/logos/vietnamese.svg"
        }
    ];

    const selected = options.find(opt => opt.value === locale);

    return (
        <div style={{ position: "relative", width: 120, userSelect: "none" }}>
            <div
                onClick={() => setOpen(!open)}
                className="flex items-center justify-center gap-1 text-base font-bold cursor-pointer"
            >
                {selected && (
                    <>
                        <Image src={selected.icon} width={26} height={26} alt={selected.label} />
                        {selected.label}
                    </>
                )}
            </div>

            {open && (
                <ul
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        width: "100%",
                        background: "white",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                        padding: 0,
                        margin: 0,
                        listStyle: "none",
                        borderRadius: 4,
                        overflow: "hidden",
                        zIndex: 999
                    }}
                >
                    {options.map(option => (
                        <li
                            key={option.value}
                            onClick={() => {
                                switchLanguage(option.value);
                                setOpen(false);
                            }}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 4,
                                padding: "6px 8px",
                                cursor: "pointer",
                                fontSize: "11pt",
                                backgroundColor: option.value === locale ? "#f0f0f0" : "white"
                            }}
                        >
                            <Image src={option.icon} width={26} height={26} alt={option.label} />
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
