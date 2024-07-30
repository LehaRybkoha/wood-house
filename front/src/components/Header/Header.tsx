import {DispatchWithoutAction, FC} from 'react';

import {Bars, Handset} from '@gravity-ui/icons';
import {Button, Icon, Text} from '@gravity-ui/uikit';
import cx from 'classnames';
import Link from 'next/link';
import css from './Header.module.scss';

type HeaderProps = {
    className: string;
    toggleMenu: DispatchWithoutAction;
};

export const Header: FC<HeaderProps> = (props) => {
    const {className, toggleMenu} = props;

    return (
        <div className={cx(className, css.Header)}>
            <div className="container">
                <div className={css.Header__content}>
                    <Button className={css.Header__burger} size="xl" onClick={toggleMenu}>
                        <Icon data={Bars} size={30} />
                    </Button>
                    <div className={css.Header__logo}>
                        <img
                            className={css.Header__image}
                            src="https://moy-srub.ru/bitrix/templates/moysrub/images/logo.png"
                            alt=""
                        />
                    </div>
                    <div className={css.Header__actions}>
                        <Button
                            className={css.Header__action}
                            size="xl"
                            view="action"
                            pin="circle-circle"
                        >
                            <Icon data={Handset} />
                            <span className={css.Header__action_text}>Заказать звонок</span>
                        </Button>
                    </div>
                    <div className={css.Header__info}>
                        <div className={css.Header__address}>
                            <Text className={css.Header__addressText}>
                                МО, г. Котельники, Дзержинское ш., вл 7/7, п. Малоэтажная страна,
                                д.19
                            </Text>
                        </div>
                        <div className={css.Header__phone}>
                            <Text variant="header-1" className={css.Header__phoneNumber}>
                                <a className={css.Header__phoneNumberLink} href="tel:+74991124429">
                                    8 (499) 112-44-29
                                </a>
                            </Text>
                            <Link className={css.Header__contacts} href="/contacts">
                                Контакты
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
