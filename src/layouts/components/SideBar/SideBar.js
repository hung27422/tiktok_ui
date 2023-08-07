import config from '~/configs/configs';
import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    UseGroupIcon,
    DiscoverIcon,
    LiveIcon,
    HomeIconActive,
    UseGroupIconActive,
    LiveIconActive,
    DiscoverIconActive,
} from '~/components/Icons';
import SuggestAcount from '~/components/SuggestAccount/SuggestAcount';
const cx = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="Dành cho bạn"
                    to={config.router.home}
                    iconActive={<HomeIconActive />}
                    icon={<HomeIcon />}
                />
                <MenuItem
                    title="Following"
                    to={config.router.following}
                    iconActive={<UseGroupIconActive />}
                    icon={<UseGroupIcon />}
                />
                <MenuItem
                    title="Khám phá"
                    to={config.router.discover}
                    iconActive={<DiscoverIconActive />}
                    icon={<DiscoverIcon />}
                />
                <MenuItem title="LIVE" to={config.router.live} iconActive={<LiveIconActive />} icon={<LiveIcon />} />
            </Menu>
            <SuggestAcount label="Các tài khoản đề xuất"></SuggestAcount>
            <SuggestAcount label="Các tài khoản đang follow"></SuggestAcount>
        </aside>
    );
}

export default SideBar;
