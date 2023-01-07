
import Image1 from "src/assets/image1.png"
import Image2 from "src/assets/image2.png"
import Ellipse4 from "src/assets/Ellipse44.svg";
import Ellipse5 from "src/assets/Ellipse45.svg";
const Images = () => {
  return (
    <div className="relative mt-5 ">
      <div className="pl-10 pt-5 h-[700px]">  
        <img src={Ellipse4} alt="Ellipse"/>
      </div>
      <div className="absolute bottom-0 flex-1">  
        <img src={Ellipse5} alt="Ellipse"/>
      </div>
      <div className="  hidden w-full text-center p-3 xl:p-0 lg:block">
        <div className="flex gap-2">
          <div className="absolute top-0 w-1/2 flex items-start">
            <img src={Image1}alt="firstImage"/>
          </div>
          <div className="absolute right-0 bottom-0 w-1/2 flex items-end pl-3">
            <img src={Image2} alt="firstImage"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
