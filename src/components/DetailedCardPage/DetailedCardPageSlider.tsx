'use client';

import {FC, useCallback, useState} from 'react';

import {Fancybox} from '../Fancybox/Fancybox';
import css from './DetailedCardPage.module.scss';

export const DetailedCardPageSlider: FC = () => {
    const [mainImage, setMainImage] = useState(
        'https://moy-srub.ru/upload/iblock/ea0/ihj7q1q7mkn7zo7lg8fikcmawjes6qq3.webp',
    );

    const handleImageUpdate = useCallback((src: string) => {
        setMainImage(src);
    }, []);

    return (
        <div className={css.DetailedCardPage__slider}>
            <div className={css.DetailedCardPage__sliderMainImage}>
                <Fancybox>
                    <a href={mainImage} data-fancybox="gallery">
                        <img
                            className={css.DetailedCardPage__sliderMainImageImg}
                            src={mainImage}
                            alt=""
                        />
                    </a>
                </Fancybox>
            </div>
            <div className={css.DetailedCardPage__sliderList}>
                <div
                    className={css.DetailedCardPage__sliderListItem}
                    onClick={() =>
                        handleImageUpdate(
                            'https://moy-srub.ru/upload/iblock/f9b/rf0ahrotdo1qd0ikwforo5ekpgomox0r.webp',
                        )
                    }
                >
                    <img
                        className={css.DetailedCardPage__sliderListItemImage}
                        src="https://moy-srub.ru/upload/iblock/f9b/rf0ahrotdo1qd0ikwforo5ekpgomox0r.webp"
                        alt=""
                    />
                </div>
                <div className={css.DetailedCardPage__sliderListItem}>
                    <img
                        className={css.DetailedCardPage__sliderListItemImage}
                        src="https://moy-srub.ru/upload/iblock/f9b/rf0ahrotdo1qd0ikwforo5ekpgomox0r.webp"
                        alt=""
                    />
                </div>
                <div className={css.DetailedCardPage__sliderListItem}>
                    <img
                        className={css.DetailedCardPage__sliderListItemImage}
                        src="https://moy-srub.ru/upload/iblock/f9b/rf0ahrotdo1qd0ikwforo5ekpgomox0r.webp"
                        alt=""
                    />
                </div>
                <div className={css.DetailedCardPage__sliderListItem}>
                    <img
                        className={css.DetailedCardPage__sliderListItemImage}
                        src="https://moy-srub.ru/upload/iblock/f9b/rf0ahrotdo1qd0ikwforo5ekpgomox0r.webp"
                        alt=""
                    />
                </div>
                <div className={css.DetailedCardPage__sliderListItem}>
                    <img
                        className={css.DetailedCardPage__sliderListItemImage}
                        src="https://moy-srub.ru/upload/iblock/f9b/rf0ahrotdo1qd0ikwforo5ekpgomox0r.webp"
                        alt=""
                    />
                </div>
                <div className={css.DetailedCardPage__sliderListItem}>
                    <img
                        className={css.DetailedCardPage__sliderListItemImage}
                        src="https://moy-srub.ru/upload/iblock/f9b/rf0ahrotdo1qd0ikwforo5ekpgomox0r.webp"
                        alt=""
                    />
                </div>
                <div className={css.DetailedCardPage__sliderListItem}>
                    <img
                        className={css.DetailedCardPage__sliderListItemImage}
                        src="https://moy-srub.ru/upload/iblock/f9b/rf0ahrotdo1qd0ikwforo5ekpgomox0r.webp"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};
