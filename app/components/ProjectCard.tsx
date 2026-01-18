interface ProjectCardProps {
    title: string;
    subtitle?: string;
    tags: string[];
    client: string;
    year: string;
    imageUrl: string;
    imageAlt: string;
    align?: 'left' | 'right';
    buttonVariant?: 'primary' | 'white';
    outlineText?: boolean;
}

export default function ProjectCard({
    title,
    subtitle,
    tags,
    client,
    year,
    imageUrl,
    imageAlt,
    align = 'left',
    buttonVariant = 'primary',
    outlineText = false,
}: ProjectCardProps) {
    const isLeft = align === 'left';
    const buttonClass =
        buttonVariant === 'primary'
            ? 'bg-primary text-white'
            : 'bg-white text-black';

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden project-card group">
            <div
                className="absolute inset-0 bg-cover bg-fixed bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(10,10,10,0.8), rgba(10,10,10,0.2), rgba(10,10,10,0.8)), url("${imageUrl}")`,
                }}
                role="img"
                aria-label={imageAlt}
            />

            <div
                className={`relative z-10 w-full px-6 lg:px-24 flex flex-col ${isLeft ? 'items-start' : 'items-end text-right'
                    }`}
            >
                <div
                    className={`mb-4 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ${!isLeft ? 'justify-end' : ''
                        }`}
                >
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-widest bg-black/40 backdrop-blur-md"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-none mb-6">
                    {outlineText ? (
                        <>
                            {title} <br />
                            <span className={`${isLeft ? 'ml-12 lg:ml-24' : 'mr-12 lg:mr-24'} text-outline`}>
                                {subtitle}
                            </span>
                        </>
                    ) : (
                        <>
                            {title} <br />
                            <span className={isLeft ? 'ml-12 lg:ml-24' : 'mr-12 lg:mr-24'}>
                                {subtitle}
                            </span>
                        </>
                    )}
                </h3>

                <button
                    className={`group/btn flex items-center gap-4 px-8 py-4 ${buttonClass} rounded-full font-bold uppercase tracking-widest text-sm transition-all hover:pr-12`}
                >
                    View Case Study
                    <span className="material-symbols-outlined text-xl transition-transform group-hover/btn:translate-x-2">
                        arrow_right_alt
                    </span>
                </button>
            </div>

            <div
                className={`absolute bottom-12 ${isLeft ? 'right-12 text-right' : 'left-12 text-left'
                    } z-10 opacity-40 group-hover:opacity-100 transition-opacity`}
            >
                <p className="text-sm font-light">Client: {client}</p>
                <p className="text-sm font-light">Year: {year}</p>
            </div>
        </section>
    );
}
