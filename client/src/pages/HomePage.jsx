
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar'
import Dashboard from '../components/Dashboard/Dashboard'
import FormularioIngreso from '../components/FormularioIngreso'
const Homepage = () => {
    return (  
        <div className='flex'>
            <Sidebar/>
            <Routes>
                    <Route path="dashboard" element={<Dashboard/>} />
                    <Route path="formulario" element={<FormularioIngreso/>} />
            </Routes>
        </div>
    );
}
 
export default Homepage;