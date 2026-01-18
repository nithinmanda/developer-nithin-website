import { DottedGlowBackground } from "@/app/components/shared/dotted-glow-background";
import ColorBends from "@/components/ColorBends";
import SplitText from "@/components/SplitText";

export default function PortfolioHero() {
    return (
        <section className="relative isolate min-h-screen flex flex-col justify-center px-6 lg:px-24 py-20 overflow-hidden">
            {/* Background */}
            <ColorBends
                className="!absolute inset-0 w-full h-full -z-10"
                rotation={45}
                speed={0.2}
                colors={["#0a0a2a", "#1a1a3a", "#2a2a2a"]}
                transparent
                autoRotate={0}
                scale={1}
                frequency={1}
                warpStrength={1}
                mouseInfluence={1}
                parallax={0.5}
                noise={0.1}
            />

            {/* Content */}
            <div className="relative z-10 max-w-5xl">
                <div className="inline-flex items-center gap-2 px-3 py-2 my-3 rounded-full bg-primary/10 border border-primary/20 w-fit">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                        Available for new projects
                    </span>
                </div>

                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tighter mb-8">
                    <SplitText text="WE BUILD " className="inline-block mr-4" delay={40} />
                    <SplitText text="STUNNING" className="text-outline inline-block mr-4" delay={40} />
                    <SplitText text="WEBSITES" className="inline-block" delay={40} />
                    <br />
                    <SplitText text="&" className="inline-block mr-4" delay={40} />
                    <SplitText text="POWERFUL" className="text-outline inline-block mr-4" delay={40} />
                    <SplitText text="APPS" className="inline-block" delay={40} />
                </h2>

                <SplitText
                    text="Full-cycle web and mobile app development for ambitious brands. We build high-performance digital products that scale."
                    className="text-lg opacity-80 max-w-md"
                    delay={40}
                    splitType="words"
                    textAlign="left"
                />
            </div>
        </section>

    );
}
