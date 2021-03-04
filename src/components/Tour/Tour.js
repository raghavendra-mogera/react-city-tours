import './Tour.scss';
import img from '../../city.jpg';
import { useState } from 'react';
export default function Tour({tour, onDelete}){

    const { city, name, info} = tour;
    const [ showInfo, setShowInfo ] = useState(false); 

    function toggleInfo(){
        setShowInfo(prevValue => !prevValue);
    }
    return (
       <article className="tour">
           <div className="img-container">
               <img src={img} alt="city"/>
               <span className="close-btn" onClick={onDelete}><i className="fas fa-window-close"></i></span>
           </div>
           <div className="tour-info">
               <h3>{city}</h3>
               <h4>{name}</h4>
               <h5>info <span onClick={toggleInfo}><i className="fas fa-caret-square-down"></i></span></h5>
               { showInfo && <p>{info}</p>}
           </div>
       </article>
    );
}