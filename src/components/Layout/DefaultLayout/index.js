import Header from './Header';
import SideBar from './SideBar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header></Header>
            <div>
                <SideBar></SideBar>
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
