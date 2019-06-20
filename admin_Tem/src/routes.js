import React from 'react';


const Theaters_Detail = React.lazy(() =>
    import ('./views/Theaters/Theaters_Detail'));

const Combo_Form = React.lazy(() =>
    import ('./views/Combo/Combo_Form'));

const Combo_List = React.lazy(() =>
    import ('./views/Combo/Combo_List'));

const Theater_Form = React.lazy(() =>
    import ('./views/Theaters/Theater_Form'));

const Theaters_Form = React.lazy(() =>
    import ('./views/Theaters/Theaters_Form'));

const Film_Type = React.lazy(() =>
    import ('./views/Film/Film_Type'));

const Films = React.lazy(() =>
    import ('./views/Film/Films'));

const Film_Form = React.lazy(() =>
    import ('./views/Film/Film_Form'));

const Charts = React.lazy(() =>
    import ('./views/Charts'));

const Dashboard = React.lazy(() =>
    import ('./views/Dashboard'));

const Users = React.lazy(() =>
    import ('./views/Users/Users'));

const User = React.lazy(() =>
    import ('./views/Users/User'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', name: 'Trang chủ', component: Dashboard },
    { path: '/Theaters', exact: true, name: 'Cụm rạp', component: Theaters_Detail },
    { path: '/Theaters/Theaters_Detail', name: 'Star Bình Thạnh', component: Theaters_Detail },
    { path: '/Theaters/Theaters_Form', name: 'Thêm Cụm Rạp', component: Theaters_Form },
    { path: '/Theaters/Theaters_Detail', name: 'Star Bình Tân', component: Theaters_Detail },
    { path: '/Theaters/Theaters_Detail', name: 'Star Quận 1', component: Theaters_Detail },
    { path: '/base/Theaters_Detail', name: 'Star Quận 2', component: Theaters_Detail },
    { path: '/Theaters/Theater_Form', name: 'Thêm rạp', component: Theater_Form },
    { path: '/Film', exact: true, name: 'Thể loại Film', component: Film_Type },
    { path: '/Film/Films', exact: true, name: 'Hành Động', component: Films },
    { path: '/Film/Films', name: 'Hoạt Hình', component: Films },
    { path: '/Film/Films', name: 'Kinh Dị', component: Films },
    { path: '/Film/Films', name: 'Kiếm hiệp', component: Films },
    { path: '/Film/Film_Type', name: 'Thêm thể loại', component: Film_Type },
    { path: '/Film/Film_Form', name: 'Thêm Phim', component: Film_Form },
    { path: '/Combo', exact: true, name: 'Combo', component: Combo_Form },
    { path: '/Combo/Combo_Form', exact: true, name: 'Thêm Combo', component: Combo_Form },
    { path: '/Combo/Current', name: 'Hiện có', component: Combo_List },
    { path: '/Combo/Expired', name: 'Hết hạn', component: Combo_List },
    { path: '/charts', name: 'Biểu Đồ', component: Charts },
    { path: '/users', exact: true, name: 'Users', component: Users },
    { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;