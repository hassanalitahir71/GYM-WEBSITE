import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center bg-yellow pt-16">
      <div className="flex w-[90%] flex-col items-center justify-center gap-10 md:w-[60%] lg:w-[40%]">
        {/* Navigation */}
        <nav className="w-full">
          <ul className="font-roboto flex w-full flex-wrap items-center justify-center gap-4 text-[20px] font-medium text-black/70 md:justify-between">
            <Link to="/" className="cursor-pointer hover:font-bold">
              Home
            </Link>
            <Link to="AboutUs" className="cursor-pointer hover:font-bold">
              About
            </Link>
            <a href="#" className="cursor-pointer hover:font-bold">
              {" "}
              Service{" "}
            </a>
            <a href="#" className="cursor-pointer hover:font-bold">
              Membership
            </a>
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-6">
          {/* Facebook */}
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 transition-colors hover:bg-black hover:text-white"
          >
            <IoLogoFacebook className="text-xl" />
          </a>
          {/* Twitter */}
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 transition-colors hover:bg-black hover:text-white"
          >
            <FaTwitter className="text-xl" />
          </a>
          {/* LinkedIn */}
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 transition-colors hover:bg-black hover:text-white"
          >
            <FaLinkedinIn className="text-xl" />
          </a>
          {/* Instagram */}
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 transition-colors hover:bg-black hover:text-white"
          >
            <FaInstagram className="text-xl" />
          </a>
        </div>
      </div>
      <div className="mt-16 w-full">
        <img src="img/IRON FORGE.png" alt="" className="w-full object-cover" />
      </div>
    </footer>
  );
}
