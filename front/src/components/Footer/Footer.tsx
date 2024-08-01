import {FC} from 'react';

import {Text} from '@gravity-ui/uikit';
import cx from 'classnames';
import css from './Footer.module.scss';

type HeaderProps = {
    className: string;
};

export const Footer: FC<HeaderProps> = (props) => {
    const {className} = props;

    return (
        <div className={cx(className, css.Footer)}>
            <div className="container">
                <div className={css.Footer__content}>
                    <div className={css.Footer__top}>
                        <div className={css.Address__List}>
                            <div className={css.Address__ListItem}>
                                <Text variant="header-2">Москва</Text>
                                <Text variant="body-3">
                                    Московская область, Дзержинское ш., вл. 7/7, участок 106, “Белая
                                    Дача”
                                </Text>
                                <a className={css.Address__ListItemPhone} href="">
                                    +7 (495) 768-17-09
                                </a>
                                <a className={css.Address__ListItemPhone} href="">
                                    +7 (812) 920-32-45
                                </a>
                            </div>
                            <div className={css.Address__ListItem}>
                                <Text variant="header-2">Санкт-Петербург</Text>
                                <Text variant="body-3">
                                    Россия, Санкт-Петербург, улица Коллонтай, 18
                                </Text>
                                <a className={css.Address__ListItemPhone} href="">
                                    +7 (812) 920-32-45
                                </a>
                                <a className={css.Address__ListItemPhone} href="">
                                    +7 (919) 786-87-45
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={css.Footer__bottom}>
                        <Text className={css.Footer__Copyright}>Волжский Дом 1997-2024</Text>
                    </div>
                </div>
            </div>
        </div>
    );
};
