import React, {useState} from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour';
import tourData from '../../tours'
export default function TourList(){
    
    const [tours, setTours] = useState(tourData);

    function deleteTour(id){
        setTours(prevTours => {
            return prevTours.filter(tour => tour.id !== id);
        });
    }

    return (
        <section className="tourList">
            {
                tours.map(tour => (
                    <Tour key={tour.id} tour={tour} onDelete={deleteTour}/>
                ))
            }
        </section>
    );

}