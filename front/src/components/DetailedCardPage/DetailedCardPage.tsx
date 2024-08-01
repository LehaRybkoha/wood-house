'use client';

import {Card, Text} from '@gravity-ui/uikit';
import {FC, useEffect, useState} from 'react';
import {ButtonClient} from '../ButtonClient/ButtonClient';
import css from './DetailedCardPage.module.scss';

import {Bath} from '@/app/bani-iz-sruba/page';
import {toggleModal} from '@/store/modalStore';
import cx from 'classnames';
import {useParams} from 'next/navigation';
import {DetailedCardPageSlider} from './DetailedCardPageSlider';
export const DetailedCardPage: FC = () => {
    const params = useParams();

    const [bath, setBath] = useState<Bath | null>(null);

    useEffect(() => {
        if (window.location.pathname === 'doma-iz-sruba') {
            fetch('http://194.58.126.86/api/houses/' + params.slug, {
                mode: 'no-cors',
            })
                .then((res) => res.json())
                .then((data) => setBath(data));
        } else {
            fetch('http://194.58.126.86/api/houses/' + params.slug, {
                mode: 'no-cors',
            })
                .then((res) => res.json())
                .then((data) => setBath(data));
        }
    }, []);

    if (!bath) {
        return null;
    }

    return (
        <div className={css.DetailedCardPage}>
            <div className={css.DetailedCardPage__title}>
                <Text variant="display-1" color="brand">
                    {bath.name}
                </Text>
            </div>
            <div className={css.DetailedCardPage__content}>
                <div className={css.DetailedCardPage__main}>
                    <div className={css.DetailedCardPage__left}>
                        <DetailedCardPageSlider bath={bath} />
                    </div>
                    <div className={css.DetailedCardPage__right}>
                        <div className={css.DetailedCardPage__details}>
                            {bath.information.map((item) => {
                                return (
                                    <div className={css.DetailedCardPage__info}>
                                        <Text
                                            variant="display-3"
                                            color="complementary"
                                            className={css.DetailedCardPage__infoTitle}
                                        >
                                            {item.title}
                                        </Text>
                                        <div className={css.DetailedCardPage__infoList}>
                                            {item.values.map((value) => {
                                                return (
                                                    <div
                                                        className={
                                                            css.DetailedCardPage__infoListItem
                                                        }
                                                    >
                                                        <Text variant="body-3">{value[0]}</Text>
                                                        <Text variant="body-3">{value[1]}</Text>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={css.DetailedCardPage__action}>
                            <Text
                                variant="display-3"
                                color="brand"
                                className={css.DetailedCardPage__priceText}
                            >
                                {bath.price} руб.
                            </Text>
                            <div>
                                <ButtonClient
                                    className={css.DetailedCardPage__actionButton}
                                    size="xl"
                                    view="action"
                                    onClick={() => {
                                        toggleModal(true);
                                    }}
                                >
                                    Заказать
                                </ButtonClient>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('base-block', css.DetailedCardPage__bottom)}>
                    <Card view="raised" type="container" size="l">
                        <div className={'base-card'}>
                            <Text variant="body-3" color="dark-secondary" className="base-desc">
                                {bath.description}
                            </Text>
                            <div className={css.DetailedCardPage__additional}>
                                <div className={css.DetailedCardPage__additionalLeft}>
                                    <Text
                                        className={css.DetailedCardPage__additionalTitle}
                                        variant="display-2"
                                        color="complementary"
                                    >
                                        Характеристика сруба:
                                    </Text>
                                    <Text
                                        className={css.DetailedCardPage__additionalDesc}
                                        variant="body-3"
                                    >
                                        <ul>
                                            {bath.characteristic.map((char) => {
                                                return <li>{char}</li>;
                                            })}
                                        </ul>
                                    </Text>
                                </div>
                                <div className={css.DetailedCardPage__additionalRight}>
                                    <Text
                                        className={css.DetailedCardPage__additionalTitle}
                                        variant="display-2"
                                        color="complementary"
                                    >
                                        В комплектацию сруба входит:
                                    </Text>
                                    <Text
                                        className={css.DetailedCardPage__additionalDesc}
                                        variant="body-3"
                                    >
                                        <ul>
                                            {bath.complection.map((comp) => {
                                                return <li>{comp}</li>;
                                            })}
                                        </ul>
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};
