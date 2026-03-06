export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative z-10 py-12 border-t border-white/5 bg-black/20 backdrop-blur-md">
            <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start">
                    <span className="text-xl font-bold tracking-tighter">
                        MT<span className="text-blue-500">.</span>
                    </span>
                    <p className="text-sm text-zinc-500 mt-2">
                        AI Developer & Software Engineer
                    </p>
                </div>

                <div className="text-center md:text-right">
                    <p className="text-sm text-zinc-400">
                        &copy; {currentYear} Manish Talla. All rights reserved.
                    </p>
                    <p className="text-xs text-zinc-600 mt-1 italic">
                        "Built with AI & creativity."
                    </p>
                </div>
            </div>
        </footer>
    );
}
