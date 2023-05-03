import { useEffect, useState } from "react";
import axios from "axios";

export const useFetcher = (endpoint, code) => {
    const url = `https://restcountries.com/v3.1/${endpoint}/${code}`;
    const  [isLoading, setIsLoading] = useState(false);
    const  [error, setError] = useState("");
    const  [data, setData] = useState([]);

    async function fetch () {
        setIsLoading(true);

        try {
            // const res = await axios.get(url);
            // const dat = res.json();
            // setData(dat?.data.sort((a,b) => a.name.official !== b.name.official ? a.name.official < b.name.official ? -1: 1 : 0));
            axios.get(url)
            .then(res => {
                if (endpoint === 'all' || 'region') {
                    setData(res?.data.sort((a,b) => a.name.official !== b.name.official ? a.name.official < b.name.official ? -1: 1 : 0));
                } else {
                    setData(res?.data);
                }
            })
        } catch (error) {
            console.log(error.message);
            // setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetch();
    }, [endpoint, code]);

    return { isLoading, data };
}