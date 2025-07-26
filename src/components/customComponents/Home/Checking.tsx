import Image from "next/image";
import React from "react";

interface TestimonialData {
  id: string;
  name: string;
  profile_image: string;
  description: string;
  testimonial: string;
  video_url: string;
  video_type?: string;
  thumb?: string;
}

interface Props {
  data: TestimonialData;
}

const TestimonialCard: React.FC<Props> = ({ data }) => {
  const { name, profile_image, description, testimonial, video_url } = data;

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-4 space-y-4">
      <div className="flex items-center space-x-4">
        <Image
          src={profile_image}
          alt={name}
          width={64}
          height={64}
          className="rounded-full object-cover"
        />
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>

      <p className="text-gray-700">{testimonial}</p>

      {video_url && (
        <div className="aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${video_url}`}
            title={`${name}'s Testimonial`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;
