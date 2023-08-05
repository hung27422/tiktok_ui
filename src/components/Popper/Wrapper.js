import classNames from 'classnames/bind';
import styles from './Popper.Module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function Wrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}
Wrapper.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Wrapper;
