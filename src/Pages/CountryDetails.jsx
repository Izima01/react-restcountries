import React from 'react'
import { Link, useParams } from 'react-router-dom';

const CountryDetails = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useFetcher('alpha', id);

    console.log(data);

    return (
        <section id="details-container" class="">
            <Link to="/" class="back">Back</Link>
            <section id="details-page">
                <div class="flag"><img src="" id="flagImg" alt="" /></div>
                <div>
                    <h1 class="fullName"></h1>
                    <div class="details">
                        <div class="left">
                            <p>Native Name: <span class="native-name"></span></p>
                            <p>Population: <span class="population"></span></p>
                            <p>Region: <span class="region"></span></p>
                            <p>Sub Region: <span class="sub-region"></span></p>
                            <p>Capital: <span class="capital"></span></p>
                        </div>
                        <div class="right">
                            <p>Top Level Domain: <span class="domain"></span></p>
                            <p>Currencies: <span class="Currencies"></span></p>
                            <p>Languages: <span class="lang"></span></p>
                        </div>
                    </div>
                    <div class="border-countries">
                        <h4>Border Countries: </h4>
                        <div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
};

export default CountryDetails