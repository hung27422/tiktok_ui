import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItems from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => ({})

function Menu({ children, items = [],onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    console.log(history);
    console.log(current.data);

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory(pre => [...pre, item.children])
                        }
                        else{
                            onChange(item)
                        }
                    }}
                ></MenuItems>
            );
        });
    };

    return (
        <Tippy
            visible
            delay={[0, 700]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title={'Language'} onBack={()=>{
                            setHistory(pre=> pre.slice(0,pre.length - 1))
                        }} />}  
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
