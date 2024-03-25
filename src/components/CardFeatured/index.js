
import Card from "./Card";
import "../CardFeatured.css"
export default function CardFeatured() {
    return(
        <section className="card-featured">
            <div className="container">
                <div className="main-area">
                    <div className="title">
                        <h2>Título</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="all-cards">
                        <Card />
                        <Card white = { true } />
                        <Card />
                    </div>
                </div>
            </div>
        </section>
    )
}