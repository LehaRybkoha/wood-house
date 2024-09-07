'use client';

import {FC, useCallback, useState} from 'react';

import {Bath} from '@/app/bani-iz-sruba/page';
import css from './DetailedCardPage.module.scss';

type DetailedCardPageSliderProps = {
    bath: Bath;
    img: string;
};

export const DetailedCardPageSlider: FC<DetailedCardPageSliderProps> = (props) => {
    const {bath, img} = props;

    const [mainImage, setMainImage] = useState(img + '/1.jpg');

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
                {bath.images.map((src, idx) => {
                    return (
                        <div
                            key={src}
                            className={css.DetailedCardPage__sliderListItem}
                            onClick={() => handleImageUpdate(img + `/${idx + 1}.jpg`)}
                        >
                            <img
                                className={css.DetailedCardPage__sliderListItemImage}
                                src={img + `/${idx + 1}.jpg`}
                                alt=""
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
