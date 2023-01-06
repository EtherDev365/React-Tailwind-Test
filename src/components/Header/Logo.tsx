import LogoImg from "src/assets/Vector.svg";

const Logo = () => {
  return (
    <div className="relaive xl:absolute h-full">
      <div className="capitalize flex items-center justify-center h-full">
        <img alt="logo" src={LogoImg} />
        <div className="min-w-120 ml-5 text-lg font-semibold leading-tight font-poppins">
          Personal
          <br />
          Development
          <br />
          School
        </div>
      </div>
    </div>
  );
};

export default Logo;
