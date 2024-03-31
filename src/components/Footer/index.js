
import "./footer.css";
import "./footerResponsive.css";
import logo from "../../assets/logoFooter.svg";
import iconInsta from "../../assets/bx_bxl-instagram.svg";
import iconLinked from "../../assets/bx_bxl-linkedin.svg";
import iconYoutube from "../../assets/bx_bxl-youtube.svg";
import iconBoost from "../../assets/boost.svg";
export default function     Footer() {
    return(
        <footer>
           <div className="container">
                <main>
                    <div className="area-left">
                        <img src={logo} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc orci, eleifend eu porta eu, viverra.</p>
                    </div>

                    <nav>
                        <div className="item">
                            <h6>Lista de páginas</h6>
                            <ul>
                                <li><a href="#">Text link 01</a></li>
                                <li><a href="#">Text link 02</a></li>
                                <li><a href="#">Text link 03</a></li>
                                <li><a href="#">Text link 04</a></li>
                            </ul>
                        </div>
                        <div className="item">
                            <h6>Soluções</h6>
                            <ul>
                                <li><a href="#">Text link 01</a></li>
                                <li><a href="#">Text link 02</a></li>
                                
                            </ul>
                        </div>
                        <div className="item">
                            <h6>Nossas redes sociais</h6>
                            <ul>
                                <li>
                                    <a href="#"><img src={iconInsta} alt="icone Instagram "/><span>Instagram</span></a>
                                </li>

                                <li>
                                    <a href="#"><img src={iconLinked} alt="icone Linkedin "/><span>Linkedin</span></a>
                                </li>
                                <li>
                                    <a href="#"><img src={iconYoutube} alt="icone Youtube " /><span>Youtube</span></a>
                                </li>
                                
                            </ul>
                        </div>
                    </nav>

                </main>

                <div className="copy">
                    <p>2021 © Todos os direitos reservados. <strong>Codeboost</strong> </p>
                    <div className="group">
                        <span>Grupo</span>
                        <img src={iconBoost} />
                    </div>
                    
                </div>
            
                
           </div>
        </footer>
    )
}