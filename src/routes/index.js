//Layout
import HeaderOnly from '~/components/Layout/HeaderOnly';

import Home from '~/components/pages/Home';
import Following from '~/components/pages/Following';
import Upload from '~/components/pages/Upload';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
