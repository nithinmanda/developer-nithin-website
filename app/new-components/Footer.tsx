
export default function Footer() {
    return (
        <footer className="w-full border-t border-zinc-800 bg-background-light dark:bg-background-dark font-display text-white">
            <div className="mx-auto max-w-7xl px-8 py-8 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Column 1: Identity */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <div className="h-8 w-8 bg-primary rounded flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-xl">terminal</span>
                            </div>
                            <span className="text-xl font-bold tracking-tighter text-slate-900 dark:text-white">developer.nithin</span>
                        </div>
                        <p className="text-zinc-500 text-sm leading-relaxed max-w-[200px]">
                            Building digital excellence with precision and purpose.
                        </p>
                        <p className="text-zinc-600 text-xs font-mono">
                            &copy; 2026. All rights reserved.
                        </p>
                    </div>

                    {/* Column 2: Contact */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-mono text-[10px] font-semibold text-zinc-500 uppercase tracking-widest">Contact</h3>
                        <div className="flex flex-col gap-3">
                            <a className="text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-light" href="mailto:hello@nithin.dev">
                                goudnithin77@gmail.com
                            </a>
                            <a className="text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-light" href="tel:+10000000000">
                                +91 9912491246
                            </a>
                        </div>
                    </div>

                    {/* Column 3: Office */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-mono text-[10px] font-semibold text-zinc-500 uppercase tracking-widest">Office</h3>
                        <address className="not-italic text-zinc-400 text-sm font-light leading-6">
                            Laksh Triveni Appartments,<br />
                            Gowlidoddi,<br />
                            Hyderabad, India <br />
                            500032
                        </address>
                    </div>

                    {/* Column 4: Social */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-mono text-[10px] font-semibold text-zinc-500 uppercase tracking-widest">Social</h3>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <a className="text-zinc-400 text-sm font-light hover:text-primary hover:[text-shadow:0_0_8px_rgba(19,91,236,0.6)] transition-all inline-block" href="https://github.com/nithinmanda" target="_blank">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a className="text-zinc-400 text-sm font-light hover:text-primary hover:[text-shadow:0_0_8px_rgba(19,91,236,0.6)] transition-all inline-block" href="https://linkedin.com/in/nithin-manda" target="_blank">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a className="text-zinc-400 text-sm font-light hover:text-primary hover:[text-shadow:0_0_8px_rgba(19,91,236,0.6)] transition-all inline-block" href="https://x.com/kaushal_dev_" target="_blank">
                                    X
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}