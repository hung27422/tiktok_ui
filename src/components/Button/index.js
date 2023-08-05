import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    onClick,
    primary,
    text,
    disable,
    leftIcon,
    rightIcon,
    small,
    large,
    outline,
    children,
    ...passProps
}) {
    let Comp = 'button';

    let props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disable,
        leftIcon,
        rightIcon,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}
Button.propTypes = {
    to:PropTypes.string,
    href:PropTypes.string,
    primary:PropTypes.bool,
    outline:PropTypes.bool,
    text:PropTypes.bool,
    disable:PropTypes.bool,
    small:PropTypes.bool,
    large:PropTypes.bool,
    children:PropTypes.node.isRequired,
    leftIcon:PropTypes.node,
    rightIcon:PropTypes.node,
    onClick:PropTypes.func,
};
export default Button;
