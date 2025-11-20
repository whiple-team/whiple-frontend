import "swiper/css";
import BestWhiskey from "./BestWhiskey";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

interface BestWhiskeySliderProps {
    items : {
        id: number;
        image : string;
    }[];
}

export default function BestWhiskeyArr ({items}: BestWhiskeySliderProps) {
    return(
        <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={16}
            loop={true}
            autoplay={{
                delay: 4500,
                disableOnInteraction : false,
            }}
        >
            {items.map(item =>(
                <SwiperSlide key={item.id}>
                    <div className="flex justify-center">
                        <BestWhiskey id={item.id} image={item.image}/>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}