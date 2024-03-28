import icon from '../../../assets/ico-icon-circle.svg';
import './Card.css';
import './CardResponsive.css';
export default function Card(props) {
 
    let color = props.white ? 'card white' : 'card';

    return(
        <div className={color}>
            <div className='icon'>
                <img src={icon}/>
            </div>
     
    
            <div className='info'>
                <h3>Título</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc orci, eleifend eu porta eu, viverra non metus. </p>
            </div>
        </div>
    )
}