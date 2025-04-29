"use client";

import { useTranslations } from "next-intl";
import LanguageSwitcher from "../LanguageSwitcher";
import { useEffect, useState } from "react";
import { ItemsNav } from "@/shared/constants";

export default function NavBar() {
    const translate = useTranslations();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [index, setIndex] = useState(1);
    const [visible, setVisible] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleCloseBtn = () => {
        setVisible(!visible);
    }

    const menuItems = [
        { id: 1, text: translate("vision"), href: "#" },
        { id: 2, text: translate("solutions"), href: "#" },
        { id: 3, text: translate("market_size_vn"), href: "#" },
        { id: 4, text: translate("company"), href: "#" },
        { id: 5, text: translate("profit_sharing"), href: "#" },
        { id: 6, text: translate("choose_model"), href: "#" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % ItemsNav.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full font-inter relative">
            <div>
                {visible && (
                    <div className="h-custom-60 md:h-auto relative px-3 w-full leading-custom-18 bg-[#1a1a1a] text-white text-center py-3 md:py-custom-13 screen-992:py-custom-14">
                        <div className="font-[500] !leading-custom-18 text-custom-10 screen-425:text-xs md:text-sm screen-992:text-xs screen-1120:text-sm w-[98%] text-center flex items-center justify-center mr-custom-24">
                            <p>{ItemsNav[index].text} <span className="!leading-custom-18 ml-custom-14 font-[700] text-[#f46177] underline md:text-sm text:xs">{ItemsNav[index].more}</span></p>
                        </div>
                        <button className="absolute right-[10px] top-[10px] px-custom-6 py-custom-1 text-2xl leading-custom-18" onClick={handleCloseBtn}>×</button>
                    </div>
                )}
                <div className="relative screen-1600:px-custom-88 screen-1400:px-5 screen-1200:px-3 screen-992:py-0 screen-576:px-5 py-custom-15 px-0 w-full leading-custom-21 border-b-[0.25px] border-[#dbdee9] shadow-nav-shadow bg-white">
                    <div className="w-full px-3 flex items-center justify-between">
                        <div>
                            <div className="w-full flex flex-row items-center justify-center h-[31px]">
                                <div className="w-20">
                                    <img src="/logos/logo.jpg" alt="logo" className="object-fit" />
                                </div>
                                <p className="font-[700] text-2xl text-[#b34cef] mt-1">InsAI</p>
                            </div>
                        </div>
                        <div className="border-r-[1px] border-[#dce4e8] screen-1400:top-[25px] screen-1400:h-custom-50 left-[-20px]
                            screen-1283:top-[15px] screen-1120:top-[10px] screen-992:top-[10px] screen-992:h-10">
                        </div>
                        <div className="screen-992:w-[80%] screen-1120:w-[82%] screen-1283:w-[86%] relative font-inter ">
                            <div className="hidden screen-992:block">
                                <nav className="block">
                                    <ul className="flex items-center justify-between m-0 p-0">
                                        <ul className="w-[60%] inline-flex">
                                            {menuItems.map((item, index) => (
                                                <li key={index} className="screen-1200:mx-custom-10 screen-1140:mx-2 screen-992:mx-custom-6 mx-custom-2">
                                                    <p className="text-center font-[600] screen-1400:text-sm screen-1400:leading-custom-21 screen-1283:leading-custom-18 screen-1283:text-xs 
                                                        screen-992:leading-custom-15 screen-992:text-custom-10 relative screen-1400:py-10 py-custom-22 px-custom-2 hover:text-[#b34cef] cursor-pointer
                                                        hover:after:absolute hover:after:w-1/3 hover:after:h-custom-2 hover:after:bg-[#b34cef] screen-1400:hover:after:bottom-8 
                                                        screen-992:hover:after:bottom-4 hover:after:left-1/2 hover:after:transform hover:after:-translate-x-1/2 
                                                        hover:after:duration-300 hover:after:opacity-0 hover:hover:after:opacity-100 hover:after:transition-all ">
                                                        {item.text}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="w-[48%] flex items-center justify-end font-[600] screen-1400:text-sm screen-1283:text-xs screen-992:text-custom-10 screen-1400:leading-custom-21 screen-1283:leading-custom-18 screen-992:leading-custom-15 ">
                                            <div className="relative mr-[6%] screen-1650:ml-[10%] screen-1550:ml-[10%] screen:1400:ml-0 screen:1325:ml-[5%] screen-1283:ml-[4%] screen-1120:ml-[3%] screen-992:ml-[2%]">
                                                <button className="screen-1400:py-custom-15 screen-1283:px-6 screen-1283:py-3 screen-992:px-custom-18 screen-992:py-custom-10
                                                        bg-gradient-to-r from-[#8012e4] to-[#cf6cfb] text-white rounded-[14px]">
                                                    {translate("schedule_a_demo")}
                                                </button>
                                                <div className="border-r-[1px] border-[#dce4e8] absolute screen-1400:h-custom-50 right-[-18px] screen-992:h-10 top-0">
                                                </div>
                                            </div>
                                            <div className="mx-custom-10">
                                                <button className="text-center font-[600] screen-1400:text-sm screen-1400:leading-custom-21 screen-1283:leading-custom-18 screen-1283:text-xs 
                                                        screen-992:leading-custom-15 screen-992:text-custom-10 relative screen-1400:py-10 py-custom-22 px-custom-2 hover:text-[#b34cef] cursor-pointer
                                                        hover:after:absolute hover:after:w-1/3 hover:after:h-custom-2 hover:after:bg-[#b34cef] screen-1400:hover:after:bottom-8 
                                                        screen-992:hover:after:bottom-4 hover:after:left-1/2 hover:after:transform hover:after:-translate-x-1/2 
                                                        hover:after:duration-300 hover:after:opacity-0 hover:hover:after:opacity-100 hover:after:transition-all">
                                                    {translate("login")}
                                                </button>
                                            </div>
                                            <div className="mx-custom-10">
                                                <button className="screen-992:px-custom-18 screen-992:py-custom-10 screen-1283:px-6 screen-1283:py-3 screen-1400:py-custom-15 border-[1px] border-[#dce4e8] rounded-[14px]">
                                                    {translate("signup")}
                                                </button>
                                            </div>
                                            <div className="mx-custom-10 screen-992:px-custom-18 screen-992:py-custom-6 screen-1283:px-6 screen-1283:py-custom-9 screen-1400:py-custom-14 border-[1px] border-[#dce4e8] rounded-[14px]">
                                                <LanguageSwitcher />
                                            </div>
                                        </div>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="absolute right-0 top-0 screen-992:hidden">
                            <div className="p-custom-5 cursor-pointer" onClick={toggleMenu}>
                                <div className="mx-custom-5 mt-custom-5 mb-custom-6 rounded-[4px] bg-[#b34cef]">
                                    <div className="px-custom-10 py-custom-7 leading-custom-18">
                                        <span className="flex flex-col items-center justify-center h-custom-14 w-custom-18">
                                            <span className="block w-custom-18 h-custom-2 bg-white shadow-menu-icon-shadow rounded-[1px]"></span>
                                            <span className="mt-custom-3 block w-custom-18 h-custom-2 bg-white shadow-menu-icon-shadow rounded-[1px]"></span>
                                            <span className="mt-custom-3 block w-custom-18 h-custom-2 bg-white shadow-menu-icon-shadow rounded-[1px]"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {isMenuOpen && (
                            <div className="lg:hidden absolute top-[60px] right-0 w-[96%] bg-white">
                                <ul className="flex flex-col py-4 shadow-xl z-50 text-base font-[400] leading-custom-24 rounded-[10px] border-[1px]">
                                    {menuItems.map((item, index) => (
                                        <li
                                            key={index}
                                            className="hover:text-[#f46177] hover:bg-[#6c727869] cursor-pointer w-full py-custom-2 px-custom-10 mx-custom-5 my-custom-2 text-sm rounded-[10px]"
                                        >
                                            <a href={item.href} onClick={toggleMenu}>
                                                {item.text}  <span className='screen-992:hidden'>+</span>
                                            </a>
                                        </li>
                                    ))}
                                    <li>
                                        <button className="py-custom-2 px-custom-10 mx-custom-5 my-custom-2 text-sm bg-gradient-to-r from-[#8012e4] to-[#cf6cfb] rounded-[20px] text-white cursor-pointer">
                                            {translate("schedule-a-demo")}
                                        </button>
                                    </li>
                                    <li className="py-custom-2 px-custom-10 mx-custom-5 my-custom-2 text-xs hover:text-[#f46177] hover:bg-[#6c727869] cursor-pointer w-full rounded-[10px] cursor-pointer">
                                        {translate("login")}
                                    </li>
                                    <li>
                                        <button className="hover:bg-[#6c727869] cursor-pointer py-custom-10 px-custom-25 mx-custom-5 my-custom-2 text-sm font-[600] border-[1px] leading-custom-21 border-[#6c727869] rounded-xl">{translate("signup")}</button>
                                    </li>
                                    <li>
                                        <button className="py-custom-2 px-custom-10 mx-custom-5 my-custom-2">
                                            <LanguageSwitcher />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

    );
}