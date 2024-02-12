function Footer() {
    return (
    <footer className="fixed bottom-0 rounded-lg m-4">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">© 2023 <a href="#" className="hover:underline"></a> Calcifer by APhan.
        </span>
        <ul className="flex flex-wrap items-center ml-3 mt-3 text-sm font-medium text-gray-500 sm:mt-0">
            <li>
                <a href="#" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
                <a href="#" className="hover:underline">Contact</a>
            </li>
        </ul>
        </div>
    </footer>
    )
};

export default Footer;
