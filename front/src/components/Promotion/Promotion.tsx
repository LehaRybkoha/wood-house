import {Text} from '@gravity-ui/uikit';
import {FC} from 'react';

import css from './Promotion.module.scss';

export const Promotion: FC = () => {
    return (
        <div className={css.Promotion}>
            <div className={css.Promotion__block}>
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
            </div>
            <div className={css.Promotion__block}>
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
                            Скидка
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
            </div>
            <div className={css.Promotion__block}>
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
                            Скидка
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
            </div>
            <div className={css.Promotion__block}>
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
                            Скидка
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
            </div>
        </div>
    );
};
