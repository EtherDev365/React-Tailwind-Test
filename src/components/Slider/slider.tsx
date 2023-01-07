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
            <div className={`relative mx-1 pt-20`}>
                <div className={`rounded-[20px] border border-[#8a50a0] ${size.width >= 390? "h-[340px] w-[280px] px-6":"h-[300px] w-[180px] px-4"}  py-10`}>
                    <div className=" flex gap-1">
                        <AiFillStar size={size.width >= 390 ?25: 20} color={"#8a50a0"}/>
                        <AiFillStar size={size.width >= 390 ?25: 20} color={"#8a50a0"}/>
                        <AiFillStar size={size.width >= 390 ?25: 20} color={"#8a50a0"}/>
                        <AiFillStar size={size.width >= 390 ?25: 20} color={"#8a50a0"}/>
                        <AiFillStar size={size.width >= 390 ?25: 20} color={"#8a50a0"}/>
                    </div>
                    <div className={`h-full text-start overflow-auto ${size.width >= 390? "text-[12.5px]":"text-[8.5px]"} font-poppins pt-6 font-medium`}>
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
                <div className={`absolute ${size.width >= 390? "top-3":"top-7"} left-5 flex items-center`}>
                    <div className={`rounded-full shadow-[0px_0px_5px_5px_rgba(0,0,0,0.15)]  p-[3px] bg-white ${size.width >= 390? 'h-20':'h-16'}`}>
                        <img src={Avatar} alt="" className="rounded-full"/>
                    </div>
                    <div className="pl-2 text-start">
                        <div className={`font-poppins font-bold tracking-[1.5px] ${size.width >= 390? "text-[15px]":"text-[11px]"}` }>
                            M E L I S S A
                        </div>
                        <div className={`font-poppins  ${size.width >= 390? "text-[13px]":"text-[10px]"}`}>
                            Colorado, USA
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="mb-20 ">
            <div className={`relative mx-1 pt-20`}>
                <div className={`rounded-[20px] border border-[#8a50a0] ${size.width >= 390? "h-[340px] w-[280px] px-6":"h-[300px] w-[180px] px-4"}  py-10`}>
                    <div className=" flex gap-1">
                        <AiFillStar size={size.width >= 390 ?25: 20} color={"#8a50a0"}/>
                        <AiFillStar size={size.width >= 390 ?25: 20} color={"#8a50a0"}/>
                        <AiFillStar size={size.width >= 390 ?25: 20} color={"#8a50a0"}/>
                        <AiFillStar size={size.width >= 390 ?25: 20} color={"#8a50a0"}/>
                        <AiFillStar size={size.width >= 390 ?25: 20} color={"#8a50a0"}/>
                    </div>
                    <div className={`h-full text-start overflow-auto ${size.width >= 390? "text-[12.5px]":"text-[8.5px]"} font-poppins pt-6 font-medium`}>
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
                <div className={`absolute ${size.width >= 390? "top-3":"top-7"} left-5 flex items-center`}>
                    <div className={`rounded-full shadow-[0px_0px_5px_5px_rgba(0,0,0,0.15)]  p-[3px] bg-white ${size.width >= 390? 'h-20':'h-16'}`}>
                        <img src={Avatar} alt="" className="rounded-full"/>
                    </div>
                    <div className="pl-2 text-start">
                        <div className={`font-poppins font-bold tracking-[1.5px] ${size.width >= 390? "text-[15px]":"text-[11px]"}` }>
                            M E L I S S A
                        </div>
                        <div className={`font-poppins  ${size.width >= 390? "text-[13px]":"text-[10px]"}`}>
                            Colorado, USA
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="mb-20 ">
            <div className={`relative mx-1 pt-20`}>
                <div className={`rounded-[20px] border border-[#8a50a0] ${size.width >= 390? "h-[340px] w-[280px] px-6":"h-[300px] w-[180px] px-4"}  py-10`}>
                    <div className=" flex gap-1">
                        <AiFillStar size={size.width >= 390 ?25: 20} color={"#8a50a0"}/>
                        <AiFillStar size={size.width >= 390 ?25: 20} color={"#8a50a0"}/>
                        <AiFillStar size={size.width >= 390 ?25: 20} color={"#8a50a0"}/>
                        <AiFillStar size={size.width >= 390 ?25: 20} color={"#8a50a0"}/>
                        <AiFillStar size={size.width >= 390 ?25: 20} color={"#8a50a0"}/>
                    </div>
                    <div className={`h-full text-start overflow-auto ${size.width >= 390? "text-[12.5px]":"text-[8.5px]"} font-poppins pt-6 font-medium`}>
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
                <div className={`absolute ${size.width >= 390? "top-3":"top-7"} left-5 flex items-center`}>
                    <div className={`rounded-full shadow-[0px_0px_5px_5px_rgba(0,0,0,0.15)]  p-[3px] bg-white ${size.width >= 390? 'h-20':'h-16'}`}>
                        <img src={Avatar} alt="" className="rounded-full"/>
                    </div>
                    <div className="pl-2 text-start">
                        <div className={`font-poppins font-bold tracking-[1.5px] ${size.width >= 390? "text-[15px]":"text-[11px]"}` }>
                            M E L I S S A
                        </div>
                        <div className={`font-poppins  ${size.width >= 390? "text-[13px]":"text-[10px]"}`}>
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
