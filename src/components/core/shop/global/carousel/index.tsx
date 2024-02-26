import React, { ReactNode, useState } from "react";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { ArrowLeft, ArrowRight } from "lucide-react";

const AdaptiveHeight: KeenSliderPlugin = (slider) => {
  function updateHeight() {
    slider.container.style.height =
      slider.slides[slider.track.details.rel].offsetHeight + "px";
  }
  slider.on("created", updateHeight);
  slider.on("slideChanged", updateHeight);
};

export default function Carousel(Props: {
  data: any;
  perView?: number;
  Component?: (item: any, key: number) => void;
  className?: string;
  style?: any;
}) {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      //   mode: "free-snap",
      slides: {
        origin: "auto",
        perView: Props.perView || 1.2,
        spacing: 15,
      },
    },
    [AdaptiveHeight]
  );

  return (
    <>
      <div className="navigation-wrapper">
        <div
          ref={sliderRef}
          className={`keen-slider !h-auto`}
          style={Props.style}
        >
          {Props?.Component
            ? Props.data?.map(
                (item: { name: string; image: string }, index: number) => {
                  return Props?.Component(item, index) || [];
                }
              )
            : Props.data?.map(
                (
                  item: { name: string; image: string; href: string },
                  index: number
                ) => {
                  return (
                    <div
                      key={index}
                      onClick={() =>
                        item.href ? router.push(item.href) : null
                      }
                      className={`keen-slider__slide border-l border-l-orange-500 h-80 ${
                        item.href ? "cursor-pointer" : ""
                      } lg:h-80`}
                    >
                      <blockquote className="relative flex flex-col h-full justify-between bg-black p-6 shadow-sm sm:p-8 lg:p-12">
                        <footer className="absolute bottom-6 left-6 text-xl font-medium text-white sm:mt-6 z-10">
                          &mdash; {item?.name}
                        </footer>
                        <Image
                          src={item?.image}
                          alt="me"
                          fill
                          sizes="100%"
                          className="object-cover opacity-70 absolute top-0 left-0 right-0 bottom-0 x-0"
                          priority={true}
                        />
                      </blockquote>
                    </div>
                  );
                }
              )}
        </div>
        {loaded && instanceRef.current && (
          <div className="flex gap-6 items-center">
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </div>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <div
      onClick={!props.disabled ? props.onClick : () => null}
      className="mt-6 flex items-center justify-center w-12 h-12 p-4 border border-orange-500 cursor-pointer text-orange-500 transition-all hover:bg-orange-500 hover:text-white"
    >
      {props.left ? (
        <ArrowRight className="w-12 h-12" />
      ) : (
        <ArrowLeft className="w-12 h-12" />
      )}
    </div>
  );
}
