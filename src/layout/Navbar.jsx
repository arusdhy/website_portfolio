import { Button } from "@/components/Button";

const navLinks = [
    {href: "#about", title: "About"},
    {href: "#experience", title: "Experience"},
    {href: "#projects", title: "Projects"},
    {href: "#testimonials", title: "Testimonials"},
]
export const Navbar = () =>{
    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                    AYLA RUSDHY<span className="text-primary">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                                {link.title}
                            </a>
                        ))}
                    </div>
                </div>
                {/* CTA Button */}
                <button className="btn">
                    Contact Me
                </button>
            </nav>
        </header>
    )
}