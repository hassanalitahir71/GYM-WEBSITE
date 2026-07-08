import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center bg-[#ffea29] pt-16">
      <div className="flex w-[90%] flex-col items-center justify-center gap-10 md:w-[60%] lg:w-[40%]">
        {/* Navigation */}
        <nav className="w-full">
          <ul className="font-roboto flex w-full flex-wrap items-center justify-center gap-4 text-[20px] font-medium text-black/70 md:justify-between">
            <li className="cursor-pointer hover:font-bold">Home</li>
            <li className="cursor-pointer hover:font-bold">About</li>
            <li className="cursor-pointer hover:font-bold"> Service </li>
            <li className="cursor-pointer hover:font-bold">Membership</li>
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
      <div className="w-full mt-16">
        <img src="img/IRON FORGE.png" alt="" className="w-full object-cover" />
      </div>
    </footer>
  );
}
