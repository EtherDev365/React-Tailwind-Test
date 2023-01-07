
import Video from "src/components/Main/components/Video";
import Topic from "src/components/Main/components/Topic";
import Images from "src/components/Main/components/Images";
import Summary from "src/components/Main/components/Summary";
const Main = () => {
  return (
    <div className="relative xl:mx-36 xl:mt-20">
      <div className="w-full text-center md:px-10 xl:grid xl:grid-cols-2">
        <div className="xl:col-span-1 order-2 xl:mx-5 xl:pl-5">
          <div className="h-full block">
            <Video />
            <div className="hidden h-full relative xl:block">
              <Images />
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 order-1 xl:mx-5 xl:pr-5">
          <Topic />
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default Main;
