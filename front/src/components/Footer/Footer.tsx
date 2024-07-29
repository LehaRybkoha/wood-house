import {FC} from 'react';

import cx from 'classnames';
import css from './Footer.module.scss';

type HeaderProps = {
    className: string;
};

export const Footer: FC<HeaderProps> = (props) => {
    const {className} = props;

    return (
        <div className={cx(className, css.Footer)}>
            <div className="container">footer</div>
        </div>
    );
};
