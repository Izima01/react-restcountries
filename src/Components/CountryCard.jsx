import sampleFlag from '../assets/flag.jpg';
import { Link } from 'react-router-dom';

const CountryCard = ({ name, population, region, capital, flag, cca3 }) => {
    return (
        <Link to={`details/${cca3}`} className="card">
            <img className="flag" loading={'lazy'} src={flag || sampleFlag} alt="" />
            <div className="card-body">
                <h3 className="name">{name || "United States of America"}</h3>
                <p>Population: {" "}
                    <span className="population">{population || "407939029"}</span>
                </p>
                <p>Region:{' '}
                    <span className="region">{region || "North America"}</span>
                </p>
                <p>Capital:{' '}
                    <span className="capital">{capital || "New York"}</span>
                </p>
            </div>
        </Link>
    )
}

export default CountryCard