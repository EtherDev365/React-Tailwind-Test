import { useState } from "react";
import {BiLoaderAlt} from "react-icons/bi"
import {IoMdClose} from "react-icons/io"
const Video = () => {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);
  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return (
    <div className="relative px-4">
      <div className="w-full text-center  p-4 shadow-[0px_0px_10px_2px_rgba(0,0,0,0.15)] rounded-lg">
        <div className="relative">
          <video className="w-full ">
            <source className="" src='https://storage.googleapis.com/pds_videos/testimonial-video-short%20.mp4' type='video/mp4'/>
          </video>
          <div className="absolute left-5 top-0 h-full w-1/2  flex items-center justify-end" onClick={() => setModal(true)}>
            <button className="rounded-full w-12 h-12 flex items-center justify-center pl-0.5 ring-2 ring-white focus:outline-none">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </button>
          </div>
        </div>
      </div>
      {modal ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content">
                <IoMdClose
                  className="modal__close"
                  arial-label="Close modal" 
                  onClick={() => setModal(false)}
                />
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      <BiLoaderAlt
                        className="modal__spinner-style"
                      />
                    </div>
                  ) : null}
                  <iframe
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src="https://storage.googleapis.com/pds_videos/testimonial-video-short%20.mp4"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        ) : null}
    </div>
  );
};

export default Video;
