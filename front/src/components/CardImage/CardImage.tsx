'use client';

import Link from 'next/link';
import {FC, ReactNode} from 'react';
import css from './CardImage.module.scss';

type CardImageProps = {
    title: ReactNode;
    action: ReactNode;
    link: string;
    image: string;
};

export const CardImage: FC<CardImageProps> = (props) => {
    const {title, action, link, image} = props;

    return (
        <Link href={link} className={css.CardImage}>
            <div className={css.CardImage__image}>
                <img src={image} alt="" className={css.CardImage__imagePic} />
            </div>
            <div className={css.CardImage__content}>
                <div className={css.CardImage__title}>{title}</div>
                <div className={css.CardImage__action}>{action}</div>
            </div>
        </Link>
    );
};
