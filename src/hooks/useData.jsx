import useSWR from "swr";
import { COINGECKO_API_ENDPOINT } from "../constants/endpoints";
import axios from 'axios'; 

const getData = (url) => axios.get(url).then(res => res.data);

export const useData = (refreshRate) => {
    const configObj = refreshRate ? { refreshInterval: refreshRate } : null;
    const { data, error, isLoading } = useSWR(COINGECKO_API_ENDPOINT, getData, configObj); 

    return {
        data, 
        error, 
        isLoading
    };
};