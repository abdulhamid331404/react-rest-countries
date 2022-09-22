import { useEffect, useState } from 'react';
import React from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {

    const [countries, setCountres] = useState([]);
    useEffect(()=>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then( data => setCountres(data))
    },[])
  
    return (
        <div>
            <h1>Hello From Countries.{countries.length}</h1>
          <div className='Countries'>
          {
                countries.map(country =><Country 
                    country={country}
                    key={country.cca3}
                    ></Country>)
          }
           
          </div>
        </div>
       
    );
};



export default Countries;