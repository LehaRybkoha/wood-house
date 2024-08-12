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
                                <Text variant="header-2">Самара</Text>
                                <Text variant="body-3">
                                    Самарская область, город Самара Стара-Загора 172 А
                                </Text>
                                <a className={css.Address__ListItemPhone} href="tel:+78129203245">
                                    +7 (917) 104-91-81{' '}
                                </a>
                                <a className={css.Address__ListItemPhone} href="tel:+79197868745">
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
