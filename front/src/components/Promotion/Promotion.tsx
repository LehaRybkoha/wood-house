import {Text} from '@gravity-ui/uikit';
import {FC} from 'react';

import Link from 'next/link';
import css from './Promotion.module.scss';

export const Promotion: FC = () => {
    return (
        <div className={css.Promotion}>
            <Link href="/kredit" className={css.Promotion__block}>
                <img
                    className={css.Promotion__image}
                    src="https://moy-srub.ru/images/cred.webp"
                    alt=""
                />
                <div className={css.Promotion__head}>
                    <div className={css.Promotion__info}>
                        <Text
                            variant="caption-2"
                            color="light-primary"
                            className={css.Promotion__infoText}
                        >
                            от 6.9%
                        </Text>
                    </div>
                    <div className={css.Promotion__title}>
                        <Text
                            variant="header-1"
                            color="light-primary"
                            className={css.Promotion__titleText}
                        >
                            Срубы в кредит
                        </Text>
                    </div>
                </div>
                <div className={css.Promotion__desc}>
                    <Text
                        variant="body-3"
                        color="light-primary"
                        className={css.Promotion__descText}
                    >
                        Хотите заказать сруб и копите? <br /> Купите сейчас и ждите усадку!
                    </Text>
                </div>
            </Link>
            <Link href="/rubanok" className={css.Promotion__block}>
                <img
                    className={css.Promotion__image}
                    src="https://moy-srub.ru/images/rubanok.webp"
                    alt=""
                />
                <div className={css.Promotion__head}>
                    <div className={css.Promotion__info}>
                        <Text
                            variant="caption-2"
                            color="light-primary"
                            className={css.Promotion__infoText}
                        >
                            Скидка
                        </Text>
                    </div>
                    <div className={css.Promotion__title}>
                        <Text
                            variant="header-1"
                            color="light-primary"
                            className={css.Promotion__titleText}
                        >
                            Обработка сруба рубанком
                        </Text>
                    </div>
                </div>
                <div className={css.Promotion__desc}>
                    <Text
                        variant="body-3"
                        color="light-primary"
                        className={css.Promotion__descText}
                    >
                        Закажите сруб сейчас и получите <br />
                        обработку рубанком бесплатно!
                    </Text>
                </div>
            </Link>
            <Link href="/svai" className={css.Promotion__block}>
                <img
                    className={css.Promotion__image}
                    src="https://moy-srub.ru/images/svai.webp"
                    alt=""
                />
                <div className={css.Promotion__head}>
                    <div className={css.Promotion__info}>
                        <Text
                            variant="caption-2"
                            color="light-primary"
                            className={css.Promotion__infoText}
                        >
                            Скидка
                        </Text>
                    </div>
                    <div className={css.Promotion__title}>
                        <Text
                            variant="header-1"
                            color="light-primary"
                            className={css.Promotion__titleText}
                        >
                            Свайно-винтовой фундамент
                        </Text>
                    </div>
                </div>
                <div className={css.Promotion__desc}>
                    <Text
                        variant="body-3"
                        color="light-primary"
                        className={css.Promotion__descText}
                    >
                        Закажите сруб сейчас и получите <br />
                        скидку на устройство фундамента!
                    </Text>
                </div>
            </Link>
            <Link href="/krovla" className={css.Promotion__block}>
                <img
                    className={css.Promotion__image}
                    src="https://moy-srub.ru/images/krovlya.webp"
                    alt=""
                />
                <div className={css.Promotion__head}>
                    <div className={css.Promotion__info}>
                        <Text
                            variant="caption-2"
                            color="light-primary"
                            className={css.Promotion__infoText}
                        >
                            Скидка
                        </Text>
                    </div>
                    <div className={css.Promotion__title}>
                        <Text
                            variant="header-1"
                            color="light-primary"
                            className={css.Promotion__titleText}
                        >
                            Кровля из металлочерепицы
                        </Text>
                    </div>
                </div>
                <div className={css.Promotion__desc}>
                    <Text
                        variant="body-3"
                        color="light-primary"
                        className={css.Promotion__descText}
                    >
                        Закажите кровлю сразу со срубом и <br />
                        получите выгодную скидку на всё
                    </Text>
                </div>
            </Link>
        </div>
    );
};
