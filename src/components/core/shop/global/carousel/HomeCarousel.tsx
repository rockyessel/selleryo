'use client';

import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
// import { useKeenSlider, KeenSliderPlugin } from "@/lib/keen";
import KeenSlider from '@/lib/keen';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import useGetScreenWidth from '@/hooks/getScreenWidthHook';
// import { useKeenSlider } from "keen-slider/react";
// import { KeenSliderPlugin } from "keen-slider";
import { cn } from '@/lib/utils/helpers';
import { useKeenSlider } from 'keen-slider/react';
// import useGetScreenHeight from "@/lib/hooks/getScreenHeightHook";

const AdaptiveHeight: KeenSlider.KeenSliderPlugin = (slider) => {
  function updateHeight() {
    slider.container.style.height =
      slider.slides[slider.track.details.rel].offsetHeight + 'px';
  }
  slider.on('created', updateHeight);
  slider.on('slideChanged', updateHeight);
};

interface Props {
  data: any;
  perView?: number;
  Component?: (item: any, key: number) => void;
  className?: string;
  style?: any;
}

interface ArrowProps {
  disabled: boolean;
  left?: boolean;
  onClick: (event: any) => void;
}

const Arrow = ({ disabled, onClick, left }: ArrowProps) => {
  // Was not used.
  // const isDisabled = disabled ? " arrow--disabled" : "";
  return (
    <div
      onClick={!disabled ? onClick : () => null}
      className={cn(
        'absolute mt-6 flex items-center justify-center rounded-full w-12 h-12 p-4 bg-white cursor-pointer text-black transition-all hover:bg-teal-600 hover:text-white',
        left ? 'left-2 md:left-4 top-[40%]' : 'right-2 md:right-4 top-[40%]'
      )}
    >
      {left ? (
        <ArrowLeft className='w-12 h-12' />
      ) : (
        <ArrowRight className='w-12 h-12' />
      )}
    </div>
  );
};

export default function HomeCarousel(props: Props) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);
  const screenWidth = useGetScreenWidth();
  const router = useRouter();
  // Was not used.
  // const screenHeight = useGetScreenHeight();

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      mode: 'free-snap',
      slides: {
        origin: 'auto',
        perView:
          screenWidth < 500
            ? 1
            : screenWidth >= 500 && screenWidth < 800
            ? 3
            : 4,
        spacing: 25,
      },
    },
    [AdaptiveHeight]
  );

  return (
    <Fragment>
      <div className='relative navigation-wrapper w-full'>
        <div
          ref={sliderRef}
          className={`keen-slider !h-auto`}
          style={props.style}
        >
          {props?.Component
            ? props.data?.map(
                (item: { name: string; image: string }, index: number) => {
                  // @ts-expect-error
                  return props?.Component(item, index) || [];
                }
              )
            : props.data?.map(
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
                      className={`keen-slider__slide border-l-6 border-l-teal-300 rounded-md h-[500px] ${
                        item.href ? 'cursor-pointer' : ''
                      } lg:h-[500px]`}
                    >
                      <blockquote className='relative flex flex-col h-full justify-between bg-black p-6 shadow-sm sm:p-8 lg:p-12'>
                        <footer className='absolute bottom-6 left-6 text-3xl font-semibold text-white sm:mt-6 z-10 lg:text-3xl lg:mb-12'>
                          &mdash; {item?.name}
                        </footer>
                        <Image
                          src={item?.image}
                          alt='me'
                          fill
                          sizes='100%'
                          className='object-cover opacity-70 absolute top-0 left-0 right-0 bottom-0 x-0'
                          priority={true}
                        />
                      </blockquote>
                    </div>
                  );
                }
              )}
        </div>
        {loaded && instanceRef.current && (
          <div className='flex gap-6 items-center'>
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
      {/* {loaded && instanceRef.current && (
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
      )} */}
    </Fragment>
  );
}
