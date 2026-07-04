export const Hero = () => {
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden animate-fade-in">
        {/*background image */}
        <div className="absolute inset-0">
            <img src="/hero-bg.jpg" alt="Hero Background" className="w-full h-full object-cover opacity-40"/>
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>
        </div>

        {/* Green Dots */}
        <div className="absolute inset-0 overflow-hiddenpointer-events-none">
            {[...Array(30)].map((_, index) => (
                <div className="absolute w-1.5 h-1.5 rounded-full opacity-60" 
                style={{ backgroundColor: 'var(--color-primary)', top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
                }} />
            ))}
        </div>


        {/* Hero Content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text Content*/}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass txt-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                                Aspiring Data/AI Engineer
                        </span>
                    </div>

                    {/* Headline */}
                    <div>
                        <h1>
                            Building <span className="text-primary glow-text">intelligent solutions</span> 
                            <br />
                            with code and
                            <br />
                            <span className="font-serif italic font-normal text-white">
                                creativity.
                            </span>
                        </h1>
                        <p className="txt-lg text-muted-foreground max-w-lg">
                            Hi, I'm Ayla Rusdhy, an Aspiring Data/AI Engineer dedicated to building AI-powered applications that solve real-world problems and create meaningful impact.
                        </p>
                    </div>
                </div>
                {/* Right Column - Image Content */}
            </div>
        </div>
    </section>
    );
}
