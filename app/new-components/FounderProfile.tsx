
interface FounderProfileProps {
    imageUrl?: string;
}

export default function FounderProfile({
    imageUrl = "https://res.cloudinary.com/nithinmanda/image/upload/v1768636033/agency%20-%20developer.nithin/WhatsApp_Image_2026-01-17_at_12.51.31_PM_wglwi8.jpg"
}: FounderProfileProps) {
    return (
        <section className="py-4 md:py-12 px-4 md:px-0 flex justify-center">
            <div className="max-w-6xl w-full mx-auto bg-white/3 backdrop-blur-[10px] border border-white/5 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -z-10"></div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    {/* Image Col */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="bg-[rgba(28,31,39,0.4)] backdrop-blur-[16px] border border-[rgba(19,91,236,0.2)] shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden rounded-2xl p-4 w-full max-w-[440px]">
                            {/* Glow Border Effect */}
                            <div className="absolute inset-[-1px] bg-[linear-gradient(45deg,rgba(19,91,236,0.3),transparent,rgba(19,91,236,0.3))] rounded-[inherit] -z-10 pointer-events-none"></div>

                            <div className="absolute top-8 right-8 z-30">
                                <span className="bg-primary/90 backdrop-blur-md px-4 py-1.5 rounded-sm text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-white shadow-xl border border-white/10">
                                    Founder
                                </span>
                            </div>
                            <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-2 bg-neutral-900">
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent z-20"></div>
                                <div className="absolute inset-0 bg-primary/5 z-10 mix-blend-overlay"></div>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    alt="Founder Portrait"
                                    className="w-full h-full object-cover  contrast-100 brightness-100 [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
                                    src={imageUrl}
                                />
                                <div className="absolute bottom-8 left-8 z-30">
                                    <p className="text-[9px] font-mono text-white/50 uppercase tracking-[0.3em] mb-2">Nithin Manda</p>
                                    <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-3 py-2 rounded-lg border border-white/5">
                                        <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.8)] animate-pulse"></div>
                                        <p className="text-[11px] font-mono text-white/90 uppercase tracking-widest">Sr. Associate Engineer</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Text Col */}
                    <div className="lg:col-span-7 space-y-12">
                        <div className="space-y-6">
                            <div className="flex items-center gap-6">
                                <span className="h-[1px] w-16 bg-primary"></span>
                                <p className="font-mono text-primary text-sm font-semibold tracking-[0.4em] uppercase">Executive Profile</p>
                            </div>
                        </div>
                        <div className="max-w-2xl space-y-8">
                            <p className="text-white/90 text-xl font-light leading-relaxed">
                                Crafting the future of digital infrastructure with a focus on high-performance systems and luxury aesthetics. My approach bridges the gap between complex engineering and intuitive user experience.
                            </p>
                            <p className="text-white/50 text-base font-light leading-relaxed">
                                With over a decade of experience in building scalable architectures for Fortune 500 companies and high-growth startups, I lead our technical vision with a commitment to &quot;code as art&quot;—where every line serves a purpose and every system is built to last a generation.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
