import NavBar from '@/components/header/NavBar';
import { useTranslations } from 'next-intl';

export default function HomePage() {
    const translate = useTranslations();
    return (
        <div className='w-full flex items-center justify-center'>
            <NavBar />
        </div>
    );
}