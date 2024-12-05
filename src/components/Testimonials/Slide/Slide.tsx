import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { dataTestimonials } from "../Testimonials.data";
import Reveal from "@/components/Reveal/Reveal";

export function Slide() {
  return (
    <div
    >
      {dataTestimonials.map(({ id, name, work, testimonial, image }) => (
          <div key={id}>
            <Reveal>
            <Image
              src="/assets/testimonail-icon.png"
              alt="Testimonial"
              width={50}
              height={50}
              className="w-auto h-auto"
            />
            <div className="my-5">{testimonial}</div>
            <div className="flex">
              <Image
                src={image}
                alt="Client"
                width={50}
                height={50}
                className="mr-5"
              />
              <div>
                <h4 className="text-center">{name}</h4>
                <p className="text-primaryDark">{work}</p>
              </div>
            </div>
          </Reveal>
          </div>
      ))}
    </div>
  );
}
