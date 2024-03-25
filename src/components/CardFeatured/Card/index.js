import icon from '../../../assets/ico-icon-circle.svg';
export default function Card(props) {
 
    let color = props.white ? 'card white' : 'card';

    return(
        <div className="card">
            <div className='icon'>
                <img src={icon}/>
            </div>
            <h1>{color} </h1>
    
            <div className='info'>
                <h3>Título</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc orci, eleifend eu porta eu, viverra non metus. </p>
            </div>
        </div>
    )
}