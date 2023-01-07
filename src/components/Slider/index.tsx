
import ItemsSlider from './slider';
const Slider = () => {
  return (
    <div className="relative md:mt-10 lg:mx-36">
      <div className="w-full text-center px-4 xl:p-0">
        <div className="mt-5 sm:my-10 md:my-14 text-center text-[20px] sm:text-4xl xl:text-3xl font-black text-[#8a50a0] md:px-10 xl:px-40">
          We've Helped Over 200,000 People Create Better, Deeper, More 
          Meaningful Relationships Just See What They Have To Say About It!
        </div>
        <ItemsSlider/>
        <div className='w-full py-[50px] flex justify-center'>
          <button type="button" className="inline-block leading-tight uppercase shadow-md hover:bg-[#8a50ff] hover:shadow-lg focus:bg-[#8a50a0] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out text-white hidden bg-[#8a50a0] rounded-full xl:block px-48 py-2 font-poppins font-medium">
          START TODAY!</button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
