'use client';

import {FC, useCallback} from 'react';

import css from './Modal.module.scss';

import {modalStore, toggleModal} from '@/store/modalStore';
import {Xmark} from '@gravity-ui/icons';
import {Button, Icon, Modal as ModalG, Text, TextArea, TextInput} from '@gravity-ui/uikit';
import {useStore} from '@tanstack/react-store';
import {Field as BaseField, Form} from 'react-final-form';

const required = (value: any) => (value ? undefined : 'обязательное поле');

const isEmail = (value: any) =>
    value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? undefined : 'недействительный email';

const isPhoneNumber = (value: any) =>
    value && /^\+?[1-9]\d{1,14}$/.test(value) ? undefined : 'недействительный номер телефона';

export const Modal: FC = () => {
    const {isOpen} = useStore(modalStore);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        <ModalG
            open={isOpen}
            onClose={() => {
                toggleModal(false);
            }}
        >
            <Form
                onSubmit={() => {
                    alert('1234');
                }}
                render={({submitting, pristine, hasValidationErrors}) => (
                    <div className={css.Modal__content}>
                        <Text variant="header-1" className={css.Modal__header}>
                            Заказaть проект
                        </Text>
                        <form className={css.Modal__body}>
                            <div className={css.Modal__row}>
                                <BaseField name="name" validate={required}>
                                    {({input, meta}) => (
                                        <TextInput
                                            placeholder="Введите ваше имя"
                                            {...input}
                                            type="text"
                                            autoComplete="username"
                                            errorMessage={meta.error}
                                            validationState={
                                                meta.touched && meta.error ? 'invalid' : undefined
                                            }
                                            hasClear
                                        ></TextInput>
                                    )}
                                </BaseField>
                                <BaseField name="phone" validate={isPhoneNumber}>
                                    {({input, meta}) => (
                                        <TextInput
                                            placeholder="номер телефона"
                                            {...input}
                                            type="text"
                                            autoComplete="phone"
                                            errorMessage={meta.error}
                                            validationState={
                                                meta.touched && meta.error ? 'invalid' : undefined
                                            }
                                            hasClear
                                        ></TextInput>
                                    )}
                                </BaseField>
                                <BaseField name="email" validate={isEmail}>
                                    {({input, meta}) => (
                                        <TextInput
                                            placeholder="email"
                                            {...input}
                                            type="text"
                                            autoComplete="mail"
                                            errorMessage={meta.error}
                                            validationState={
                                                meta.touched && meta.error ? 'invalid' : undefined
                                            }
                                            hasClear
                                        ></TextInput>
                                    )}
                                </BaseField>
                                <BaseField name="comment">
                                    {({input}) => (
                                        <TextArea
                                            placeholder="Комментарий"
                                            {...input}
                                            minRows={5}
                                            maxRows={10}
                                        ></TextArea>
                                    )}
                                </BaseField>
                            </div>
                            <div className={css.Modal__row}>
                                <Button
                                    type="submit"
                                    disabled={submitting || pristine || hasValidationErrors}
                                >
                                    Отправить
                                </Button>
                            </div>
                        </form>
                        <Button
                            className={css.Modal__closeButton}
                            onClick={() => {
                                toggleModal(false);
                            }}
                        >
                            <Icon data={Xmark} />
                        </Button>
                    </div>
                )}
            />
        </ModalG>
    );
};
