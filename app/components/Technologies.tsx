"use client";

import React, { useState } from "react";
import NoiseButton from "./shared/NoiseButton";

type Category = "All" | "Frontend" | "Backend" | "Mobile" | "DevOps";

interface Technology {
    name: string;
    category: Exclude<Category, "All">;
    icon: string;
    alt: string;
}

const TECHNOLOGIES: Technology[] = [
    // Frontend
    {
        name: "React",
        category: "Frontend",
        icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDG1mBPybTxC9f4Myx8mAZwisHS6Z0a2x9u7bYMjYGS09bAtIv8K2PL5nRvx666UAzEmlOaxDSGJNsEufoFC6egH5WiSDVQ3IP2lX60N1p0iDp1HI9nVcgg5YZR34jsnL3zvLrm1_2niPJuRmYHlPZpPY0zwMnJWv-mDF-Je22dWmdi7tBSUwt2lQ3f4q23Er6pXXEXThzx2BRgkPudNF0Y3J0RPY0Is9bMxNT-dbanS99MNnszCHUuvF9pdJ8EJuLKj3vvcCziIu8-",
        alt: "React logo symbol",
    },
    {
        name: "Vue",
        category: "Frontend",
        icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBIoHdygxd7ZtzIBaJPsPtaBjdvpcTUUL2n5XljHOwdFt2Bdcrdljmfu6wXkfpDnj99nv6y-Y8eh53ToeatXDAL9_bFU381kCMUIQvqD7mWYrBf6oome6m4VqDYbmfvXT9H0SOHrCjKy02_qKQB9wIFRAkeq_y1YXkKjE-UWL1kGORsGfhvF1nuKR-MU1WdWwQSED2v1YJQyzUs-Gvd-GHTZh03AJ6VuqaoLyTm2xSTlqCCvtj3jNi7JOmem0kuYeToR7JDBXSnnZo",
        alt: "Vue.js logo symbol",
    },
    {
        name: "Next.js",
        category: "Frontend",
        icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOwB5oLFkUQ_1NK20TKUlx95vhBv4UF2DMD5mcdHhzH9Lnc23YBnBVOSz0OZHTKpeY1iq6PqWP7s9u8qFpgC9u0dig79z1-AVP61UPFxA4ZXm4IWGeMdMs8q56LZrHLbD3H7Qar_FmFKt01pUpBdCfVGqZq3axvg8ny25LcyML4otat0yFHfgrgJbmHzHbf6zwJejnIkVAUX31j0wPw8HCcohosWDPkIyTrQLdzU6nmANz9Nps0SGSMjdRv9Y0oaS0oeZAmquobymL",
        alt: "Next.js logo symbol",
    },
    {
        name: "Tailwind",
        category: "Frontend",
        icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEc2xFTSMHuuNuqN234GMHysrMOsXYIRjqA1XfTdxU6XtnJyifUK2yA0Y0t_1EsDpo7SSMT9Tt4Vs1gtpQoGISs4sbVpZj2t_wahZ-jJPlHOQWB7m1PDHHqshorQaB9qIEOcDVHqV7cs_PlK8F-Oa8_WPUxCq1tXu4_qXkAO3pGKh6Xf8egLHyWKLKd3TcltSlZHlc7H98mJyHcKoABV76Jys6Qey9OpoINUVB-1dIgsHKLBltJUTlr93aOMgTyuxdBVLQWm8dDiws",
        alt: "Tailwind CSS logo symbol",
    },
    // Backend
    {
        name: "Node.js",
        category: "Backend",
        icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhc5njYY4Q9Bby39iSD8n9YvQbXiEfyunOGKc9h9q1OSTX72TfZ9tE1wpinWyFu3jq-OQSYt_mslCUr9mFHtWyh2cvag5z4-fyTensrjZcdczFbX4nqjjwwK8n9N7rDVcZ1dkHlADBYoxvYEkIkdqmBkpfsEmG1L5NTxCQxA-Cvca4Sr9esu5J3tqcuJMz9jLMEl2zt_5tkLLAbmgPphS6HZtyc9iGHVU5D-qIPiyX-Y8uqlsCdz9UlPYpVrilTqkzrvUlHRrQsmfh",
        alt: "Node.js logo symbol",
    },
    {
        name: "Python",
        category: "Backend",
        icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-woPgcf-jWjOieLQo4eX3NY_0V_fkD3LrOlwU4qrHj8ZdpalLdYiIKINwvEKZdnhdu-xERSLu70EF38A0ASegbhewCDpIwiiS5LJCffMf7q1BhTmdZolgVC5iXc71fgV9vAHo3sXZ3Jda39w3WSjwdxfmpx-4oS8u6pa6AlZvkLkgb2quiEcL7f9vMt1Div1XgDwlKyziK-46Utanx735TBectWChlXjFd5RVUWEOYaILaiRpMddZJBhlADYu1ka8S9QX4KP8d4MB",
        alt: "Python programming logo",
    },
    {
        name: "Go",
        category: "Backend",
        icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuASTVcBpHzrdq0IBtF0jdRrrR0PLOFSaoH9Y_bkA0J9bt5RQG-GmygyAeVbjACegoENqAZsACoOYPBEOnLwx-rI65Pc3DfCQbaLvbmLF2F4iq59YjpMvNtvjgf1aytWI9xAp3ECrEcL8oZIBLPSlVp7P_L3LpE6M2RhOBnqI-iKrLB5-0_rV7Ab7Ca3jMA62uViCqBGbdah5thmT68l9AtYo6LVKys1ltU-9wLL0ZF8OShZTXGbXZgrkCWkkB-CNCydDqd1sV_bE2bJ",
        alt: "Go lang logo symbol",
    },
    {
        name: "GraphQL",
        category: "Backend",
        icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3ImscyvsJCTVT-o6wJXICi8-4As8B11pyq5sBQ4W-fOX4jbyuZykfJ6xR_Q_IYSz06LEFGyXhklq2o7Q5z3F-FGvW3KD7oDMrsvGrcxQu9z-R_fof8OI-OgqJmNroepwwueGeAA5I4Xt6kmiFsbBi3T0tyGkRTd5zemjJeU3U35xgEjNhefdAk9K5kVLjWhr7QA2OwAxMHPmFy99m0xb65vhkb3WFkNGN01x7ewNkqELf-IQ99BqgZ_5xjOKTGOBNwGAzazAmPJ49",
        alt: "GraphQL logo symbol",
    },
    // Mobile
    {
        name: "React Native",
        category: "Mobile",
        icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3S2Wk_kZxC9-vHrBVFonp66iBE344BsDkUp4dn4VI2Nbn3Cj8zWxGGz2_hwisaLiA7XTTfiyBN7-QOsT8NrV7yPU148RKWTpjV4-s14mXWw1_Y9GdrntqRiD7GzsX2A8cXe_FSrZ1w6yKu5IlTVsVo_R3Q-PLSDSoGjt8korboCaBsDHiq5xtBmZOMf6pcj9Bx6J6ay3EFfcvxJE4E99dbOqk4Agv2POHikPiU1vBHIHdX_HQ2eOBTplzXDeSk8GL8oAgmXeP6Rv_",
        alt: "React Native logo symbol",
    },
    {
        name: "Swift",
        category: "Mobile",
        icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuD76GoW8qHsUC16eeK-XVDk7ALQXg501E_pqsUabC7P6xteXUeXaf4_ynehc6OaZ8m0wl-72lRH5mLn_LCJRVmtyhLPpr5sEySF1_zEjPC4Gyk_lRUFMZH2y82RXYuTPctfb37ouZq4e77r30PWa8DItd4OGAGUVZpwk5qttv5rdmnPVTz3kPREgtrUWFQOI5jkmG-S8t_yX2fardAoF6O7c6suKwQG6hIfwj8j5dl2mIjv5Leo8Em2cDu6CmxNdWmWnVGBKA5dEThX",
        alt: "Swift language logo symbol",
    },
    {
        name: "Kotlin",
        category: "Mobile",
        icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCm2Qc2RdptRUSvEHufk7vXJpF2AcFBu4rHLjs1v_NKosVjyiwO4gu6IMcZ7YLD4-GUAeeaxJZqrDhsxXZ3lP3zayeiDGijj6uqvsoubNmHX7xqCh6uDA0rBbAxpmlXA_hTc9iVvqDotwPpsWyWTEw5fQzK9aPLQ1rPLrRMxNZ5jJ36mCLcWx3OF2av1uo1GlpOldO4LBFfNs34qLvy8RnWMgy9kw-hG-nGEBbB1q8BRUdnrmIYMiv9dIFyvQ0rCeyzVmWJUJJC23W",
        alt: "Kotlin language logo symbol",
    },
    {
        name: "Flutter",
        category: "Mobile",
        icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8TezPk8LpNb6w3BOZY4Ikdgj0pUD8wv4AllK3kVDFoQI4u4WRXMgH2btVO4uTr7P7S2vHGQ4DeJ0bVnoQ7vz7g1YUTcbzqMmS6Npng8gIuc42zAdkkr_WvKCZ1ixCUPuv_W4B5NG1jXERTVUpl2CmlPzXn0j5qYU9fnCoNnHb91xwRc3myCCy5OVBEBH32gXE9-z75G538ZexxgZ0tIXIrY9X1B1BbESr5WlfqWdlS3fcRHYPaz6wZOC7mG7GStid4HnKryXQf-kF",
        alt: "Flutter framework logo symbol",
    },
    // DevOps
    {
        name: "AWS",
        category: "DevOps",
        icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcZOkSFRH5ESrcBY5mCBxO5zX_koGQkmEMR3kpVPJaGmovF5088TyNRAbgKOY9qT_jM_PutQHBQ1TAfR0dFhHc2tJFnM-u9Xi9oSYi_Id-mTWWhWE5O0HbILATlEUS-sLidNn9GQnirrPVZx_9jkZn9GUQblTRiQaxu1D3c5cicT7oP6M4qmIMnMpGxXU7Og3_f-DHjzceNqLoQrwCn_usvYDkJ6iovKf6b9l4Fr9-82sqMKrcRDJzV5TK7CNehVOXykbtFe2tQmPO",
        alt: "AWS cloud logo symbol",
    },
    {
        name: "Docker",
        category: "DevOps",
        icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBn5ypBsmi0f28YFHHGD_HwOCqZj3Djt11R8c0lZoDQtWyp6dJ5tSwlBkT3rqCU35GrMLhLWo2PqtGLjUbjcNbNfiQ3Vi3akBntrQY3heh_zsEaBHpvrVJRwkp4AGjBkjwPnVmzDUWsitQzuNs1CnwgkeDm7JMYFX0bL3bl0vz-MqZUO-cZUaHl8q3IiJpJ-iqtHoR_L6ZqpBk05AN9LgZhpEHKTTZXJUXjqzCx9nrqj4iDdyLJfxkrsgHrRo6kvTlR-bawEPbf0R3",
        alt: "Docker container logo symbol",
    },
    {
        name: "Kubernetes",
        category: "DevOps",
        icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXWAzP4MmIWVTJENn9c4P0D_OMk5zlIPlAugoXAdHfusBRHHjMOUB_Avfx5n70nk2lxOY-eZl5TZBFowxXsYhDPMuLgWWShwwMnDV4-rVtQRHaAz1ztwnfcAQknVrovqc5CdTIsJupT37TpnmwooItionzM48Ub-hBuSKwvOn7gjkbsixCMf6e23fMMVVr_Cm41jOPnvUqH8TaqOTkA5AOEnIBNYYUH12-OHfLfKTUZGnNKMUEwSn5r30y4DCdV_UAE1Md5a6_7bWq",
        alt: "Kubernetes logo symbol",
    },
];

const CATEGORIES: Category[] = ["All", "Frontend", "Backend", "Mobile", "DevOps"];

export default function Technologies() {
    const [activeCategory, setActiveCategory] = useState<Category>("All");

    const filteredTechnologies =
        activeCategory === "All"
            ? TECHNOLOGIES
            : TECHNOLOGIES.filter((tech) => tech.category === activeCategory);

    return (
        <div className="relative flex flex-col w-full overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-40 flex flex-1 justify-center py-6 md:py-12">
                    <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
                        {/* Header Section */}
                        <div className="flex flex-col items-center text-center space-y-4 mb-8 animate-fade-in">
                            <h2 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-bold leading-tight tracking-[-0.02em]">
                                Built with Best-in-Class Technology
                            </h2>
                            <h3 className="text-gray-600 dark:text-gray-300 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                                We leverage the most powerful frameworks and tools to build
                                scalable, future-proof applications.
                            </h3>
                        </div>
                        {/* Filter Chips */}
                        <div className="flex justify-center mb-8">
                            <div className="flex gap-2 p-1 flex-wrap justify-center bg-gray-200 dark:bg-[#1a2632] rounded-xl border border-gray-300 dark:border-white/5">
                                {CATEGORIES.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setActiveCategory(category)}
                                        className={`flex h-10 items-center justify-center gap-x-2 rounded-lg px-6 transition-all duration-300 ${activeCategory === category
                                            ? "bg-primary text-white shadow-lg shadow-primary/25 font-bold"
                                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-white/10 font-medium"
                                            }`}
                                    >
                                        <p className="text-sm leading-normal">{category}</p>
                                    </button>
                                ))}
                            </div>
                        </div>
                        {/* Tech Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 p-4">
                            {filteredTechnologies.map((tech) => (
                                <div
                                    key={tech.name}
                                    className="group flex flex-col items-center justify-center gap-4 p-6 rounded-xl bg-white dark:bg-[#1a2632] border border-gray-200 dark:border-white/5 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-default animate-fade-in"
                                >
                                    <div className="w-16 h-16 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <div
                                            className="w-10 h-10 bg-center bg-contain bg-no-repeat"
                                            data-alt={tech.alt}
                                            style={{
                                                backgroundImage: `url("${tech.icon}")`,
                                            }}
                                        ></div>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-gray-900 dark:text-white text-base font-bold leading-normal">
                                            {tech.name}
                                        </p>
                                        <p className="text-primary text-xs font-bold uppercase tracking-wider mt-1">
                                            {tech.category}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* CTA Section */}
                        <a href="#contact">
                            <div className="flex flex-col items-center justify-center mt-12 mb-10 space-y-4">
                                <NoiseButton text="Don't see your stack? Let's discuss" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
