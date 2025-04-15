"use client"

import { useTranslations } from "next-intl";
import Image from "next/image";
import NavBar from "./components/header/NavBar";

export default function RootPage() {
    const translate = useTranslations();
    return (
        <div>
            <div className="fixed top-0 left-0 z-50 justify-center w-full border-[0.25px] border-black/20 shadow bg-white">
                <div className="flex items-center justify-center">
                    <NavBar />
                </div>
            </div>
        </div>
    )

}
