
import logoText from '../assets/logo-text.png';

function Navbar() {
    return (
        <div className="flex justify-between items-center p-4 container mx-auto"> 
            <div>
                <img src={logoText} alt="Logo" />
            </div>
            <div className="flex items-center justify-center">
                <ul className="flex gap-4">
                    <li className="text-pink-700">Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
                <div className="flex gap-4 items-center">
                    <button>Sign In</button>
                    <button className="bg-pink-700 rounded-3xl p-1 px-2.5 text-white">Sign Up</button>
                </div>
                          
        </div>
    );
}

export default Navbar;
