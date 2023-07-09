import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="px-6 py-4 border-b-[1px]">
        <Logo />
      </div>
    </div>
  );
};
export default Navbar;
