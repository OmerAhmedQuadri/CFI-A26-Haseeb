import {useState, useEffect} from 'react';
import axios from 'axios';

const fetchCurrency = async (fromCurrency) => {
    try {
        return await axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`)
    } catch (error) {
        console.log(`Error fetching data, ${error}` );
    }
}

const useCurrency = (fromCurrency) => {
    const [res, setRes] = useState({});

    useEffect(() => {
        const getCurrency = async () => {
            const response = await fetchCurrency(fromCurrency);
            setRes(response.data[fromCurrency]);
        }
        getCurrency();
    }, [fromCurrency]);

    return res;
}

export default useCurrency;