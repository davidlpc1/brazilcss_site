import NextHead from 'next/head';
import { ReactNode } from 'react';

interface HeadProps {
    children: ReactNode;
}

export default function Head({ children }: HeadProps){
    return (
        <NextHead>
            {children}
            
            <link rel="shortcut icon" href="/logo.png" type="image/png"/>

            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet" />
        </NextHead>
    )
}