import Header from './Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header></Header>
            <div>
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
