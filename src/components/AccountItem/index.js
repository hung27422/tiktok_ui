import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/42a81079b5885e152707b170d63ba2df~c5_100x100.jpeg?x-expires=1690009200&x-signature=9iOUghHSzUFfk6dW9IwxnTOjFrM%3D"
                alt="Img"
            ></img>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Đào Lê Phương Hoa</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check-icon')}></FontAwesomeIcon>
                </p>
                <span className={cx('username')}>hoaa.hanassii</span>
            </div>
        </div>
    );
}

export default AccountItem;
