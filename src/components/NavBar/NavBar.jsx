import "./NavBar.css";
import CardWidget from "../CardWidget/CardWidget";

function NavBar() {
    return (
        <header className="navbar-header">
            <nav className="navbar">
                <div className="navbar-container">
                    <a className="navbar-brand" href="#">Fotolandia</a>
                    <div className="navbar-links">
                        <ul className="navbar-list">
                            <li className="navbar-item"><a className="navbar-link" href="#">Drones</a></li>
                            <li className="navbar-item"><a className="navbar-link" href="#">Camaras</a></li>
                            <li className="navbar-item"><a className="navbar-link" href="#">Lentes</a></li>
                            <li className="navbar-item"><a className="navbar-link" href="#">Iluminacion</a></li>
                            <li className="navbar-item"><a className="navbar-link" href="#">Tripodes</a></li>
                            <li className="navbar-item"><a className="navbar-link" href="#">Baterias</a></li>
                        </ul>
                        <div className="CardWidget-item">
                            <CardWidget />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;