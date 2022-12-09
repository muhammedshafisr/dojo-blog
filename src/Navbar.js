import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <Link to="/toDoList">ToDo List</Link>
                <Link to="/reminder"><i className="bi bi-bell-fill"></i>Reminder</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;