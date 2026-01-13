"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface NoiseBackgroundProps {
    children: ReactNode;
    className?: string;
    containerClassName?: string;
    gradientColors?: string[];
}

export function NoiseBackground({
    children,
    className,
    containerClassName,
    gradientColors = [
        "rgb(255, 100, 150)",
        "rgb(100, 150, 255)",
        "rgb(255, 200, 100)",
    ],
}: NoiseBackgroundProps) {
    return (
        <div
            className={cn(
                "relative flex items-center justify-center overflow-hidden",
                containerClassName
            )}
        >
            <div
                className="absolute inset-0 opacity-100"
                style={{
                    background: `linear-gradient(40deg, ${gradientColors.join(", ")})`,
                    backgroundSize: "200% 200%",
                    animation: "gradient-move 5s ease infinite",
                }}
            />
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
            <div className={cn("relative z-10", className)}>{children}</div>
            <style jsx>{`
        @keyframes gradient-move {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
        </div>
    );
}
