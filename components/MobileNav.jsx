"use client";

import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import {usePathname} from 'next/navigation'
import Link from 'next/link';
import {CiMenuFries} from 'react-icons/ci'
import { Herr_Von_Muellerhoff } from 'next/font/google';

const links = [
    {
        label: 'home',
        href: '/'
    },
    {
        label: 'services',
        href: '/services'
    },
    {
        label: 'resume',
        href: '/resume'
    },
    {
        label: 'work',
        href: '/work'
    },
    {
        label: 'contact',
        href: '/contact'
    },
]; 
const MobileNav = () => {
    const pathname = usePathname();
    return (
    <Sheet>
        <SheetTrigger className='flex justify-center items-center'>
            <CiMenuFries className='text-[32px] text-accent'/>     
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            {/* logo */}
            <div className='mt-40 mb-40 text-center text-2xl'>
                <Link href="/">
                    <h1 className='text-4xl font-semibold'>Pavithran<span className='text-accent'>.</span></h1>
                </Link>
            </div>
            {/* nav */}
            <nav className='flex flex-col justify-center items-center gap-8'>
                {links.map((link,index) => {
                    return (
                        <Link 
                        href={link.href} 
                        key={index} 
                        className={`${link.href === pathname && "text-accent border-b-2 border-accent"} 
                        text-xl capitalize hover:text-accent transition-all`} >
                            {link.label}
                        </Link>
                    );
                })}
            </nav>

        </SheetContent>
    </Sheet>
    );
};

export default MobileNav;