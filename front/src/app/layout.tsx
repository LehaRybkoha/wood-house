import type {Metadata} from 'next';
import {Modal} from '../components/Modal/Modal';
import {Wrapper} from '../components/Wrapper';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../styles/custom.scss';
import '../styles/globals.scss';
import '../styles/mixins.scss';

export const metadata: Metadata = {
    title: 'Волжский дом. Бани из сруба. Дома из сруба. Каркасные бани',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="ru">
            <body className={'app'}>
                <Wrapper>{children}</Wrapper>
                <Modal></Modal>
            </body>
        </html>
    );
}
