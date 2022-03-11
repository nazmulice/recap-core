import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, capital, population, timezones, flags, region } = props.country;
    console.log(props.country);
    return (
        <div className='country'>
            <h3>Country Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <h4>Capital: {capital}</h4>
            <h5>Population: {population}</h5>
            <h6>timezones: {timezones}</h6>
            <h5>Region: {region}</h5>

        </div>
    );
};

export default Country;