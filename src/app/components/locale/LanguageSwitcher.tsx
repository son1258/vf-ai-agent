"use client";

import { useState } from "react";
import Image from "next/image";
import { MenuItem, Select } from "@mui/material";

export default function LanguageSwitcher() {
    const [locale, setLocale] = useState(() => localStorage.getItem('language') || "en");

    const switchLanguage = (lang: string) => {
        if (lang !== locale) {
            localStorage.setItem('language', lang);
            setLocale(lang);
            window.location.reload();
        }
    };

    return (
        <Select
            size="small"
            value={locale}
            onChange={(e) => switchLanguage(e.target.value)}
            sx={{
                width: 120,
                border: "none",
                "& fieldset": { border: "none" },
                "& .MuiSelect-icon": { display: "none" },
                "& .MuiOutlinedInput-input": { fontSize: "11pt", fontWeight: 'bold', p: 0, ml: 1 }
            }}
        >
            <MenuItem value="en">
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <Image src="/logos/english.svg" width={26} height={26} alt="english" /> English
                </div>
            </MenuItem>
            <MenuItem value="vi">
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <Image src="/logos/vietnamese.svg" width={26} height={26} alt="vietnamese" /> Tiếng Việt
                </div>
            </MenuItem>
        </Select>
    );
}