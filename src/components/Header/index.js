
import "./header.css";
import "./headerResponsive.css";
import logo from "../../assets/logo.svg";
export default function Header() {
    return (
        <header className="container-header">
            <div className="container">
                <a>
                    <img  href="#" className="logo" src={logo} />
                </a>
                <nav className="container-nav">
                    <ul>     
                        <li>
                            <a href="#" className="menu-item">Menu item </a>
                        </li>
                        <li>
                            <a href="#" className="menu-item">Menu item </a> 
                        </li>  
                        <li>
                            <a href="#" className="menu-item">Menu item </a>
                        </li>
                        <li>
                            <a href="#" className="menu-item">Menu item </a>
                        </li>
                    </ul>
                  
                    <button className="btn-primary"> Call Action</button>
                </nav>
                <button class="menu-item menu-mobile">Menu mobile</button>
            </div> 
        </header>
    )
}