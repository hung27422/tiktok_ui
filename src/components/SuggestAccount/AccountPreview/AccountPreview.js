import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-aiso/08fcefdb09c26c8258c4aade8b19a60d~c5_100x100.jpeg?x-expires=1691607600&x-signature=aG9Ba12phO4QzabqWPyzA5IpHCI%3D"
                    alt=""
                />
                <Button classNames={cx('btn-follow')} primary>Follow</Button>
            </header>
            <span>
                <strong className={cx('username')}>daiphatthanh</strong>
                <FontAwesomeIcon className={cx('account-check')} icon={faCircleCheck} />
            </span>
            <p className={cx('name')}>ĐÀI PHÁT THANH</p>
            <p className={cx('statistical')}>
                <strong className={cx('value')}>8.2M </strong>
                <span className={cx('label')}>Followers</span>
                <strong className={cx('value')}>18.2M </strong>
                <span className={cx('label')}>Likes</span>
            </p>
        </div>
    );
}

export default AccountPreview;
