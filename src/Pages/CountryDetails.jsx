import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetcher } from '../useFetcher';
import '../index.css';
import '../Components/LoadingCard.css';

const CountryDetails = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useFetcher('alpha', id);
    const { data: countryArray } = useFetcher('all', '');
    const [borderArray, setBorderArray] = useState([]);

    console.log(data);
    const {name, flags, population, region, subregion, capital, tld, currencies, languages, borders } = data;
    const currenKeys = currencies && Object.keys(data?.currencies);
    const langVals = languages && Object.values(data?.languages);
    const nameKeys = name && Object.keys(data?.name?.nativeName);
    // console.log(countryArray);

    const renderBorders = borders && borders?.map((bord, i) => {
            let obj = countryArray && countryArray?.find(country => country?.cca3 === bord);
            // console.log(obj);
            return <Link to={`/details/${obj?.cca3}`} key={i}>{obj?.name?.common}</Link>
        });

    return (
        <section id="details-container" className="">
            <Link to="/" className="back">Back</Link>
            <section id="details-page" className={isLoading ? 'animate-pulse loading-card' : ''}>
                <div className="flag"><img src={flags?.png} className={isLoading? 'loading-gradient' : ''} id="flagImg" alt={flags?.alt} /></div>
                <div>
                    <h1 className={isLoading ? 'nameload' : "fullName"}>{name?.official}</h1>
                    <div className="details">
                        <div className="left">
                            {/* <p>Native Name: <span className={isLoading ? 'line' : "native-name"}>{name?.nativeName?.eng?.official }</span></p> */}
                            <p>Native Name: <span className={isLoading ? 'line' : "native-name"}>{name?.nativeName[nameKeys[0]]?.official}</span></p>
                            <p>Population: <span className={isLoading ? 'line' : "population"}>{population?.toLocaleString()}</span></p>
                            <p>Region: <span className={isLoading ? 'line' : "region"}>{region}</span></p>
                            <p>Sub Region: <span className={isLoading ? 'line' : "sub-region"}>{subregion || 'No sub-region'}</span></p>
                            <p>Capital: <span className={isLoading ? 'line' : "capital"}>{capital || 'No capital'}</span></p>
                        </div>
                        <div className="right">
                            <p>Top Level Domain: <span className={isLoading ? 'line' : "domain"}>{tld && tld[0]}</span></p>
                            <p>Currencies:{" "}
                                {currencies ? currenKeys?.map((curren, id) => (
                                    <span className={isLoading ? 'line' : "Currencies"} key={id}>{currencies[curren]?.name} ({currencies[curren]?.symbol})</span>
                                )) : <span>We don't spend money here</span>}
                            </p>
                            <p>Languages:{" "}
                                <span className={isLoading ? 'line' : "lang"}>{langVals?.join(", ") || "Here, we use telepathy"}</span>
                            </p>
                        </div>
                    </div>
                    <div className="border-countries">
                        <p>Border Countries: </p>
                        <div>
                            {data?.borders ? renderBorders : "This country has no border"}
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
};

export default CountryDetails