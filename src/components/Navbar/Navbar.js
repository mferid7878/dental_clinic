import Navigation from "./Navigation";
export default function Navbar() {
  return (
    <header className="mainmenu-area sticky z-1 top-0 bg-white shadow-md py-4 px-6">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <div className="flex items-center">
          <a href="/">
            <img
              src="images/jpegs/family_clinic.jpeg"
              alt="Logo"
              className="h-16 w-auto"
            />
          </a>
        </div>

        <Navigation />
        <a
          href="tel:123-456-7890"
          className="text-gray-700 hover:text-gray-900 transition"
        >
          123-456-7890
        </a>
      </div>
    </header>
  );
}
