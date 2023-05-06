import { useEffect, useState } from 'react';
import '../index.css';
import CountryCard from "../Components/CountryCard";
import { useFetcher } from '../useFetcher';
import LoadingCard from '../Components/LoadingCard';

const Home = () => {
    const [region, setRegion] = useState("");
    const [searchVal, setSearchVal] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);
    
    const { data: regionArray } = useFetcher('region', region);
    const { data: countryArray, isLoading } = useFetcher('all', '');

    useEffect(() => {
        region
        ? setFilteredCountries(regionArray.filter(country => country.name.official.toLowerCase().includes(searchVal)))
        : setFilteredCountries(countryArray.filter(country => country.name.official.toLowerCase().includes(searchVal)));
    }, [searchVal]);

    useEffect(() => {
        console.log(regionArray);
    }, [region]);

    return (
        <>
            <div className="top">
                <input
                    type="search"
                    value={searchVal}
                    className="searchBar"
                    placeholder="Search for a country..."
                    onChange={(e) => setSearchVal(e.target.value)}
                />
                <select name="region" id="region" value={region} onChange={(e) => setRegion(e.target.value)}>
                    <option value="all">All</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>
            <section className="countries">
                {isLoading ? (
                    <>
                        <LoadingCard />
                        <LoadingCard />
                        <LoadingCard />
                        <LoadingCard />
                    </>
                    )
                : searchVal ? filteredCountries?.map(country => {
                    const { flags, name, population, region, capital, cca3 } = country;
                    return (
                        <CountryCard
                            key={cca3}
                            flag={flags.png}
                            name={name.official}
                            population={population}
                            region={region}
                            capital={typeof capital === "object" ? capital[0] : capital}
                            cca3={cca3}
                        />
                    )
                })
                : regionArray.length > 0 ? regionArray?.map(country => {
                    const { flags, name, population, region, capital, cca3 } = country;
                    return (
                        <CountryCard
                            key={cca3}
                            flag={flags.png}
                            name={name.official}
                            population={population}
                            region={region}
                            capital={typeof capital === "object" ? capital[0] : capital}
                            cca3={cca3}
                        />
                    )
                })
                : countryArray?.map(country => {
                    const { flags, name, population, region, capital, cca3 } = country;
                    return (
                        <CountryCard
                            key={cca3}
                            flag={flags.png}
                            name={name.official}
                            population={population}
                            region={region}
                            capital={typeof capital === "object" ? capital[0] : capital}
                            cca3={cca3}
                        />
                    )
                })}
            </section>
        </>
    )
}

export default Home