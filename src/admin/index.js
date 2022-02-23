import { Routes, Route, Outlet, useRoutes } from 'react-router-dom'; //eslint-disable-line
import Sidebar from 'components/adminComponents/Sidebar';
import Dashboard from './routes/Dashboard';
import Settings from './routes/Settings';
import Tables from './routes/Tables';
import Maps from './routes/Maps';
import tw from "twin.macro"
import Footer from 'components/adminComponents/Footer';
// import P404 from '../pages/404';
// import "../App.css"
// import "@material-tailwind/react/tailwind.css";

// Tailwind CSS Style Sheet
// import 'admin/assets/styles/index.css';
const Pages = tw.div`md:ml-64`

function DashboardLayout() { //eslint-disable-line
    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                <Outlet />
            </div>
        </>
    )
}


function Admin() {
    // let {path} = useRouteMatch();
    return (
        <>
            <Sidebar />
            <Pages>
                <Routes path="/*">
                    <Route path="/*" element={<Dashboard />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="tables" element={Tables} />
                    <Route path="maps" element={Maps} />
                </Routes>
                <Footer />
            </Pages>
        </>
    );
    // let AdminRoutes = useRoutes([
    //     {
    //         path: '/admin',
    //         element: <DashboardLayout />,
    //         children: [
    //             { path: 'settings', element: <Settings /> }
    //         ]
    //     }
    // ]);

    // return AdminRoutes
}

export default Admin;
