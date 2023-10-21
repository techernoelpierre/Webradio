import "./navigation.css"
import { Link } from "react-router-dom"
import Logo from "../images/webradioLogo.png"

export function Navigation() {
    return (
        <nav className="navigation">
            <img src={Logo} alt="" className="logo" />
            <div className="btnContainer">
                <Link className="link">Rubriques</Link>
                <Link to="/login" className="link">Connexion</Link>
                <button className="LeDirect">Le direct</button>
            </div>
        </nav>
    )
}