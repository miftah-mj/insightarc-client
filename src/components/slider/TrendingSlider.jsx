import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import news1 from "../../assets/trending-news-01.webp";

const Slider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 w-full h-[80vh]"
            >
                <SwiperSlide>
                    <img className="w-full h-full object-cover" src={news1} />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
                        <h2 className="text-2xl font-bold">
                            ChatGPT back online after outage which hit thousands
                            worldwide
                        </h2>
                        <p className="text-sm mt-2">
                            The outage, which lasted for several hours, affected
                            users across the globe.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-full object-cover" src={news1} />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
                        <h2 className="text-2xl font-bold">
                            ChatGPT back online after outage which hit thousands
                            worldwide
                        </h2>
                        <p className="text-sm mt-2">
                            The outage, which lasted for several hours, affected
                            users across the globe.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-full object-cover" src={news1} />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
                        <h2 className="text-2xl font-bold">
                            ChatGPT back online after outage which hit thousands
                            worldwide
                        </h2>
                        <p className="text-sm mt-2">
                            The outage, which lasted for several hours, affected
                            users across the globe.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-full object-cover" src={news1} />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
                        <h2 className="text-2xl font-bold">
                            ChatGPT back online after outage which hit thousands
                            worldwide
                        </h2>
                        <p className="text-sm mt-2">
                            The outage, which lasted for several hours, affected
                            users across the globe.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper w-full h-[15vh] mt-4"
            >
                <SwiperSlide>
                    <img className="w-full h-full object-cover" src={news1} />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
                        <h2 className="text-2xl font-bold">
                            ChatGPT back online after outage which hit thousands
                            worldwide
                        </h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-full object-cover" src={news1} />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
                        <h2 className="text-2xl font-bold">
                            ChatGPT back online after outage which hit thousands
                            worldwide
                        </h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-full object-cover" src={news1} />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
                        <h2 className="text-2xl font-bold">
                            ChatGPT back online after outage which hit thousands
                            worldwide
                        </h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-full object-cover" src={news1} />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
                        <h2 className="text-2xl font-bold">
                            ChatGPT back online after outage which hit thousands
                            worldwide
                        </h2>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;
