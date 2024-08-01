'use client';

import Link from 'next/link';
import {FC, ReactNode} from 'react';
import css from './CardImage.module.scss';

type CardImageProps = {
    title: ReactNode;
    action: ReactNode;
    link: string;
};

export const CardImage: FC<CardImageProps> = (props) => {
    const {title, action, link} = props;

    const resHouse = fetch('http://194.58.126.86/api/houses');

    return (
        <Link href={link} className={css.CardImage}>
            <div className={css.CardImage__image}>
                <img
                    src="https://moy-srub.ru/upload/iblock/30e/twjvp12izvzjzoadyyrcnk148ayhbt1g.webp"
                    alt=""
                    className={css.CardImage__imagePic}
                />
            </div>
            <div className={css.CardImage__content}>
                <div className={css.CardImage__title}>{title}</div>
                <div className={css.CardImage__action}>{action}</div>
            </div>
        </Link>
    );
};
