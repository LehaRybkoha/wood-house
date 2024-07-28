'use client';

import {FC, ReactNode, useEffect, useRef} from 'react';

import {Fancybox as NativeFancybox} from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

import {OptionsType} from '@fancyapps/ui/types/Fancybox/options';

type FancyboxProps = {
    options?: Partial<OptionsType>;
    delegate?: string;
    children: ReactNode;
    className?: string;
};

export const Fancybox: FC<FancyboxProps> = (props) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        const delegate = props.delegate || '[data-fancybox]';
        const options = props.options || {};

        NativeFancybox.bind(container, delegate, options);

        return () => {
            NativeFancybox.unbind(container);
            NativeFancybox.close();
        };
    });

    return (
        <div className={props.className} ref={containerRef}>
            {props.children}
        </div>
    );
};
