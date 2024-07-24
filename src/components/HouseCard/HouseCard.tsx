import {SquareDashed} from '@gravity-ui/icons';
import {Icon, Text} from '@gravity-ui/uikit';
import {FC} from 'react';
import {ButtonClient} from '../ButtonClient/ButtonClient';
import css from './HouseCard.module.scss';

export const HouseCard: FC = () => {
    return (
        <div className={css.HouseCard}>
            <img
                className={css.HouseCard__image}
                src="https://brusina.ru/upload/adwex.minified/webp/3ed/90/3ed263fbfaf48ce27a34e029c3c4ba81.webp"
                alt=""
            />
            <div className={css.HouseCard__info}>
                <div className={css.HouseCard__infoBlock}>
                    <div>
                        <Text variant="subheader-1" color="light-primary">
                            <Icon className={css.HouseCard__icon} data={SquareDashed}></Icon>
                            144
                        </Text>{' '}
                        <Text color="light-primary" variant="caption-2">
                            м2
                        </Text>
                    </div>
                    <div>
                        <Text variant="caption-2" color="light-primary">
                            цена от{' '}
                        </Text>
                        <Text variant="subheader-2" color="light-primary">
                            1 678 000 Р
                        </Text>
                    </div>
                </div>
                <div className={css.HouseCard__infoBlock}>
                    <div>
                        <Text variant="subheader-1" color="light-primary">
                            Площадь дома
                        </Text>{' '}
                    </div>
                    <div>
                        <Text variant="subheader-2" color="light-primary">
                            90 м2
                        </Text>
                    </div>
                </div>
                <div className={css.HouseCard__infoBlock}>
                    <div>
                        <Text variant="subheader-1" color="light-primary">
                            Размер сруба
                        </Text>{' '}
                    </div>
                    <div>
                        <Text variant="subheader-2" color="light-primary">
                            6х6 м
                        </Text>
                    </div>
                </div>
                <div className={css.HouseCard__infoBlock}>
                    <div>
                        <Text variant="subheader-1" color="light-primary">
                            Размер сруба
                        </Text>{' '}
                    </div>
                    <div>
                        <Text variant="subheader-2" color="light-primary">
                            2х6 м
                        </Text>
                    </div>
                </div>
                <div className={css.HouseCard__action}>
                    <ButtonClient view="action" className={css.HouseCard__actionButton}>
                        Заказать
                    </ButtonClient>
                </div>
            </div>
        </div>
    );
};
