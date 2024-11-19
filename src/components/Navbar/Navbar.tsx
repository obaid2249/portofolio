const navLinks = [
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "contact", label: "Contact" },
];

const Navbar = () => {
    return (
        <nav className="flex  shadow-[0_10px_30px_rgba(122,_48,_184,_0.7)] justify-between items-center gap-2 bg-white rounded-lg shadow-md p-2 mt-3 z-50 md:p-4 md:w-[400px]">
            <a href="#about" className="text-xl font-bold font-caveat mr-5">
                Obaid Mohammad
            </a>
            <ul className="flex justify-center ">
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <a href={`#${link.id}`} className="text-gray-700 font-bold rounded-lg hover:bg-purple-200  p-2 text-md">
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
