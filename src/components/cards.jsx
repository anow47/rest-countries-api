import React, { useState } from 'react';
import './cards.css';

function CountryInfo(props) {
    return (
        <div className="country-info">
            <button className='back-button' onClick={props.onBack}>Back</button>
            <div className='flex align-items-center justify-content-between'>
                <img src={props.flags.png} className='country-img-info' alt=''/>
                <div className="country-info-container">
                    <h1 className='country-name-info'>{props.name}</h1>
                    <div className='flex justify-content-between'>
                        <div className='left'>
                            <span className='outter-span-info'>Population: <span className='inner-span'>{props.population}</span></span>
                            <span className='outter-span-info'>Region: <span className='inner-span'>{props.region}</span></span>
                            <span className='outter-span-info'>Capital: <span className='inner-span'>{props.capital}</span></span>
                            <span className='outter-span-info'>Sub Region: <span className='inner-span'>{props.subregion}</span></span>
                        </div>
                        <div className='right'>
                            <span className='outter-span-info'>Top Level Domain: <span className='inner-span'>{props.topLevelDomain}</span></span>
                            {/* <span className='outter-span-info'>Currencies: <span className='inner-span'>{props.currencies.code}</span></span> */}
                            <span className='outter-span-info'>Languages: <span className='inner-span'>{props.languages[0].name}</span></span>
                        </div>
                    </div>
                    <span className='outter-span-info'>Border Countries: <span className='inner-span'>{props.borders}</span></span>
                </div>
            </div>
        </div>
    );
}

export default function Cards(props) {
    const [showInfo, setShowInfo] = useState(false);
    
    const showCountryInfo = () => {
        setShowInfo(true);
    }

    const hideCountryInfo = () => {
        setShowInfo(false);
    }
    return (
        <div>
            <div className='card' onClick={showCountryInfo}>
                <img src={props.flags.png} className='country-img' alt=''/>
                <div className='card-info flex'>
                    <h1 className='country-name'>{props.name}</h1>
                    <span className='outter-span'>Population: <span className='inner-span'>{props.population}</span></span>
                    <span className='outter-span'>Region: <span className='inner-span'>{props.region}</span></span>
                    <span className='outter-span'>Capital: <span className='inner-span'>{props.capital}</span></span>
                </div>
            </div>
            {showInfo && <CountryInfo
                flags={props.flags}
                name={props.name}
                population={props.population}
                region={props.region}
                capital={props.capital}
                subregion={props.subregion}
                topLevelDomain={props.topLevelDomain}
                borders={props.borders}
                // currencies={props.currencies.code}
                languages={props.languages[0].name}
                onBack={hideCountryInfo}
            />}
        </div>    
    );
}
