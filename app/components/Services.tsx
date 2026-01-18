import React from "react";

export default function Services() {
    return (
        <div id="services" className="relative overflow-hidden pt-8 pb-12 lg:pt-12 lg:pb-16 bg-background">
            {/* Background Decoration */}
            <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-full -translate-x-1/2 opacity-20 dark:opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-transparent blur-3xl"></div>
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Service 1: Web Dev */}
                    <div className="group relative flex flex-col gap-5 rounded-2xl border border-white/10 bg-transparent p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                        <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <span className="material-symbols-outlined text-[28px]">
                                language
                            </span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-foreground mb-3">
                                Custom Web Development
                            </h3>
                            <p className="text-zinc-400 leading-relaxed text-sm">
                                Expert React, Vue, and Next.js solutions built for scale,
                                performance, and SEO optimization.
                            </p>
                        </div>

                    </div>
                    {/* Service 2: Mobile Apps */}
                    <div className="group relative flex flex-col gap-5 rounded-2xl border border-white/10 bg-transparent p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                        <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <span className="material-symbols-outlined text-[28px]">
                                smartphone
                            </span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-foreground mb-3">
                                Mobile App Creation
                            </h3>
                            <p className="text-zinc-400 leading-relaxed text-sm">
                                Native and cross-platform apps for iOS and Android using Swift,
                                Kotlin, or React Native.
                            </p>
                        </div>

                    </div>
                    {/* Service 3: UI/UX */}
                    <div className="group relative flex flex-col gap-5 rounded-2xl border border-white/10 bg-transparent p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                        <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <span className="material-symbols-outlined text-[28px]">
                                palette
                            </span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-foreground mb-3">
                                UI/UX Design
                            </h3>
                            <p className="text-zinc-400 leading-relaxed text-sm">
                                User-centric wireframing, prototyping, and research to ensure
                                intuitive and engaging experiences.
                            </p>
                        </div>

                    </div>
                    {/* Service 4: Ecommerce */}
                    <div className="group relative flex flex-col gap-5 rounded-2xl border border-white/10 bg-transparent p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                        <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <span className="material-symbols-outlined text-[28px]">
                                shopping_cart
                            </span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-foreground mb-3">
                                E-commerce Solutions
                            </h3>
                            <p className="text-zinc-400 leading-relaxed text-sm">
                                Shopify setups, custom cart integrations, and payment gateway
                                solutions for maximum sales growth.
                            </p>
                        </div>

                    </div>
                    {/* Service 5: DevOps */}
                    <div className="group relative flex flex-col gap-5 rounded-2xl border border-white/10 bg-transparent p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                        <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <span className="material-symbols-outlined text-[28px]">
                                cloud
                            </span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-foreground mb-3">
                                DevOps &amp; Cloud
                            </h3>
                            <p className="text-zinc-400 leading-relaxed text-sm">
                                Secure AWS/Azure infrastructure, containerization with
                                Docker/K8s, and automated CI/CD pipelines.
                            </p>
                        </div>

                    </div>
                    {/* Service 6: Maintenance */}
                    <div className="group relative flex flex-col gap-5 rounded-2xl border border-white/10 bg-transparent p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                        <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <span className="material-symbols-outlined text-[28px]">
                                support_agent
                            </span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-foreground mb-3">
                                Maintenance &amp; Support
                            </h3>
                            <p className="text-zinc-400 leading-relaxed text-sm">
                                24/7 system monitoring, security updates, bug fixes, and
                                continuous performance tuning.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
