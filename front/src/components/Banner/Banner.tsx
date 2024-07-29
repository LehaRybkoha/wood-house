import {Text} from '@gravity-ui/uikit';
import {FC} from 'react';

import css from './Banner.module.scss';

export const Banner: FC = () => {
    return (
        <div className={css.Banner}>
            <img
                src="https://moy-srub.ru/upload/resize_cache/iblock/de1/1280_700_2/4tft8d0fzwvjsxmsphdnzw1z0l9zqgv5.jpg"
                alt=""
                className={css.Banner__image}
            />
            <div className={css.Banner__aside}>
                <div className={css.Banner__asideBlock}>
                    <Text variant="header-1" color="light-primary" className={css.Banner__title}>
                        «Русский Сруб» - строительство срубов домов и бань
                    </Text>
                </div>
                <div className={css.Banner__asideBlock}>
                    <Text variant="header-1" color="light-primary" className={css.Banner__info}>
                        До конца июля на все дома и бани скидки! Подробности по телефону.
                    </Text>
                    <div className={css.Banner__links}>
                        <Text variant="header-1" color="link" className={css.Banner__link}>
                            Заказать баню со скидкой
                        </Text>
                        <Text variant="header-1" color="link" className={css.Banner__link}>
                            Заказать дом со скидкой
                        </Text>
                    </div>
                </div>
                <div className={css.Banner__asideBlock}>
                    <div className={css.Banner__phones}>
                        <Text
                            variant="header-1"
                            color="light-primary"
                            className={css.Banner__phone}
                        >
                            +7 (495) 768-17-09
                        </Text>
                        <Text
                            variant="header-1"
                            color="light-primary"
                            className={css.Banner__phone}
                        >
                            +7 (812) 920-32-45
                        </Text>
                    </div>
                    <Text variant="header-1" color="light-primary" className={css.Banner__hint}>
                        ООО «СК-РусСтрой» ИНН 5027296210
                    </Text>
                </div>
            </div>
        </div>
    );
};
