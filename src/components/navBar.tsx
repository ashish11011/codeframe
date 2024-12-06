import logo from "./assets/logo.png";

const Navbar = () => {
  return (
    <div className=" overflow-hidden  z-50 sticky  h-20 w-full top-0 ">
      <div className=" -z-10 absolute h-full w-full blur-3xl bg-[#020103]/40"></div>
      <div className=" hidden md:flex gap-6 max-w-7xl mx-auto w-full h-full py-7 px-4 items-center justify-between">
        <div className=" h-full">
          <img
            className=" h-full w-56 object-contain"
            src="./logo.png"
            alt=""
          />
        </div>
        <div className=" flex items-center gap-5">
          <p className=" text-white cursor-pointer ">About</p>
          <p className=" text-white cursor-pointer ">Portfolio</p>
          <p className=" text-white cursor-pointer ">Contact Us</p>
        </div>
        <div className=" capitalize whitespace-nowrap rounded-3xl font-medium px-4 py-2 bg-[#00EAFF]">
          Work with us
        </div>
      </div>
    </div>
  );
};

export default Navbar;
