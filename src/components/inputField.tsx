import React from 'react';

import './inputField.css';

const inputField = (props: any) => {
    return (
        <div className="input-field">
            <form onSubmit={props.submit}>
            <input type="text" onChange={props.cityNameHandler} value={props.value} placeholder="Type city name here..."></input>
            </form>
        </div>
    )
}

export default inputField;