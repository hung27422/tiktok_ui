import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Images';
import Search from '../Search';
import config from '~/configs';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faBookmark,
    faGear,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { IconMessage, IconsInbox } from '~/components/Icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Ngôn ngữ',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    code: 'en',
                    title: 'Tiếng Anh',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím',
    },
];

function Header() {
    const currentUser = true;

    //Handle Logic
    const changeMenuItem = (menuItem) => {
        console.log(menuItem);
    };

    const currentUserMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Xem hồ sơ',
        },
        {
            icon: <FontAwesomeIcon icon={faBookmark} />,
            title: 'Yêu thích',
        },
        {
            icon: <FontAwesomeIcon icon={faTiktok} />,
            title: 'Nhận xu',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Cài đặt',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Đăng xuất',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.router.home}>
                        <img src={images.logo} alt="TikTok" />
                    </Link>
                </div>
                <Search></Search>

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload">
                                <button className={cx('btn-upload')}>
                                    <img className={cx('img-upload')} src={images.upload} alt="upload" />
                                </button>
                            </Tippy>
                            <Tippy content="Tin nhắn">
                                <button className={cx('btn-message')}>
                                    <IconMessage></IconMessage>
                                </button>
                            </Tippy>
                            <Tippy content="Hộp thư">
                                <button className={cx('btn-box')}>
                                    <span className={cx('badge')}>13</span>
                                    <IconsInbox></IconsInbox>
                                </button>
                            </Tippy>

                            <Menu items={currentUserMenu}>
                                <Image
                                    className={cx('img-avt')}
                                    src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/3bc8b3a79f787079fe6cdade1bcc7c93~c5_720x720.jpeg?x-expires=1690876800&x-signature=Hn%2F13Pn6HDgqljogTqeMOd0LNb4%3"
                                    alt="avt"
                                    fallback="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/3bc8b3a79f787079fe6cdade1bcc7c93~c5_720x720.jpeg?x-expires=1690876800&x-signature=Hn%2F13Pn6HDgqljogTqeMOd0LNb4%3d"
                                />
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button outline to='/'>Log in</Button>
                            <Menu items={MENU_ITEMS} onChange={changeMenuItem}>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
