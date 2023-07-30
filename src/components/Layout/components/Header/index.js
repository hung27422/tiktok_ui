import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
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
        title: 'Tiếng Việt',
        children: {
            title: 'Tiếng Việt',
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
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResults([]);
        }, 0);
    }, []);

    //Handle Logic
    const changeMenuItem = (menuItem) => {
        console.log(menuItem);
    };

    const currentUser = true;

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
                    <img src={images.logo} alt="TikTok" />
                </div>
                <TippyHeadless
                    interactive
                    visible={searchResults.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Bạn có thể thích</h4>
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input type="" name="" placeholder="Search account and videos" spellCheck="false" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </TippyHeadless>
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload">
                                <button className={cx('btn-upload')}>
                                    <img className={cx('img-upload')} src={images.upload} alt="upload" />
                                </button>
                            </Tippy>
                            <Tippy content="Tin nhắn">
                                <button className={cx('btn-upload')}>
                                    <IconMessage></IconMessage>
                                </button>
                            </Tippy>
                            <Tippy content="Hộp thư">
                                <button className={cx('btn-upload')}>
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
                            <Button primary>Log in</Button>
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
