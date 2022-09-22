import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name, flags, area, region} = props.country
    return (
        <div className='Country'>
            <h2>Country Name:  {name.common}</h2>
            <img src={flags.png} alt="" />
            <br />
            <small>Area: {area}</small> <br/>
            <small>Region: {region}</small>
        </div>
    );
};

export default Country;