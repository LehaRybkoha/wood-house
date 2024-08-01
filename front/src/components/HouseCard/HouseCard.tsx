'use client';

import {Bath} from '@/app/bani-iz-sruba/page';
import {toggleModal} from '@/store/modalStore';
import {SquareDashed} from '@gravity-ui/icons';
import {Icon, Text} from '@gravity-ui/uikit';
import {FC} from 'react';
import {ButtonClient} from '../ButtonClient/ButtonClient';
import css from './HouseCard.module.scss';

type HouseCardProps = {
    bath: Bath;
};

export const HouseCard: FC<HouseCardProps> = (props) => {
    const {bath} = props;

    return (
        <div className={css.HouseCard}>
            <div className={css.HouseCard__info}>
                <div className={css.HouseCard__infoBlock}>
                    <div>
                        <Text variant="subheader-1" color="light-primary">
                            <Icon className={css.HouseCard__icon} data={SquareDashed}></Icon>
                            {bath.area}
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
                            {bath.price} руб.
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
                            {bath.area} м2
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
                            {bath.log_size} м
                        </Text>
                    </div>
                </div>
                <div className={css.HouseCard__infoBlock}>
                    <div>
                        <Text variant="subheader-1" color="light-primary">
                            Веранда
                        </Text>{' '}
                    </div>
                    <div>
                        <Text variant="subheader-2" color="light-primary">
                            {bath.hallway} м
                        </Text>
                    </div>
                </div>
                <div className={css.HouseCard__action}>
                    <ButtonClient
                        view="action"
                        className={css.HouseCard__actionButton}
                        onClick={() => {
                            toggleModal(true);
                        }}
                    >
                        Заказать
                    </ButtonClient>
                </div>
            </div>
            <div>
                <img className={css.HouseCard__image} src={bath.src} alt="" />
            </div>
        </div>
    );
};
