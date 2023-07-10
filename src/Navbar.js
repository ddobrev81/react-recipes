import { Link } from 'react-router-dom';
import Home from './Home';
import Create from './Create';

const Navbar = () => {
    return ( 
        <nav className="Navbar">
            <h1>Mad Dodo's recipe vault</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create new recipe</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;