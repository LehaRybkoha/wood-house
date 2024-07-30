'use client';

import {FC, useCallback} from 'react';

import {modalStore, toggleModal} from '@/store/modalStore';

import css from './Modal.module.scss';

import {Xmark} from '@gravity-ui/icons';
import {Button, Icon, Modal as ModalG, Text, TextArea, TextInput} from '@gravity-ui/uikit';
import {useStore} from '@tanstack/react-store';

export const Modal: FC = () => {
    const {isOpen} = useStore(modalStore);

    const handleSubmit = useCallback(async () => {
        await fetch('https://localhost:8080/submit', {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                name: 'NAMESS',
                phone: '8009',
                email: 'mkdlsldf',
                comment: 'asdasd',
            }),
        });
    }, []);

    return (
        <ModalG open={isOpen} onClose={() => toggleModal(false)}>
            <div className={css.Modal__content}>
                <Text variant="header-1" className={css.Modal__header}>
                    Заказaть проект
                </Text>
                <form className={css.Modal__body}>
                    <div className={css.Modal__row}>
                        <TextInput placeholder="Введите ваше имя"></TextInput>
                        <TextInput placeholder="номер телефона"></TextInput>
                        <TextInput placeholder="email"></TextInput>
                        <TextArea placeholder="Комментарий" minRows={5} maxRows={10}></TextArea>
                    </div>
                    <div className={css.Modal__row}>
                        <Button onClick={handleSubmit}>Отправить</Button>
                    </div>
                </form>
                <Button className={css.Modal__closeButton} onClick={() => toggleModal(false)}>
                    <Icon data={Xmark} />
                </Button>
            </div>
        </ModalG>
    );
};
