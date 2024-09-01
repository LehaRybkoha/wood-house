import {Text} from '@gravity-ui/uikit';
import Link from 'next/link';
import {FC} from 'react';

import css from './Banner.module.scss';

export const Banner: FC = () => {
    return (
        <div className={css.Banner}>
            <img src="/house.png" alt="" className={css.Banner__image} />
            <div className={css.Banner__aside}>
                <div className={css.Banner__asideBlock}>
                    <Text variant="header-1" color="light-primary" className={css.Banner__title}>
                        «Волжский Дом» - строительство срубов домов и бань
                    </Text>
                </div>
                <div className={css.Banner__asideBlock}>
                    <Text variant="header-1" color="light-primary" className={css.Banner__info}>
                        До конца июля на все дома и бани скидки! Подробности по телефону.
                    </Text>
                    <div className={css.Banner__links}>
                        <Link href="/bani-iz-sruba" className={css.Banner__link}>
                            <Text variant="header-1" color="link" className={css.Banner__link}>
                                Заказать баню со скидкой
                            </Text>
                        </Link>
                        <Link href="/doma-iz-sruba" className={css.Banner__link}>
                            <Text variant="header-1" color="link" className={css.Banner__link}>
                                Заказать дом со скидкой
                            </Text>
                        </Link>
                    </div>
                </div>
                <div className={css.Banner__asideBlock}>
                    <div className={css.Banner__phones}>
                        <a href="tel:+74957681709" className={css.Banner__phoneLink}>
                            <Text
                                variant="header-1"
                                color="light-primary"
                                className={css.Banner__phone}
                            >
                                +7 (917) 036-71-77
                            </Text>
                        </a>
                        <a href="tel:+74957681709" className={css.Banner__phoneLink}>
                            <Text
                                variant="header-1"
                                color="light-primary"
                                className={css.Banner__phone}
                            >
                                +7 (917) 104-91-81
                            </Text>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
