import { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Upload';
import config from '~/configs';

//pushlic Router
const publicRoutes = [
    { path: config.router.home, component: Home },
    { path: config.router.following, component: Following },
    { path: config.router.profile, component: Profile },
    { path: config.router.upload, component: Upload, layout: HeaderOnly },
    { path: config.router.search, component: Search, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
