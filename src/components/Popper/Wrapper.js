import classNames from 'classnames/bind';
import styles from './Popper.Module.scss';

const cx = classNames.bind(styles);
function Wrapper({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Wrapper;
