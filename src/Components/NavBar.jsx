import { useState } from "react";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const navLinks = [
    { href: "#Home", label: "Home" },
    { href: "#Projects", label: "Projects" },
    { href: "#Technologies", label: "Technologies" },
    { href: "#About", label: "About" },
  ];

  const toggleMenu = () => {
    setMenuIsOpen((prev) => !prev);
  };

  const cursorClass =
    "cursor-pointer hover:text-[#3322E5] transition-all duration-300";

  return (
    <nav className="flex items-center justify-between font-semibold gap-12 px-10 shadow-md py-4 rounded-b-md">
      <a href="#Home" className={cursorClass}>
        Programmer Filthi
      </a>

      <div className="hidden sm:flex gap-6">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className={cursorClass}>
            {link.label}
          </a>
        ))}
      </div>

      <div className="sm:hidden">
        <FaBars onClick={toggleMenu} className="cursor-pointer" />
      </div>
      {menuIsOpen && (
        <div className="absolute top-0 right-0 mt-14 sm:hidden bg-white shadow-md rounded-md p-4">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={cursorClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
