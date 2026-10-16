
import { useState } from 'react';
import { SquareMenu, X } from 'lucide-react';
import logoText from '../assets/logo-text.png';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="relative flex justify-between items-center p-4 container mx-auto">

            
            <div className="lg:static absolute left-1/2 -translate-x-1/2 lg:translate-x-0">
                <img src={logoText} alt="Logo" className="w-24 sm:w-32 lg:w-auto" />
            </div>

            
            <div className="flex items-center justify-center">

               
                <button
                    className="lg:hidden absolute left-4"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <X size={24} /> : <SquareMenu size={24} />}
                </button>

                
                <ul className="hidden lg:flex gap-4">
                    <li className="text-pink-700">Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                
                {menuOpen && (
                    <ul className="absolute top-full left-4 mt-2 z-50 flex flex-col gap-4 bg-white shadow-lg rounded-lg p-4 lg:hidden">
                        <li onClick={() => setMenuOpen(false)} className="text-pink-700">Home</li>
                        <li onClick={() => setMenuOpen(false)}>Technologies</li>
                        <li onClick={() => setMenuOpen(false)}>Projects</li>
                        <li onClick={() => setMenuOpen(false)}>About</li>
                        <li onClick={() => setMenuOpen(false)}>Contact</li>
                    </ul>
                )}
            </div>

           
            <div className="flex gap-2 sm:gap-4 items-center">
                <button className="text-sm sm:text-base">Sign In</button>
                <button className="bg-pink-700 rounded-3xl p-1 px-2.5 text-white text-sm sm:text-base">
                    Sign Up
                </button>
            </div>

        </div>
    );
}

export default Navbar;
