import artemImg from '../assets/артем.png';

function Header() {
    return (
        <header className="flex justify-end p-4">
            <button
                onClick={toggleTheme}
                className="px-3 py-1 bg-gray-800 text-white rounded"
            >
                {theme === "light" ? "🌙" : "☀️"}
            </button>
        </header>
    );
}
export default Header;