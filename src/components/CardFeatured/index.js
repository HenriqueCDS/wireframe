
import Card from "./Card";
import "./CardFeatured.css";
import "./CardFeaturedResponsive.css";

import img from "../../assets/img-card.svg";

export default function CardFeatured() {
    return(
        <section className="card-featured">
            <div className="container">
                <div className="main-area">
                    <div className="title center">
                        <h2>Título</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="all-cards">
                        <Card />
                        <Card white = { true } />
                        <Card />
                    </div>
                </div>

                
                <div className="section-area">
                <div class="top">
                        <div class="title">
                            <h2>Título</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </div>
                        <a href="" class="btn-primary">call to action</a>
                    </div>
                    <div class="all-images">
                        <div class="image">
                            <img src={img} alt="thumb"/>
                        </div>
                        <div class="image">
                            <img src={img}  alt="thumb"/>
                        </div>
                        <div class="image">
                            <img src={img}  alt="thumb"/>
                        </div>
                        <div class="image">
                            <img src={img}  alt="thumb"/>
                        </div>
                        <div class="image">
                            <img src={img}  alt="thumb"/>
                        </div>
                        <div class="image">
                            <img src={img}  alt="thumb"/>
                        </div>
                        <div class="image">
                            <img src={img}  alt="thumb"/>
                        </div>
                        <div class="image">
                            <img src={img} alt="thumb"/>
                        </div>
                        <div class="image">
                            <img src={img}  alt="thumb"/>
                        </div>
                        <div class="image">
                            <img src={img}  alt="thumb"/>
                        </div>
                        <div class="image">
                            <img src={img}  alt="thumb"/>
                        </div>
                        <div class="image">
                            <img src={img}  alt="thumb"/>
                        </div>
                    </div>
                </div>
                 


                
            </div>
        </section>
    )
}