"use client";

import { useTranslations } from "next-intl";
import LanguageSwitcher from "../LanguageSwitcher";
import { useState } from "react";

export default function NavBar() {
    const translate = useTranslations();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = [
        { text: translate("platform"), href: "#" },
        { text: translate("solutions"), href: "#" },
        { text: translate("industry"), href: "#" },
        { text: translate("pricing"), href: "#" },
        { text: translate("resources"), href: "#" },
        { text: translate("ai-agent"), href: "#" },
    ];

    return (
        <div className="flex items-center justify-between max-w-[90%] w-full font-medium gap-4">
            <div className="flex items-center justify-start w-[150px] h-[100px] object-contain">
                <img src="https://floatbot.ai/images/floatbot-logo-with-bird.svg" alt="logo" width={160} height={31} />
            </div>
            <div className="hidden md:flex flex-1">
                <ul className="flex items-center flex-row gap-4">
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className="hover:text-[#cc00ff] hover:underline cursor-pointer text-[10px] md:text-sm lg:text-base"
                        >
                            <a href={item.href}>{item.text}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="hidden md:flex items-center justify-end gap-4">
                <button className="hover:text-[#cc00ff] hover:underline cursor-pointer">
                    {translate("login")}
                </button>
                <button className="px-4 py-3 rounded-lg border-[0.5px] border-black/20 cursor-pointer">
                    {translate("signup")}
                </button>
                <div className="flex items-center justify-center px-4 py-3 rounded-lg border-[0.5px] border-black/20 cursor-pointer">
                    <LanguageSwitcher />
                </div>
            </div>
            <div className="md:hidden">
                <button onClick={toggleMenu} className="focus:outline-none">
                    <svg
                        className="w-8 h-8 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                        />
                    </svg>
                </button>
            </div>

            {isMenuOpen && (
                <div className="absolute top-[100px] left-0 w-full bg-white shadow-lg md:hidden z-50">
                    <ul className="flex flex-col items-center gap-4 py-4">
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                className="hover:text-[#cc00ff] hover:underline cursor-pointer w-full text-center py-2"
                            >
                                <a href={item.href} onClick={toggleMenu}>
                                    {item.text}
                                </a>
                            </li>
                        ))}
                        <li className="w-[80%] text-center py-2">
                            <button
                                className="hover:text-[#cc00ff] hover:underline cursor-pointer w-full"
                                onClick={toggleMenu}
                            >
                                {translate("login")}
                            </button>
                        </li>
                        <li className="w-[80%] text-center py-2">
                            <button
                                className="px-4 py-3 rounded-lg border-[0.5px] border-black/20 cursor-pointer w-full"
                                onClick={toggleMenu}
                            >
                                {translate("signup")}
                            </button>
                        </li>
                        <li className="w-[80%] text-center py-2">
                            <div className="flex items-center justify-center px-2 py-3 rounded-lg border-[0.5px] border-black/20 cursor-pointer">
                                <LanguageSwitcher />
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}