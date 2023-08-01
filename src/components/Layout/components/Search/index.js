import { useEffect, useState, useRef } from 'react';

import TippyHeadless from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { IconSearch } from '~/components/Icons';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(searchValue,500);

    const ref = useRef();

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResults([]);
            return;
        }
        setLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
            .then((response) => response.json())
            .then((response) => {
                setSearchResults(response.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [debounce]);

    const handleClearSeachValue = () => {
        setSearchValue('');
        ref.current.focus();
        setShowResults(false);
    };

    const handleHideSearch = () => {
        setShowResults(false);
    };
    return (
        <TippyHeadless
            interactive
            visible={showResults && searchResults.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Bạn có thể thích</h4>
                        {searchResults.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideSearch}
        >
            <div className={cx('search')}>
                <input
                    ref={ref}
                    value={searchValue}
                    placeholder="Search account and videos"
                    spellCheck="false"
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                    onFocus={() => setShowResults(true)}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClearSeachValue}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {!!loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')}>
                    <IconSearch></IconSearch>
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Search;
