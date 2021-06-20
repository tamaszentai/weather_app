import React from 'react';

const inputField = (props: any) => {
    return (
        <div>
            <form onSubmit={props.submit}>
            <input type="text" onChange={props.cityNameHandler} value={props.value}></input>
            </form>
        </div>
    )
}

export default inputField;