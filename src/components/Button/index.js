import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Button({ to, href, onclick, primary, text,disable, small, large, outline, children, ...passProps }) {
    let Comp = 'button';

    let props = {
        onclick,
        ...passProps
    }
    if(to){
        props.to = to
        Comp = Link
    }else if(href){
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper',{
        primary,
        outline,
        small,
        large,
        text,
        disable,
    });

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
