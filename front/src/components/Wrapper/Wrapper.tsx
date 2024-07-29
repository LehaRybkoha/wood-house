'use client';

import {Theme, ThemeProvider} from '@gravity-ui/uikit';
import React, {FC, ReactNode} from 'react';

import {Aside} from '../Aside/Aside';
import {Footer} from '../Footer/Footer';
import {Header} from '../Header/Header';
import css from './Wrapper.module.scss';

// const DARK = 'dark';
const LIGHT = 'light';
const DEFAULT_THEME = LIGHT;

export const DEFAULT_BODY_CLASSNAME = `g-root g-root_theme_${DEFAULT_THEME}`;

export type AppProps = {
    children: ReactNode;
};

export const Wrapper: FC<AppProps> = ({children}) => {
    const [theme] = React.useState<Theme>(DEFAULT_THEME);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const isDark = theme === DARK;

    return (
        <ThemeProvider theme={theme}>
            <div className={css.Wrapper}>
                <Header className={css.WrapperHeader} />
                <div className={css.WrapperMain}>
                    <Aside className={css.WrapperMenu} />
                    <div className={css.WrapperContent}>{children}</div>
                </div>
                <Footer className={css.WrapperFooter} />
            </div>
        </ThemeProvider>
    );
};