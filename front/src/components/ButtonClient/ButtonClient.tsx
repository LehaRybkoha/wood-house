'use client';

import {Button, ButtonProps} from '@gravity-ui/uikit';
import {FC, ReactNode} from 'react';

type ButtonActionProps = {
    children: ReactNode;
} & ButtonProps;

export const ButtonClient: FC<ButtonActionProps> = (props) => {
    return <Button {...props}>{props.children}</Button>;
};
