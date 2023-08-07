import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './SuggestAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import config from '~/configs/configs';
import Image from '../Images/Images';

const cx = classNames.bind(styles);
function AccountItems() {
    return (
        <Link to={config.router.profile} className={cx('account-item')}>
            <img
                className={cx('account-img')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-aiso/08fcefdb09c26c8258c4aade8b19a60d~c5_100x100.jpeg?x-expires=1691607600&x-signature=aG9Ba12phO4QzabqWPyzA5IpHCI%3D"
                alt=""
            />
            <div className={cx('account-info')}>
                <span>
                    <strong className={cx('user-name')}>daiphatthanh</strong>
                    <FontAwesomeIcon className={cx('account-check')} icon={faCircleCheck} />
                </span>
                <p className={cx('name-account')}>ĐÀI PHÁT THANH</p>
            </div>
        </Link>
    );
}

export default AccountItems;
