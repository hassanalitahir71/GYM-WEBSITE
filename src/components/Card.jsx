import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Card({ role, name, img }) {
  return (
    <>
      {/* 1 & 3: Added 'div' and the 'group' class here */}
      <div className="group relative flex flex-col">
        <div className="relative flex h-70 w-50">
          <div className="h-63 w-full rounded-md bg-gradient-to-b from-[#FFF73F] to-[#999426]">
            <img
              src={img}
              alt=""
              className="absolute -top-7 h-full w-full object-cover"
            />
          </div>

          <div className="absolute inset-0 z-10 flex h-63 items-center justify-center gap-4 rounded-md bg-black/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <a
              href="#"
              className="bg-yellow flex h-10 w-10 items-center justify-center rounded-full text-black transition-colors duration-300 hover:bg-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-yellow flex h-10 w-10 items-center justify-center rounded-full text-black transition-colors duration-300 hover:bg-white"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-yellow flex h-10 w-10 items-center justify-center rounded-full text-black transition-colors duration-300 hover:bg-white"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* 2: Removed the extra </div> that was sitting here */}

        <div className="absolute -bottom-10 w-full rounded-md bg-[#313131] px-5 py-2">
          <h1 className="font-made text-[14px] font-bold text-white">{name}</h1>
          <p className="font-made text-[10px] text-[#C7C7C7]"> {role}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
