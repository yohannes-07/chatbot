const Header = () => {
    return (
        <header className="relative flex items-center justify-between px-8 py-5 bg-gradient-to-r from-[#FF6B6B] via-[#FFD93D] to-[#6BCB77] z-10">
            <div className="absolute inset-0 bg-[url('/api/placeholder/100/100')] opacity-10 mix-blend-overlay"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

            <div className="flex items-center relative">
                {/* <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-1.5 h-6 bg-[#3ABEFF] rounded-full opacity-50 shadow-lg"></div> */}
                <span className="font-bold text-white text-xl tracking-tight">CHATBOT Made with Langgraph</span>
            </div>
        </header>
    )
}

export default Header
