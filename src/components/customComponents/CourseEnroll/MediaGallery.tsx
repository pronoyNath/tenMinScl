"use client";
import { useState } from "react";
import { PlayCircle } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles.css"; 
import { IoPlay } from "react-icons/io5";
import TransparentArrowButton from "./TransparentArrowButton";
import type { Swiper as SwiperType } from 'swiper';
import { MediaItem } from "@/types/type";

export default function MediaCarousel({ media }: { media: MediaItem[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  return (
    <>
      <div className="relative ">
        {/* Main Swiper */}
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {media.map((item, idx) => {
            const isVideo = item.resource_type === "video";
            const isImage = item.resource_type === "image";

            return (
              <SwiperSlide key={idx}>
                <div className="w-full h-full relative  overflow-hidden ">
                  {isVideo ? (
                    playingIndex === idx ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${item.resource_value}?autoplay=1`}
                        title="video"
                        className="w-full h-full"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />
                    ) : (
                      <div
                        className="w-full h-full relative cursor-pointer"
                        onClick={() => setPlayingIndex(idx)}
                      >
                        <img
                          src={item.thumbnail_url}
                          alt="video-thumbnail"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 rounded-md flex items-center justify-center">
                          {/* play button  */}
                          <div className="relative w-14 h-14 flex items-center justify-center">
                            <div className="absolute w-16 h-16  rounded-full bg-white opacity-30 "></div>
                            <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
                              <IoPlay className="text-green-600 text-3xl" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  ) : isImage ? (
                    <img
                      src={item.resource_value}
                      alt="image"
                      className="w-full h-full object-cover"
                    />
                  ) : null}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* Custom Prev Button */}
        <TransparentArrowButton className="swiper-button-prev z-10 -left-6 absolute top-1/2 -translate-y-1/2" />
        <TransparentArrowButton className="swiper-button-next z-10 -right-6 absolute top-1/2 -translate-y-1/2" />
      </div>
      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {media.map((item, idx) => {
          const isVideo = item.resource_type === "video";
          const isImage = item.resource_type === "image";

          return (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-full">
                {isVideo ? (
                  <>
                    <img
                      src={item.thumbnail_url}
                      alt="video-thumb"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 rounded-md flex items-center justify-center">
                      <PlayCircle className="text-white w-6 h-6" />
                    </div>
                  </>
                ) : isImage ? (
                  <img
                    src={item.resource_value}
                    alt="image-thumb"
                    className="w-full h-full object-cover"
                  />
                ) : null}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
