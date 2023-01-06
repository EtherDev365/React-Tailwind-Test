import Logo from "./Logo";

const Header = () => {
  return (
    <div className="relative">
      <Logo />
      <div className="w-full text-center p-5 xl:p-0">
        <div className="text-2xl sm:text-4xl xl:text-2xl font-bold">
          You Have A
        </div>
        <div className="text-3xl sm:text-5xl xl:text-3xl font-bold">
          Fearful Avoidant Attachment Style
        </div>
        <div className="mt-4 text-left md:text-center font-poppins text-[11px]">
          Check your email inbox to access your full report on your attachment
          style and read below to find out how to:{" "}
        </div>
      </div>
    </div>
  );
};

export default Header;
