export default function PortfolioCTA() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-white text-5xl md:text-8xl font-bold tracking-tighter mb-12">
                HAVE AN IDEA? <br />
                <span className="text-[#135bec] italic">LET&apos;S CO-CREATE.</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-6">
                <a
                    href="/contact-real"
                    rel="noopener noreferrer"
                    className="px-12 py-6 rounded-full bg-[#135bec] font-bold uppercase tracking-widest text-lg hover:scale-105 transition-transform inline-block"
                >
                    Start a Project
                </a>
                <a href="/contact-real" className="px-12 py-6 border border-[#135bec]/60 rounded-full font-bold uppercase tracking-widest text-lg hover:bg-[#135bec]/20 hover:text-[#135bec] transition-all">
                    Schedule a Call
                </a>
            </div>
        </section>
    );
}
