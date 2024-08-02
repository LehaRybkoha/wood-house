'use client';

import {FC, useCallback, useState} from 'react';

import {Bath} from '@/app/bani-iz-sruba/page';
import css from './DetailedCardPage.module.scss';

type DetailedCardPageSliderProps = {
    bath: Bath;
};

export const DetailedCardPageSlider: FC<DetailedCardPageSliderProps> = (props) => {
    const {bath} = props;

    const [mainImage, setMainImage] = useState(bath.images[0]);

    const handleImageUpdate = useCallback((src: string) => {
        setMainImage(src);
    }, []);

    return (
        <div className={css.DetailedCardPage__slider}>
            <div className={css.DetailedCardPage__sliderMainImage}>
                <a href={mainImage} data-fancybox="gallery">
                    <img
                        className={css.DetailedCardPage__sliderMainImageImg}
                        src={mainImage}
                        alt=""
                    />
                </a>
            </div>
            <div className={css.DetailedCardPage__sliderList}>
                {bath.images.map((src) => {
                    return (
                        <div
                            key={src}
                            className={css.DetailedCardPage__sliderListItem}
                            onClick={() => handleImageUpdate(src)}
                        >
                            <img
                                className={css.DetailedCardPage__sliderListItemImage}
                                src={src}
                                alt=""
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
