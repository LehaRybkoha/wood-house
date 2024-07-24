'use client';

import {FC, useCallback, useRef} from 'react';

import 'swiper/css';

import {ChevronLeft, ChevronRight} from '@gravity-ui/icons';
import {Icon} from '@gravity-ui/uikit';
import {Navigation} from 'swiper/modules';
import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';
import css from './ImageSlider.module.scss';
type SliderProps = {};

export const ImageSlider: FC<SliderProps> = () => {
    const slider = useRef<SwiperRef | null>(null);

    const handlePrev = useCallback(() => {
        if (slider.current) {
            slider.current.swiper.slidePrev();
        }
    }, [slider]);

    const handleNext = useCallback(() => {
        if (slider.current) {
            slider.current.swiper.slideNext();
        }
    }, [slider]);

    return (
        <div className={css.ImageSlider}>
            <div className={css.ImageSlider__navs}>
                <div className="prev-arrow" onClick={handlePrev}>
                    <Icon data={ChevronLeft} />
                </div>
                <div className="next-arrow" onClick={handleNext}>
                    <Icon data={ChevronRight} />
                </div>
            </div>
            <Swiper
                ref={slider}
                navigation
                spaceBetween={50}
                slidesPerView={5}
                modules={[Navigation]}
            >
                <SwiperSlide>
                    <div className={css.ImageSlider__block}>
                        <img
                            className={css.ImageSlider__image}
                            src="https://moy-srub.ru/upload/images/IMG_2860.JPG"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={css.ImageSlider__block}>
                        <img
                            className={css.ImageSlider__image}
                            src="https://moy-srub.ru/upload/images/IMG_2860.JPG"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={css.ImageSlider__block}>
                        <img
                            className={css.ImageSlider__image}
                            src="https://moy-srub.ru/upload/images/IMG_2860.JPG"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={css.ImageSlider__block}>
                        <img
                            className={css.ImageSlider__image}
                            src="https://moy-srub.ru/upload/images/IMG_2860.JPG"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={css.ImageSlider__block}>
                        <img
                            className={css.ImageSlider__image}
                            src="https://moy-srub.ru/upload/images/IMG_2860.JPG"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={css.ImageSlider__block}>
                        <img
                            className={css.ImageSlider__image}
                            src="https://moy-srub.ru/upload/images/IMG_2860.JPG"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={css.ImageSlider__block}>
                        <img
                            className={css.ImageSlider__image}
                            src="https://moy-srub.ru/upload/images/IMG_2860.JPG"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={css.ImageSlider__block}>
                        <img
                            className={css.ImageSlider__image}
                            src="https://moy-srub.ru/upload/images/IMG_2860.JPG"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={css.ImageSlider__block}>
                        <img
                            className={css.ImageSlider__image}
                            src="https://moy-srub.ru/upload/images/IMG_2860.JPG"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={css.ImageSlider__block}>
                        <img
                            className={css.ImageSlider__image}
                            src="https://moy-srub.ru/upload/images/IMG_2860.JPG"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={css.ImageSlider__block}>
                        <img
                            className={css.ImageSlider__image}
                            src="https://moy-srub.ru/upload/images/IMG_2860.JPG"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
