"use client";
import { useState } from "react";
import { PlayCircle } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles.css"; // your Swiper styles

export default function MediaCarousel({ media }: { media: any[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  return (
    <>
      {/* Main Swiper */}
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {media.map((item, idx) => {
          const isVideo = item.resource_type === "video";
          const isImage = item.resource_type === "image";

          return (
            <SwiperSlide key={idx}>
              <div className="w-full h-full relative rounded-xl overflow-hidden">
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
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <PlayCircle className="text-white w-14 h-14" />
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
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
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
