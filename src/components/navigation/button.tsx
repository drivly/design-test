import * as React from 'react'
import { cn } from '@/lib/tw-merge/main';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string
}

export default function Button(
    { children, onClick, className }: ButtonProps
) {
    return (
        <div className={cn(className, "text-black hover:bg-[#F6F6F6] px-4 rounded-md font-semibold hover:cursor-pointer transition-colors ease-in-out transition-duration-150")}
            onClick={onClick}>
            {children}
        </div>
    )
}