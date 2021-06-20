import React from 'react';

const informationBox = (props: any) => {
    
    return (
        <div>
            <ul>
                <li>
                {props.data.name}
                </li>
                <li>
                    Temperature:
                {Math.round(props.data.main.temp)}
                </li>
                <li>
                    Feels like: 
                {Math.round(props.data.main.feels_like)}
                </li>
            </ul>
            
            
        </div>
    )
}

export default informationBox;