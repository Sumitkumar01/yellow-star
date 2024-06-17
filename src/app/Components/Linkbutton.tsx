// components/LinkButton.tsx

import React from 'react';
import Link from 'next/link';

interface LinkButtonProps {
    href: string;
    className?: string; // Optional class name
    children: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, className, children }) => {
    return (
        <Link href={href} className={className}>
            {children}
        </Link>
    );
};

export default LinkButton;
