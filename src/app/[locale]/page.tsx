
import { useTranslations } from 'next-intl';
import HomePage from './(pages)/homepage/page';

export default function RootPage() {
    const translate = useTranslations();
    return (
        <div className='w-full h-full'>
            <HomePage />
        </div>
    );
}