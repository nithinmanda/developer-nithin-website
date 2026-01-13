"use client";

import React from "react";
import { NoiseBackground } from "../ui/noise-background";

interface NoiseButtonProps {
    text: string;
    onClick?: () => void;
    href?: string;
    className?: string; // Additional classes for the button styling
    size?: "default" | "sm";
}

export default function NoiseButton({
    text = "Start publishing",
    onClick,
    href,
    className,
    size = "default",
}: NoiseButtonProps) {
    const sizeClasses = size === "sm" ? "px-4 py-1.5 text-sm" : "px-6 py-3 text-base";
    const iconSizeClass = size === "sm" ? "text-base" : "text-lg";

    const ButtonContent = (
        <button
            onClick={onClick}
            className={`h-full w-full cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white ${sizeClasses} text-black font-bold shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-300 active:scale-95 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)] flex items-center gap-2 group ${className || ""}`}
        >
            <span>{text}</span>
            <span className={`material-symbols-outlined ${iconSizeClass} group-hover:translate-x-1 transition-transform`}>
                arrow_forward
            </span>
        </button>
    );

    const Content = (
        <NoiseBackground
            containerClassName="w-fit p-[2px] rounded-full"
            gradientColors={[
                "#FF1CF7",
                "#b249f8",
                "#137fec",
            ]}
        >
            {ButtonContent}
        </NoiseBackground>
    );

    if (href) {
        return <a href={href} className="inline-block">{Content}</a>;
    }

    return Content;
}
