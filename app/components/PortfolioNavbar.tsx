export default function PortfolioNavbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 lg:px-12 py-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="size-6 text-primary">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
                <h1 className="text-xl font-bold tracking-tight uppercase">Boutique</h1>
            </div>
            <nav className="hidden md:flex items-center gap-12 text-sm font-medium tracking-widest uppercase">
                <a className="hover:text-primary transition-colors" href="#">
                    Work
                </a>
                <a className="hover:text-primary transition-colors" href="#">
                    Services
                </a>
                <a className="hover:text-primary transition-colors" href="#">
                    About
                </a>
                <button className="bg-white text-black dark:bg-primary dark:text-white px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest">
                    Start Project
                </button>
            </nav>
        </header>
    );
}
