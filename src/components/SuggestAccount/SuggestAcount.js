import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestAccount.module.scss';
import AccountItems from './AcountItems';

const cx = classNames.bind(styles);

function SuggestAccount({ label }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('label')}>{label}</h2>
            <AccountItems></AccountItems>
            <AccountItems></AccountItems>
            <AccountItems></AccountItems>
        </div>
    );
}

SuggestAccount.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestAccount;
