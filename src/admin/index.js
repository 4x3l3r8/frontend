import { Routes, Route } from 'react-router-dom';
import Sidebar from 'components/adminComponents/Sidebar';
import Dashboard from './routes/Dashboard';
import Settings from './routes/Settings';
import Tables from './routes/Tables';
import Maps from './routes/Maps';
import Footer from 'components/adminComponents/Footer';
// import P404 from '../pages/404';
// import "../App.css"
// import "@material-tailwind/react/tailwind.css";

// Tailwind CSS Style Sheet
// import 'admin/assets/styles/index.css';


function Admin() {
    // let {path} = useRouteMatch();
    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                <Routes>
                    <Route exact path="/admin" component={Dashboard} />
                    <Route exact path="/admin/settings" component={Settings} />
                    <Route exact path="/admin/tables" component={Tables} />
                    <Route exact path="/admin/maps" component={Maps} />
                    {/* <Redirect from="*" to="/" /> */}
                    {/* <Route component={P404} /> */}
                </Routes>
                <Footer />
            </div>
        </>
    );
}

export default Admin;
