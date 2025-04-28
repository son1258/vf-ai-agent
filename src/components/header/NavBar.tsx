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
        { id: 1, text: translate("platform"), href: "#" },
        { id: 2, text: translate("solutions"), href: "#" },
        { id: 3, text: translate("industry"), href: "#" },
        { id: 4, text: translate("pricing"), href: "#" },
        { id: 5, text: translate("resources"), href: "#" },
        { id: 6, text: translate("ai-agents"), href: "#" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % ItemsNav.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full font-inter relative">
            {visible && (
                <div className="relative px-3 w-full !leading-custom-18 bg-[#1a1a1a] text-white text-center py-3 md:py-custom-13 screen-992:py-custom-14 px-headder-noti">
                    <div className="font-[500] text-sm screen-992:text-xs screen-1120:text-sm w-full flex items-center justify-center mr-custom-24">
                        <span className="!leading-custom-18">{ItemsNav[index].text}</span>
                        <p className="!leading-custom-18 ml-custom-14 font-[700] text-[#f46177] underline text-sm">{ItemsNav[index].more}</p>
                    </div>
                    <button className="absolute right-[10px] top-[10px] px-custom-6 py-custom-1 text-2xl !leading-custom-18" onClick={handleCloseBtn}>×</button>
                </div>
            )}
            <div className="relative !leading-custom-21 screen-1600:px-custom-88 screen-1400:px-5 screen-1200:px-custom-15 screen-992:py-0 screen-576:px-5 screen-576:py-custom-15 py-custom-15 w-full font-[600] border-b-[1px] border-b-[#dbdee9] shadow-nav-shadow bg-white flex flex-wrap">
                <div className="px-3 w-full">
                    <div className="flex items-center justify-between">
                        <div className="w-40 flex flex-row items-center justify-center h-[31px]">
                            <div className="w-20">
                                <img src="/logos/logo.jpg" alt="logo" className="object-fit" />
                            </div>
                            <p className="font-[700] text-2xl text-[#b34cef] mt-1">InsAI</p>
                        </div>
                        <div className="screen-992:w-[80%] screen-1120:w-[82%] screen-1283:w-[86%] relative before:border-r-[1px] before:border-[#dce4e8] before:absolute
                                            screen-1400:before:top-[25px] screen-1400:before:h-custom-50 screen-1400:before:left-[-18px]
                                            screen-1283:before:top-[15px] screen-1120:before:top-[10px] screen-1120:before:left-0
                                            screen-992:before:top-[10px] screen-992:before:h-custom-40 screen-992:before:left-[-10px]">
                            <div className="hidden screen-992:block">
                                <ul className="m-0 p-0 flex items-center flex-row justify-evenly font-[600] screen-1283:text-sm screen-1120:text-xs screen-992:text-custom-10 screen-992:leading-custom-15 screen-1120:leading-custom-18 screen-1283:leading-custom-21">
                                    {menuItems.map((item, index) => (
                                        <li key={index}
                                            className="screen-1400:mx-1 screen-1325:mx-custom-5 screen-1283:mx-1 screen-1120:mx-custom-2 screen-992:mx-0"
                                        >
                                            <p className="relative screen-1400:py-10 py-custom-22 px-custom-2 hover:text-[#f46177] cursor-pointer
                                                    hover:after:absolute hover:after:w-1/3 hover:after:h-custom-2 hover:after:bg-[#f46177] screen-1400:hover:after:bottom-8 screen-992:hover:after:bottom-4
                                                    hover:after:left-1/2 hover:after:transform hover:after:-translate-x-1/2 hover:after:transition-all hover:after:duration-300 hover:after:opacity-0 hover:hover:after:opacity-100">
                                                {item.text} {item.id == 6 ? <span className="!leading-custom-15 text-custom-10 px-custom-5 py-custom-2 rounded-[50px] ml-custom-5 bg-[#f46177] mb-custom-2 text-white">New</span> : ''}
                                            </p>
                                        </li>
                                    ))}
                                    <li className="relative after:absolute after:border-r-[1px] after:border-[#dce4e8] screen-1400:py-custom-22 screen-1400:pr-custom-2 screen-1400:pl-custom-1.5
                                            screen-1650:after:right-[-18px] screen-1400:after:top-[25px] screen-1400:after:h-custom-50
                                            screen-1283:ml-[4%] screen-1283:after:top-1 after:h-custom-40 
                                            screen-1140:after:right-[-16px] screen-992:after:right-[-12px] after:top-0 
                                            screen-1650:ml-[16%] screen-1550:ml-[15%] screen-1400:ml-[10%] screen-1325:ml-[7%] 
                                            screen-1120:ml-[3%] screen-992:ml-[2%] mr-[1%]">
                                        <div className="screen-1400:ml-custom-2">
                                            <button className="screen-1283:px-6 screen-1400:py-custom-15 screen-1283:py-3
                                                screen-992:px-custom-18 screen-992:py-custom-10 bg-gradient-to-r from-[#f46177] to-[#f8b688] rounded-[14px] text-white">
                                                {translate("schedule-a-demo")}
                                            </button>
                                        </div>
                                    </li>
                                    <li className="mx-1">
                                        <p className="screen-1400:py-10 py-custom-22 px-custom-2 screen-1400:mr-1">{translate("login")}</p>
                                    </li>
                                    <li className="mx-1 screen-1283:px-6 screen-1400:py-custom-15 screen-1283:py-3 screen-992:px-custom-18 
                                            screen-992:py-custom-10 rounded-[14px] border-[1px] border-[#dce4e8]">
                                        <button>{translate("signup")}</button>
                                    </li>
                                    <li className="mx-1 screen-1283:px-6 screen-1400:py-custom-15 screen-1283:py-3 screen-1120:py-custom-7 screen-992:px-custom-18 
                                            screen-992:py-custom-6 rounded-[14px] border-[1px] border-[#dce4e8]">
                                        <LanguageSwitcher />
                                    </li>
                                </ul>
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
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="screen-992:hidden absolute w-[97%] bg-white h-[50vh] rounded-[10px] inset-shadow-2xs right-0 mt-10">
                        <div className="mt-[6%] mx-1">
                            <ul className="flex flex-col shadow-xl text-[16px] font-[400] leading-[24px] rounded-[10px] border-[1px] bg-white shadow-menu-list-shadow">
                                {menuItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className="hover:text-[#f46177] hover:bg-[#6c727869] cursor-pointer w-[99%] py-[2px] px-[10px] mx-[5px] my-[2px] text-[12px] rounded-[10px]"
                                    >
                                        <a href={item.href} onClick={toggleMenu}>
                                            {item.text} {item.id == 6 ? <span className="!leading-custom-15 text-custom-10 px-custom-5 py-custom-2 rounded-[50px] ml-custom-5 bg-[#f46177] mb-custom-2 text-white">New</span> : ''} <span className='text-custom-arrow'>+</span>
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <button className="py-[2px] px-[10px] mx-[5px] my-[2px] text-[12px] bg-gradient-to-r from-[#f46177] to-[#f8b688] hover:[background:#6c727869] rounded-[20px] text-white cursor-pointer">{translate("schedule-a-demo")}</button>
                                </li>
                                <li className="hover:text-[#f46177] hover:bg-[#6c727869] cursor-pointer w-[99%] py-[2px] px-[10px] mx-[5px] my-[2px] text-[12px] rounded-[10px] cursor-pointer">
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
                    </div>
                )}
            </div>
        </div>

    );
}