import {
    Bulb,
    ChartColumn,
    Diamond,
    Droplet,
    FolderOpen,
    HeartFill,
    House,
    Magnifier,
    MapPin,
    Palette,
    TagDollar,
} from '@gravity-ui/icons';
import {Icon, Text} from '@gravity-ui/uikit';
import cx from 'classnames';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {FC} from 'react';
import css from './Aside.module.scss';

type AsideProps = {
    className: string;
};

export const Aside: FC<AsideProps> = (props) => {
    const {className} = props;

    const pathname = usePathname();

    const navs = [
        {
            name: 'Бани из сруба',
            url: '/bani-iz-sruba',
            icon: Droplet,
        },
        {
            name: 'Дома из сруба',
            url: '/doma-iz-sruba',
            icon: House,
        },
        {
            name: 'Цены на фундамент',
            url: '/tseny-na-fundament',
            icon: TagDollar,
        },
        {
            name: 'Виды рубки',
            url: '/vidy-rubki',
            icon: Diamond,
        },
        {
            name: 'Отделка',
            url: '/vnutrennyaya-otdelka',
            icon: Palette,
        },
        {
            name: 'Лестницы',
            url: '/lestnitsy',
            icon: ChartColumn,
        },
        {
            name: 'Как заказать',
            url: '/kak-zakazat',
            icon: Magnifier,
        },
        {
            name: 'Видео',
            url: '/video',
            icon: FolderOpen,
        },
        {
            name: 'Отзывы',
            url: '/otzivy',
            icon: HeartFill,
        },
        {
            name: 'Полезная информация',
            url: '/poleznaya-info',
            icon: Bulb,
        },
        {
            name: 'Контакты',
            url: '/contacts',
            icon: MapPin,
        },
    ];

    return (
        <aside className={cx(css.Aside, className)}>
            <div className={css.Aside__content}>
                {navs.map((item, idx) => (
                    <Link
                        href={item.url}
                        className={cx(css.Aside__item, {
                            [css.Aside__item_active]: item.url === pathname,
                        })}
                        key={idx}
                    >
                        {item.icon && (
                            <div className={css.Aside__icon}>
                                <Icon data={item.icon} className={css.Aside__iconComponent}></Icon>
                            </div>
                        )}
                        <Text variant="body-2">{item.name}</Text>
                    </Link>
                ))}
            </div>
        </aside>
    );
};
