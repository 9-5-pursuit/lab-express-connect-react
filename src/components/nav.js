import { Link } from "react-router-dom";

function Nav(){
    return(
        <nav className="navbar bg-primary">
            <div className="container-fluid">
                <Link to='/'><span className="navbar-brand mb-0 h-75 text-bg-primary">Captain's Log</span></Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-2">
                   <Link to='/logs'><li className="text-bg-primary">All Logs</li></Link>
                </ul>
                <Link to='/logs/new'><button type="button" className="btn btn-light py-1 px-3">Create a new log</button></Link>
            </div>
        </nav>
    )
}

export default Nav;