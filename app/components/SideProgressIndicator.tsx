export default function SideProgressIndicator() {
    return (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-8">
            <span className="text-[10px] rotate-90 tracking-[0.4em] opacity-40">SCROLL</span>
            <div className="w-[1px] h-32 bg-white/10 relative">
                <div className="absolute top-0 left-0 w-full h-1/3 bg-primary"></div>
            </div>
            <span className="text-xs font-bold">01</span>
        </div>
    );
}
