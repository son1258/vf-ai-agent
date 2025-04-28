"use client";

import { useEffect, useRef, useState } from 'react';
import NavBar from '@/components/header/NavBar';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const navRef = useRef<HTMLDivElement>(null);
    const [navHeight, setNavHeight] = useState(0);

    useEffect(() => {
        if (!navRef.current) return;

        const observer = new ResizeObserver(([entry]) => {
            setNavHeight(entry.contentRect.height);
        });

        observer.observe(navRef.current);

        return () => observer.disconnect();
    }, []);


    return (
        <div className='h-full'>
            <div ref={navRef} className="fixed top-0 w-full z-10">
                <NavBar />
            </div>
            <main style={{ paddingTop: `${navHeight}px` }}>
                {children}
            </main>
        </div>
    );
}
