'use client';

import {FC} from 'react';

import {modalStore, openModal, closeModal} from '@/store/modalStore';

import css from "./Modal.module.scss";

import {Xmark} from '@gravity-ui/icons';
import {Icon, Text, TextInput, Modal as ModalG, TextArea, Button} from '@gravity-ui/uikit';
import { useStore } from '@tanstack/react-store';


export const Modal: FC = () => {
    const { isOpen } = useStore(modalStore);
    return (
        <ModalG 
            open={isOpen} 
            onClose={closeModal}
        >
            <div className={css.Modal__content}>
                <Text variant='header-1' className={css.Modal__header}>
                    Заказaть проект
                </Text>
                <form className={css.Modal__body}>
                    <div className={css.Modal__row}>
                        <TextInput
                            placeholder="Введите ваше имя"
                        ></TextInput>
                        <TextInput
                            placeholder="номер телефона"
                        ></TextInput>
                        <TextInput
                            placeholder="email"
                        ></TextInput>
                        <TextArea 
                            placeholder="Комментарий"
                            minRows={5}
                            maxRows={10}
                        ></TextArea>
                    </div>
                    <div className={css.Modal__row}>
                        <Button>Отправить</Button>
                    </div>
                </form>
                <Button 
                    className={css.Modal__closeButton} 
                    onClick={closeModal}
                >
                    <Icon data={Xmark} />
                </Button>
            </div>
        </ModalG>
    );
}