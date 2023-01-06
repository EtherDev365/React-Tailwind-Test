import { Swiper, SwiperSlide } from "swiper/react";
import {AiFillStar} from "react-icons/ai"
import Avatar from "src/assets/avatar.png";
import { Pagination, Navigation } from "swiper";
import useWindowSize from "src/hook/windowSize";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ItemsSlider() {
  const size: any = useWindowSize();
  return (
    <>
      <Swiper
        slidesPerView={size.width >= 1280?3: 1}
        spaceBetween={size.width >= 1280?0: 30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={size.width >= 1280 ? true: false}
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide className="mb-20 ">
            <div className="relative mx-1 pt-24">
                <div className="rounded-[20px] border border-[#8a50a0] h-[400px] w-[300px] px-6 py-10">
                    <div className=" flex gap-1">
                        <AiFillStar size={30} color={"#8a50a0"}/>
                        <AiFillStar size={30} color={"#8a50a0"}/>
                        <AiFillStar size={30} color={"#8a50a0"}/>
                        <AiFillStar size={30} color={"#8a50a0"}/>
                        <AiFillStar size={30} color={"#8a50a0"}/>
                    </div>
                    <div className="h-full text-start overflow-auto text-[15px] font-poppins pt-6 font-medium">
                        "I’ve researched relationships most of 
                        my life. However, I couldn’t find anything 
                        that explained my dynamic in them. I 
                        thought about therapy until I stumbled 
                        upon Thais’s YouTube channel. She 
                        explained EXACTLY what I was 
                        experiencing. She literally read my 
                        mind! I’m usually a bit of a skeptic but I 
                        was hooked! I finally figured out my 
                        problem and how to solve it!"
                    </div>
                </div>
                <div className="absolute top-3 left-5 flex items-center">
                    <div className="rounded-full shadow-[0px_0px_5px_5px_rgba(0,0,0,0.15)]  p-[3px] bg-white h-24">
                        <img src={Avatar} alt="" className="rounded-full"/>
                    </div>
                    <div className="pl-2 text-start">
                        <div className="font-poppins font-medium">
                            M E L I S S A
                        </div>
                        <div className="font-poppins text-sm">
                            Colorado, USA
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="mb-20">
            <div className="relative mx-1 pt-24">
                <div className="rounded-[20px] border border-[#8a50a0] h-[400px] w-[300px] px-6 py-10">
                    <div className=" flex gap-1">
                        <AiFillStar size={30} color={"#8a50a0"}/>
                        <AiFillStar size={30} color={"#8a50a0"}/>
                        <AiFillStar size={30} color={"#8a50a0"}/>
                        <AiFillStar size={30} color={"#8a50a0"}/>
                        <AiFillStar size={30} color={"#8a50a0"}/>
                    </div>
                    <div className="h-full text-start overflow-auto text-[15px] font-poppins pt-6 font-medium">
                        "I’ve researched relationships most of 
                        my life. However, I couldn’t find anything 
                        that explained my dynamic in them. I 
                        thought about therapy until I stumbled 
                        upon Thais’s YouTube channel. She 
                        explained EXACTLY what I was 
                        experiencing. She literally read my 
                        mind! I’m usually a bit of a skeptic but I 
                        was hooked! I finally figured out my 
                        problem and how to solve it!"
                    </div>
                </div>
                <div className="absolute top-3 left-5 flex items-center">
                    <div className="rounded-full shadow-[0px_0px_5px_5px_rgba(0,0,0,0.15)]  p-[3px] bg-white h-24">
                        <img src={Avatar} alt="" className="rounded-full"/>
                    </div>
                    <div className="pl-2 text-start">
                        <div className="font-poppins font-medium">
                            M E L I S S A
                        </div>
                        <div className="font-poppins text-sm">
                            Colorado, USA
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="mb-20">
            <div className="relative mx-1 pt-24">
                <div className="rounded-[20px] border border-[#8a50a0] h-[400px] w-[300px] px-6 py-10">
                    <div className=" flex gap-1">
                        <AiFillStar size={30} color={"#8a50a0"}/>
                        <AiFillStar size={30} color={"#8a50a0"}/>
                        <AiFillStar size={30} color={"#8a50a0"}/>
                        <AiFillStar size={30} color={"#8a50a0"}/>
                        <AiFillStar size={30} color={"#8a50a0"}/>
                    </div>
                    <div className="h-full text-start overflow-auto text-[15px] font-poppins pt-6 font-medium">
                        "I’ve researched relationships most of 
                        my life. However, I couldn’t find anything 
                        that explained my dynamic in them. I 
                        thought about therapy until I stumbled 
                        upon Thais’s YouTube channel. She 
                        explained EXACTLY what I was 
                        experiencing. She literally read my 
                        mind! I’m usually a bit of a skeptic but I 
                        was hooked! I finally figured out my 
                        problem and how to solve it!"
                    </div>
                </div>
                <div className="absolute top-3 left-5 flex items-center">
                    <div className="rounded-full shadow-[0px_0px_5px_5px_rgba(0,0,0,0.15)]  p-[3px] bg-white h-24">
                        <img src={Avatar} alt="" className="rounded-full"/>
                    </div>
                    <div className="pl-2 text-start">
                        <div className="font-poppins font-medium">
                            M E L I S S A
                        </div>
                        <div className="font-poppins text-sm">
                            Colorado, USA
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
