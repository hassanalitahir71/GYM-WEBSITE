import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex w-full justify-center px-4">
        <div className="flex h-22 w-full max-w-[1200px] items-center justify-between px-4 py-5 lg:w-280 lg:px-8">
          {/* Logo */}
          <h1 className="font-weight-500 font-mona text-yellow cursor-pointer text-2xl sm:text-3xl lg:text-4xl">
            Iron<span className="text-white">Forge</span>
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden rounded-full bg-gray-100/3 px-8 py-4 backdrop-blur-[12px] md:block">
            <ul className="font-mona flex items-center gap-10">
              <li>
                <a
                  href="#"
                  className="hover:text-yellow text-white transition hover:font-semibold"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-yellow text-white transition hover:font-semibold"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-yellow text-white transition hover:font-semibold"
                >
                  Programs
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-yellow text-white transition hover:font-semibold"
                >
                  Membership
                </a>
              </li>
            </ul>
          </div>

          {/* Desktop Button */}
          <button className="font-mona hover:bg-yellow hidden rounded-full bg-black/70 px-6 py-3 text-white transition duration-300 hover:text-black md:block">
            Enroll
          </button>

          {/* Mobile Menu Button */}
          <button
            className="text-white md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="mx-4 rounded-2xl bg-black/90 p-6 backdrop-blur-md md:hidden">
          <ul className="font-mona flex flex-col items-center gap-6">
            <li>
              <a href="#" className="text-white" onClick={() => setOpen(false)}>
                Home
              </a>
            </li>

            <li>
              <a href="#" className="text-white" onClick={() => setOpen(false)}>
                About Us
              </a>
            </li>

            <li>
              <a href="#" className="text-white" onClick={() => setOpen(false)}>
                Programs
              </a>
            </li>

            <li>
              <a href="#" className="text-white" onClick={() => setOpen(false)}>
                Membership
              </a>
            </li>

            <button className="bg-yellow font-mona rounded-full px-6 py-3 text-black">
              Enroll
            </button>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
