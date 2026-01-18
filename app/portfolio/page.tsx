import type { Metadata } from 'next';
import PortfolioNavbar from '../components/PortfolioNavbar';
import ProjectCard from '../components/ProjectCard';
import AgencyNavbar from '../new-components/AgencyNavbar';

export const metadata: Metadata = {
    title: 'Featured Projects Showcase | Agency Portfolio',
    description: 'Exploring the intersection of high-end aesthetics and technical excellence.',
};

export default function PortfolioPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300">
            {/* <PortfolioNavbar /> */}
            <AgencyNavbar />

            {/* Side Progress Indicator */}
            <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-8">
                <span className="text-[10px] rotate-90 tracking-[0.4em] opacity-40">SCROLL</span>
                <div className="w-[1px] h-32 bg-white/10 relative">
                    <div className="absolute top-0 left-0 w-full h-1/3 bg-primary"></div>
                </div>
                <span className="text-xs font-bold">01</span>
            </div>

            <main className="w-full">
                {/* Hero Section */}
                <section className="min-h-screen flex flex-col justify-center px-6 lg:px-24 py-20">
                    <div className="max-w-5xl">
                        <p className="text-primary font-bold tracking-[0.3em] uppercase mb-4">Selected Cases</p>
                        <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter mb-8">
                            WE BUILD <br /> <span className="text-outline">DIGITAL</span> ICONICITY.
                        </h2>
                        <div className="flex items-center gap-4">
                            <div className="h-[1px] w-24 bg-white/20"></div>
                            <p className="text-lg opacity-60 max-w-md">
                                Exploring the intersection of high-end aesthetics and technical excellence.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Project 1: Neo-Banking Platform */}
                {/* <ProjectCard
                    title="NEO-BANKING"
                    subtitle="PLATFORM"
                    tags={['Web Development', 'UI/UX Design']}
                    client="FinSphere Global"
                    year="2024"
                    imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBqs-L68Lk3RL0Qmh97nqpsjeLqvIzJodTGsrUXEpgMGCoZP1sgrM7NrsYjvxswXbvK09WRe_LfVTSUTtWeixe1OpV6S4bmYMZfnsK7LyQbPO2SnAnO5bjUIQw7_h_cP_dCWWOcCi2HFQT39jIEaricGFPE-_NkylNfEdJLx2rFlAQ-ecltdUljMQwilVs0BGpqTd1JXpNf3_k0KNXi2Zq8Eq-qkZ7EP4ZKhWUM4i5h2DxGty7GfEAIYkMpatEJ_iKoaNJxJIOEIgE"
                    imageAlt="Minimalist laptop showing a fintech dashboard interface"
                    align="left"
                    buttonVariant="primary"
                /> */}

                {/* Project 2: Luxury Commerce */}
                <ProjectCard
                    title="LUXURY"
                    subtitle="COMMERCE"
                    tags={['E-Commerce', 'Branding']}
                    client="Maison De Couture"
                    year="2023"
                    imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDGPoYkx5RzQR-9eeMiu-qZtm1xDm2utZBcRjBlXKDMmoCW1wDexOifAoZuhXfcpcCpp_vxm6aPCSSlKqP2QyJwLstkxJ-9QT6KQNbnY4afLhH8e351IeHC84_UKF_ZxjcjaJqfPiJmM_HzAaROka9Y7FEhEguPUt8-8pLzHGLl7AJcBdUmRNILmmsk8xtE2N3dLk74RD8Mhik_aynYrq0H4xavMqgD_fTy7eSIpI7PtJYEZLXWbwyGiLUSNGXzVyZaHbyrS2wZcX0"
                    imageAlt="Abstract lifestyle e-commerce mobile app mockup"
                    align="right"
                    buttonVariant="white"
                />

                {/* Project 3: Vitality Ecosystem */}
                <ProjectCard
                    title="VITALITY"
                    subtitle="ECOSYSTEM"
                    tags={['Mobile App', 'HealthTech']}
                    client="BioPulse Systems"
                    year="2024"
                    imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAXy_8qrF38Yr_270NK_qiVnOUDdoTQFKU3b2FN5-Oo48EQL8QU3AACAsrWVXG6ynd4q5jHybMD5xE_o-3Ikv2vzZA25IrF0cEBT0DMKaFP8fkfCXRXRCF21clUv7pOWZXUMmE62eoYOb4nfA9mheegzyfPG5nhEuIDal2M8lqypYtd8uIaARviS3rJuHJglDkjAc7bmjNZQaTJYxz7CBgOCgwiFZYyGsqavb8CsYLS9qqWqnscnVNWPmOQvRQjoSL3nWAI0aYJ9S4"
                    imageAlt="Mobile health monitoring application interface"
                    align="left"
                    buttonVariant="primary"
                    outlineText
                />

                {/* Start Project CTA Section */}
                <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
                    <h2 className="text-white text-5xl md:text-8xl font-bold tracking-tighter mb-12">
                        HAVE AN IDEA? <br />
                        <span className="text-primary italic">LET&apos;S CO-CREATE.</span>
                    </h2>
                    <div className="flex flex-col md:flex-row gap-6">
                        <button className="px-12 py-6 bg-primary rounded-full font-bold uppercase tracking-widest text-lg hover:scale-105 transition-transform">
                            Start a Project
                        </button>
                        <button className="px-12 py-6 border border-white/20 rounded-full font-bold uppercase tracking-widest text-lg hover:bg-white hover:text-black transition-all">
                            Schedule a Call
                        </button>
                    </div>

                    {/* Footer Meta */}
                    <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl text-left border-t border-white/10 pt-12 opacity-60">
                        <div className="space-y-4">
                            <p className="font-bold uppercase tracking-widest text-xs">Offices</p>
                            <p className="text-sm font-light">
                                London, United Kingdom
                                <br />
                                New York, USA
                            </p>
                        </div>
                        <div className="space-y-4">
                            <p className="font-bold uppercase tracking-widest text-xs">Socials</p>
                            <div className="flex flex-col gap-2 text-sm font-light">
                                <a className="hover:text-primary transition-colors" href="#">
                                    Instagram
                                </a>
                                <a className="hover:text-primary transition-colors" href="#">
                                    LinkedIn
                                </a>
                                <a className="hover:text-primary transition-colors" href="#">
                                    Dribbble
                                </a>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <p className="font-bold uppercase tracking-widest text-xs">Contact</p>
                            <p className="text-sm font-light">
                                hello@boutique.agency
                                <br />
                                +44 (0) 20 7946 0123
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Custom Cursor Follower (Visual Only) */}
            <div className="fixed pointer-events-none z-[100] top-0 left-0 hidden lg:block">
                <div className="w-8 h-8 border border-primary rounded-full flex items-center justify-center transition-transform duration-200">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                </div>
            </div>
        </div>
    );
}
