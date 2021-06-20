import React from 'react';
import './informationBox.css';

import LoadingSpinner from './loadingSpinner';

const informationBox = (props: any) => {
    
    return (
        <div className="information-box">
            {!props.isLoading ? (<> <h1>{props.data.name}</h1>
            <h2>{props.data.weather[0].description}</h2>
            <ul>
                <li>
                    Temperature:
                {Math.round(props.data.main.temp)}
                </li>
                <li>
                    Feels like: 
                {Math.round(props.data.main.feels_like)}
                </li>
            </ul></>) : <LoadingSpinner />}
          
            
            
        </div>
    )
}

export default informationBox;