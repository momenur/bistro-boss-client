import SectionTitle from "../../../components/SectionTitle/SectionTitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

// Custom Css
import './OrderOnline.css'

// Import Slider Image

import sliderImage1 from '../../../assets/home/slide1.jpg'
import sliderImage2 from '../../../assets/home/slide2.jpg'
import sliderImage3 from '../../../assets/home/slide3.jpg'
import sliderImage4 from '../../../assets/home/slide4.jpg'
import sliderImage5 from '../../../assets/home/slide5.jpg'




const OrderOnline = () => {
    return (
        <div className="my-12">
            <SectionTitle
                subTitle='From 11:00am to 10:00pm' title='order online'
            >
            </SectionTitle>

            <div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide >
                        <div className="w-full">
                            <img src={sliderImage1} alt="" className="relative w-full " />
                            <h1 className="absolute inset-x-0 m-0 text-3xl font-semibold text-center text-white uppercase bottom-4">Salads</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full">
                            <img src={sliderImage2} alt="" className="relative w-full " />
                            <h1 className="absolute inset-x-0 m-0 text-3xl font-semibold text-center text-white uppercase bottom-4">soups</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full">
                            <img src={sliderImage3} alt="" className="relative w-full " />
                            <h1 className="absolute inset-x-0 m-0 text-3xl font-semibold text-center text-white uppercase bottom-4">pizzas</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full">
                            <img src={sliderImage4} alt="" className="relative w-full " />
                            <h1 className="absolute inset-x-0 m-0 text-3xl font-semibold text-center text-white uppercase bottom-4">desserts</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full">
                            <img src={sliderImage5} alt="" className="relative w-full " />
                            <h1 className="absolute inset-x-0 m-0 text-3xl font-semibold text-center text-white uppercase bottom-4">Salads</h1>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default OrderOnline;