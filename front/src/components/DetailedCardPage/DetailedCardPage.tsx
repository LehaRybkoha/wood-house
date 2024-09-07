'use client';

import {Card, Text} from '@gravity-ui/uikit';
import {FC, useEffect, useMemo, useState} from 'react';
import {ButtonClient} from '../ButtonClient/ButtonClient';
import css from './DetailedCardPage.module.scss';

import {Bath} from '@/app/bani-iz-sruba/page';
import {toggleModal} from '@/store/modalStore';
import cx from 'classnames';
import {useParams, usePathname} from 'next/navigation';
import {DetailedCardPageSlider} from './DetailedCardPageSlider';

import {Carcas} from '@/app/carcas-bani/page';
import {House} from '@/app/doma-iz-sruba/page';
import bathsJson from '@/mocks/baths-mock.json';
import carcasJson from '@/mocks/carcas-mock.json';
import housesJson from '@/mocks/houses-mock.json';

export const DetailedCardPage: FC = () => {
    const params = useParams();
    const pathname = usePathname();

    const [bath, setBath] = useState<Bath | House | Carcas | null>(null);

    const currentImage = useMemo(() => {
        if (!bath) {
            return '';
        }
        if (pathname.includes('doma-iz-sruba')) {
            return `/doma-iz-sruba/${bath.id}`;
        } else if (pathname.includes('carcas-bani')) {
            return `/carcas-bani/${bath.id}`;
        } else {
            return `/bani-iz-sruba/${bath.id}`;
        }
    }, [bath]);

    useEffect(() => {
        let dataMock = null;
        if (pathname.includes('doma-iz-sruba')) {
            dataMock = housesJson as unknown as House[];
        } else if (pathname.includes('carcas-bani')) {
            dataMock = carcasJson as unknown as Carcas[];
        } else {
            dataMock = bathsJson as unknown as Bath[];
        }

        if (!dataMock) {
            return;
        }

        const founded = dataMock.find((item) => item.id === Number(params.slug));
        setBath(founded);
    }, [params, pathname, setBath]);

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
                        <DetailedCardPageSlider bath={bath} img={currentImage} />
                    </div>
                    <div className={css.DetailedCardPage__right}>
                        <div className={css.DetailedCardPage__details}>
                            {bath.information.map((item) => {
                                return (
                                    <div key={item.title} className={css.DetailedCardPage__info}>
                                        <Text
                                            variant="display-3"
                                            color="complementary"
                                            className={css.DetailedCardPage__infoTitle}
                                        >
                                            {item.title}
                                        </Text>
                                        <div className={css.DetailedCardPage__infoList}>
                                            {item.values.map((value, idx) => {
                                                return (
                                                    <div
                                                        key={idx}
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
                                                return <li key={char}>{char}</li>;
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
                                                return <li key={comp}>{comp}</li>;
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
