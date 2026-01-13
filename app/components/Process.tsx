import React from "react";
import NoiseButton from "./shared/NoiseButton";
import nithinImage from "../assets/nithin.jpeg";

export default function Process() {
    return (
        <div id="process" className="flex flex-col w-full">


            {/* Stats Section */}
            <div className="px-4 md:px-40 flex flex-1 justify-center py-5 bg-[#e5e7eb]/30 dark:bg-[#111a22]">
                <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                    <div className="flex flex-wrap gap-4 p-4">
                        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#233648] shadow-sm border border-[#e5e7eb] dark:border-[#324d67]">
                            <p className="text-[#637588] dark:text-[#92adc9] text-sm font-bold uppercase tracking-wider leading-normal">
                                Projects Delivered
                            </p>
                            <p className="text-[#111418] dark:text-white tracking-tight text-3xl font-black leading-tight">
                                10+
                            </p>
                        </div>
                        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#233648] shadow-sm border border-[#e5e7eb] dark:border-[#324d67]">
                            <p className="text-[#637588] dark:text-[#92adc9] text-sm font-bold uppercase tracking-wider leading-normal">
                                Client Retention
                            </p>
                            <p className="text-[#111418] dark:text-white tracking-tight text-3xl font-black leading-tight">
                                98%
                            </p>
                        </div>
                        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#233648] shadow-sm border border-[#e5e7eb] dark:border-[#324d67]">
                            <p className="text-[#637588] dark:text-[#92adc9] text-sm font-bold uppercase tracking-wider leading-normal">
                                Years of Experience
                            </p>
                            <p className="text-[#111418] dark:text-white tracking-tight text-3xl font-black leading-tight">
                                4+
                            </p>
                        </div>
                        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#233648] shadow-sm border border-[#e5e7eb] dark:border-[#324d67]">
                            <p className="text-[#637588] dark:text-[#92adc9] text-sm font-bold uppercase tracking-wider leading-normal">
                                Team Members
                            </p>
                            <p className="text-[#111418] dark:text-white tracking-tight text-3xl font-black leading-tight">
                                6
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Process Section */}
            <div className="px-4 md:px-40 flex flex-1 justify-center py-6 md:py-12">
                <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                    <div className="px-4 pb-8 pt-5 text-center md:text-left">
                        <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2 block">
                            How We Work
                        </span>
                        <h2 className="text-[#111418] dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em]">
                            Our Development Process
                        </h2>
                        <p className="mt-4 text-[#637588] dark:text-[#92adc9] max-w-2xl text-lg">
                            Transparent, collaborative, and agile. We keep you in the loop from
                            the first line of code to the final deployment.
                        </p>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-x-6 px-4 pt-8">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center gap-1 pt-1">
                            <div className="flex items-center justify-center size-10 rounded-full bg-primary/20 text-primary">
                                <span className="material-symbols-outlined">search</span>
                            </div>
                            <div className="w-[2px] bg-[#e5e7eb] dark:bg-[#324d67] h-full grow my-2"></div>
                        </div>
                        <div className="flex flex-1 flex-col pb-12">
                            <h3 className="text-[#111418] dark:text-white text-xl font-bold leading-normal mb-2">
                                Discovery
                            </h3>
                            <p className="text-[#637588] dark:text-[#92adc9] text-base font-normal leading-relaxed">
                                We start by diving deep into your business goals. Understanding
                                the client's vision is paramount. We conduct stakeholder
                                interviews, market research, and technical feasibility studies.
                            </p>
                        </div>
                        {/* Step 2 */}
                        <div className="flex flex-col items-center gap-1">
                            <div className="flex items-center justify-center size-10 rounded-full bg-primary/20 text-primary">
                                <span className="material-symbols-outlined">design_services</span>
                            </div>
                            <div className="w-[2px] bg-[#e5e7eb] dark:bg-[#324d67] h-full grow my-2"></div>
                        </div>
                        <div className="flex flex-1 flex-col pb-12">
                            <h3 className="text-[#111418] dark:text-white text-xl font-bold leading-normal mb-2">
                                Design
                            </h3>
                            <p className="text-[#637588] dark:text-[#92adc9] text-base font-normal leading-relaxed">
                                High-fidelity prototyping and UI/UX design. We create
                                interactive mockups that allow you to visualize the end product
                                before we write a single line of code.
                            </p>
                        </div>
                        {/* Step 3 */}
                        <div className="flex flex-col items-center gap-1">
                            <div className="flex items-center justify-center size-10 rounded-full bg-primary/20 text-primary">
                                <span className="material-symbols-outlined">terminal</span>
                            </div>
                            <div className="w-[2px] bg-[#e5e7eb] dark:bg-[#324d67] h-full grow my-2"></div>
                        </div>
                        <div className="flex flex-1 flex-col pb-12">
                            <h3 className="text-[#111418] dark:text-white text-xl font-bold leading-normal mb-2">
                                Development
                            </h3>
                            <p className="text-[#637588] dark:text-[#92adc9] text-base font-normal leading-relaxed">
                                Agile coding and iteration. Our engineers build robust, scalable
                                architectures using modern tech stacks. We work in 2-week
                                sprints with regular demos.
                            </p>
                        </div>
                        {/* Step 4 */}
                        <div className="flex flex-col items-center gap-1">
                            <div className="flex items-center justify-center size-10 rounded-full bg-primary text-white shadow-lg shadow-primary/40">
                                <span className="material-symbols-outlined">rocket_launch</span>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col pb-4">
                            <h3 className="text-[#111418] dark:text-white text-xl font-bold leading-normal mb-2">
                                Launch &amp; Scale
                            </h3>
                            <p className="text-[#637588] dark:text-[#92adc9] text-base font-normal leading-relaxed">
                                Deployment and ongoing support. We ensure a smooth launch,
                                monitor performance, and help you scale your infrastructure as
                                your user base grows.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="px-4 md:px-40 flex flex-1 justify-center py-10 bg-[#e5e7eb]/30 dark:bg-[#111a22]">
                <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                    <div className="flex flex-col md:flex-row justify-between items-end px-4 pb-8 pt-5">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-[#111418] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">
                                Meet the Makers
                            </h2>
                            <p className="text-[#637588] dark:text-[#92adc9] text-base">
                                The brilliant minds behind your next product.
                            </p>
                        </div>

                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
                        {/* Member 1 */}
                        <div className="flex flex-col gap-3 group cursor-pointer">
                            <div
                                className="aspect-[3/4] w-full rounded-xl bg-cover bg-center overflow-hidden relative"
                                style={{
                                    backgroundImage: `url(${nithinImage.src})`,
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                    <div className="flex gap-2">
                                        <div className="size-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                            <span className="material-symbols-outlined text-sm">
                                                link
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="text-[#111418] dark:text-white font-bold text-lg">
                                    Nithin Manda
                                </p>
                                <p className="text-primary text-sm font-medium">
                                    Lead Developer
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    );
}
