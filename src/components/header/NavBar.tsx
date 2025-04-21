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
        <div className="flex items-center justify-between 2xl:px-[88px] px-3 py-[12px] xl:py-[0] w-full gap-4 font-[600] leading-[21px] border-[0.25px] border-black/20 shadow bg-white">
            <div className="flex items-center xl:gap-8 gap-4">
                <div className="flex items-center justify-start xl:w-[160px] xl:h-[102px] object-contain">
                    <img src="https://floatbot.ai/images/floatbot-logo-with-bird.svg" alt="logo" width={160} height={31} loading="lazy" />
                </div>
                <div className="hidden lg:block h-[40px] border-[0.25px]"></div>
                <div className="hidden lg:flex flex-1">
                    <ul className="flex items-center flex-row xl:gap-8 lg:gap-6 gap-4">
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                className="hover:text-[#f46177] hover:underline cursor-pointer lg:text-[12px] xl:text-sm"
                            >
                                <a href={item.href}>{item.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="hidden lg:flex items-center justify-end gap-4 lg:text-[10px] xl:text-[12px] 2xl:text-sm">
                <div className="lg:px-[18px] lg:py-[10px] 2xl:px-6 2xl:py-4 bg-gradient-to-r from-[#f46177] to-[#f8b688] rounded-[12px] text-white">
                    <button>{translate("schedule-a-demo")}</button>
                </div>
                <div className="h-[40px] border-[0.25px]"></div>
                <button className="hover:text-[#f46177] hover:underline cursor-pointer">
                    {translate("login")}
                </button>
                <button className="lg:px-[18px] lg:py-[10px] 2xl:px-6 2xl:py-4 rounded-lg border-[0.5px] border-black/20 cursor-pointer">
                    {translate("signup")}
                </button>
                <div className="flex items-center justify-center lg:px-[18px] lg:py-[10px] 2xl:px-6 2xl:py-4 rounded-lg border-[0.5px] border-black/20 cursor-pointer">
                    <LanguageSwitcher />
                </div>
            </div>
            <div className="lg:hidden">
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
                <div className="lg:hidden absolute top-[60px] right-0 w-[96%] bg-white">
                    <ul className="flex flex-col py-4 shadow-xl z-50 text-[16px] font-[400] leading-[24px] rounded-[10px] border-[1px]">
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                className="hover:text-[#f46177] hover:bg-[#6c727869] cursor-pointer w-full py-[2px] px-[10px] mx-[5px] my-[2px] text-[12px] rounded-[10px]"
                            >
                                <a href={item.href} onClick={toggleMenu}>
                                    {item.text}
                                </a>
                            </li>
                        ))}
                        <li>
                            <button className="py-[2px] px-[10px] mx-[5px] my-[2px] text-[12px] bg-gradient-to-r from-[#f46177] to-[#f8b688] hover:[background:#6c727869] rounded-[20px] text-white cursor-pointer">{translate("schedule-a-demo")}</button>
                        </li>
                        <li className="hover:text-[#f46177] hover:bg-[#6c727869] cursor-pointer w-full py-[2px] px-[10px] mx-[5px] my-[2px] text-[12px] rounded-[10px] cursor-pointer">
                            {translate("login")}
                        </li>
                        <li>
                            <button className="hover:bg-[#6c727869] cursor-pointer py-[10px] px-[25px] mx-[5px] my-[2px] text-[14px] font-[600] border-[1px] leading-[21px] border-[#6c727869] rounded-[12px]">{translate("signup")}</button>
                        </li>
                        <li>
                            <button className="py-[2px] px-[10px] mx-[5px] my-[2px]">
                                <LanguageSwitcher />
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}