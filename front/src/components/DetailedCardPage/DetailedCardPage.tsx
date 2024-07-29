import {Card, Text} from '@gravity-ui/uikit';
import {FC} from 'react';
import {ButtonClient} from '../ButtonClient/ButtonClient';
import css from './DetailedCardPage.module.scss';

import cx from 'classnames';
import {DetailedCardPageSlider} from './DetailedCardPageSlider';

export const DetailedCardPage: FC = () => {
    return (
        <div className={css.DetailedCardPage}>
            <div className={css.DetailedCardPage__title}>
                <Text variant="display-1" color="brand">
                    Сруб бани "Анна" | 6x4м
                </Text>
            </div>
            <div className={css.DetailedCardPage__content}>
                <div className={css.DetailedCardPage__main}>
                    <div className={css.DetailedCardPage__left}>
                        <DetailedCardPageSlider />
                    </div>
                    <div className={css.DetailedCardPage__right}>
                        <div className={css.DetailedCardPage__details}>
                            <div className={css.DetailedCardPage__info}>
                                <Text
                                    variant="display-3"
                                    color="complementary"
                                    className={css.DetailedCardPage__infoTitle}
                                >
                                    Габариты
                                </Text>
                                <div className={css.DetailedCardPage__infoList}>
                                    <div className={css.DetailedCardPage__infoListItem}>
                                        <Text variant="body-3">Площадь бани</Text>
                                        <Text variant="body-3">24 м2</Text>
                                    </div>
                                    <div className={css.DetailedCardPage__infoListItem}>
                                        <Text variant="body-3">Размер сруба</Text>
                                        <Text variant="body-3">6x4 м</Text>
                                    </div>
                                    <div className={css.DetailedCardPage__infoListItem}>
                                        <Text variant="body-3">Веранда</Text>
                                        <Text variant="body-3">отсутствует м</Text>
                                    </div>
                                </div>
                            </div>
                            <div className={css.DetailedCardPage__info}>
                                <Text
                                    variant="display-3"
                                    color="complementary"
                                    className={css.DetailedCardPage__infoTitle}
                                >
                                    Фундаменты
                                </Text>
                                <div className={css.DetailedCardPage__infoList}>
                                    <div className={css.DetailedCardPage__infoListItem}>
                                        <Text variant="body-3">Свайный с обвязкой</Text>
                                        <Text variant="body-3">95 800 руб</Text>
                                    </div>
                                    <div className={css.DetailedCardPage__infoListItem}>
                                        <Text variant="body-3">Ленточный</Text>
                                        <Text variant="body-3">245 000 руб</Text>
                                    </div>
                                </div>
                            </div>
                            <div className={css.DetailedCardPage__info}>
                                <Text
                                    variant="display-3"
                                    color="complementary"
                                    className={css.DetailedCardPage__infoTitle}
                                >
                                    Стоимость сруба*
                                </Text>
                                <div className={css.DetailedCardPage__infoList}>
                                    <div className={css.DetailedCardPage__infoListItem}>
                                        <Text variant="body-3">
                                            *Включает только доставку и сборку без отделки!
                                        </Text>
                                        <Text variant="body-3"></Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={css.DetailedCardPage__action}>
                            <Text
                                variant="display-3"
                                color="brand"
                                className={css.DetailedCardPage__priceText}
                            >
                                359 000 руб.
                            </Text>
                            <div>
                                <ButtonClient
                                    className={css.DetailedCardPage__actionButton}
                                    size="xl"
                                    view="action"
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
                                Сруб бани 6х4м. рубленный в "лапу". Пятая стена 4м. В подарок, при
                                заказе сруба до конца месяца: обработка сруба под рубанок!
                                Планировка сруба свободная. Перегородка ставится по месту на
                                участке, проемы под окна и двери так же вырезаются по месту. *Мы
                                используем фото только своих работ!
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
                                            <li>рублен в "лапу", внутри тесанные стены;</li>
                                            <li>
                                                высота потолка - 2,1-2,2 м; высота мансарды 2,2-2,4
                                                м;
                                            </li>
                                            <li>размеры сруба указаны по внутренней стороне;</li>
                                            <li>
                                                диаметр бревна - 22-26 см(можно большего диаметра).
                                            </li>
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
                                            <li>
                                                Сруб-пятистенок, пятая стена 4м. (возможна замена на
                                                5м. с доплатой), рубка в лафет;
                                            </li>
                                            <li>Лаги пола из бревна;</li>
                                            <li>Потолочные балки из бревна;</li>
                                            <li>Стропила из бруса;</li>
                                            <li>Доска обрезная на обрешетку крыши - 25мм.;</li>
                                            <li>Фронтоны сруба зашиты доской - 1 сорт;</li>
                                            <li>Рубероид (кровля крыши);</li>
                                            <li>Утеплитель между бревнами мох или джут.</li>
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
