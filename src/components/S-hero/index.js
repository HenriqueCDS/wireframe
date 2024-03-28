
import image from "../../assets/img-card.svg";
import "./S-hero.css";
import "./S-heroResponsive.css";
export default function SHero() {
    return (
       <section className="S-hero">
        <div className="container">
            <div className="text">
                <h1>
                    Front-end descomplicado e direto ao ponto!  
                </h1>
                <p>
                    Aprenda a desenvolver interfaces modernas e de alta qualidade 
                    com quem está na área atuando com projetos altamente renomados.
                </p>
                <button className="btn-primary">Fazer parte da lista de espera</button>
            </div>
            <div className="image">
                <img src={image} alt="banner" />
            </div>
        </div>
       </section>
    )
}