import { useEffect, useState } from "react";
import axios from "axios";

export const useFetcher = (endpoint, code) => {
    const url = `https://restcountries.com/v3.1/${endpoint}/${code}`;
    const  [isLoading, setIsLoading] = useState(false);
    const  [isError, setIsError] = useState(false);
    const  [data, setData] = useState([]);

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const res = await axios.get(url);
            const dat = res.data;
            endpoint ==='alpha' ? setData(dat[0]) : setData(dat?.sort((a,b) => a.name.official !== b.name.official ? a.name.official < b.name.official ? -1: 1 : 0));
        } catch (error) {
            console.log(error);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [endpoint, code]);

    return { isLoading, data };
}