
import ItemsSlider from './slider';
const Slider = () => {
  return (
    <div className="relative mt-10 lg:mx-36">
      <div className="w-full text-center p-0 xl:p-0">
        <div className="my-14 text-center text-2xl sm:text-4xl xl:text-3xl font-black text-[#8a50a0] xl:px-40">
          We ve helped over 200,000 People create better, deeper, more 
          meaningful relationships just see what they have to say about it!
        </div>
        <ItemsSlider/>
        <div className='p-[50px]'>
          <div className='p-[10px] text-white hidden bg-[#8a50a0] rounded-full mx-80 xl:block'>
              START TODAY!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
