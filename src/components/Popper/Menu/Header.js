import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')}>
                <FontAwesomeIcon icon={faChevronLeft} onClick={onBack}></FontAwesomeIcon>
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}
Header.protoTypes = {
    title: PropTypes.string,
    onBack: PropTypes.func,
};
export default Header;
