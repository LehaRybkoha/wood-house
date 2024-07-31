'use client';

import {FC} from 'react';

import css from "./Modal.module.scss";

import {modalStore, toggleModal} from '@/store/modalStore';
import {Field as BaseField, Form} from 'react-final-form';
import {Xmark} from '@gravity-ui/icons';
import {Icon, Text, TextInput, Modal as ModalG, TextArea, Button} from '@gravity-ui/uikit';
import {useStore} from '@tanstack/react-store';

type FormValues = {
    name: string;
    phone: string;
    email: string;
    comment: string;
};


const required = (value: any) => (value ? undefined : 'обязательное поле');

const isEmail = (value: any) =>
    value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? undefined : 'недействительный email';

const isPhoneNumber = (value: any) =>
    value && /^\+?[1-9]\d{1,14}$/.test(value) ? undefined : 'недействительный номер телефона';

export const Modal: FC = () => {
    const { isOpen } = useStore(modalStore);
    return (
        <ModalG 
            open={isOpen} 
            onClose={() => {toggleModal(false)}}
        >
            <Form 
                onSubmit={() => {alert("1234")}}
                render={({handleSubmit, submitting, pristine, hasValidationErrors}) => (
                    <div className={css.Modal__content}>
                        <Text variant='header-1' className={css.Modal__header}>
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
                                                meta.touched && meta.error
                                                    ? 'invalid'
                                                    : undefined
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
                                                meta.touched && meta.error
                                                    ? 'invalid'
                                                    : undefined
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
                                            meta.touched && meta.error
                                                ? 'invalid'
                                                : undefined
                                        }
                                        hasClear
                                    ></TextInput>
                                )}
                                </BaseField>
                                <BaseField name="comment">
                                {({input, meta}) => (
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
                                >Отправить</Button>
                            </div>
                        </form>
                        <Button 
                            className={css.Modal__closeButton} 
                            onClick={() => {toggleModal(false)}}
                        >
                            <Icon data={Xmark} />
                        </Button>
                    </div>
                )}
            />
        </ModalG>
    );
}