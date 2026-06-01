import axios from 'axios'
import { questionInt } from 'readline-sync'

const API_URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies`

async function getOptions() {
    try {
        const response = await axios.get(`${API_URL}.json`)
        const data = response.data
        const options = Object.keys(data)
        return options
    } catch (error) {
        console.log(error);
    }
}

async function convertCurrency(amount, fromCurrency, toCurrency) {
    try {
        const response = await axios.get(`${API_URL}/${fromCurrency}.json`)
        // console.log(response);
        const data = response.data
        const rate = data[fromCurrency][toCurrency]
        // console.log(rate);
        return rate * amount
    } catch (error) {
        console.log(error);
    }


}

// await convertCurrency(100, 'usd', 'inr')

async function main() {
    try {
        const options = await getOptions()
        options.forEach((option, index) => {
            console.log(`${index + 1}: ${option}`);
        });
        const fromIndex = questionInt('From: ')
        if (fromIndex < 0 || fromIndex > options.length) {
            console.log('Invalid option');
            return
        }
        const toIndex = questionInt('To: ')
        if (toIndex < 0 || toIndex > options.length) {
            console.log('Invalid option');
            return
        }
        const amount = questionInt('Amount: ')
        const fromCurrency = options[fromIndex - 1]
        const toCurrency = options[toIndex - 1]
        const convertedAmount = await convertCurrency(amount, fromCurrency, toCurrency)
        console.log(`${amount} in ${fromCurrency} is ${convertedAmount} in ${toCurrency}`);

    } catch (error) {
        console.log(error);
    }
}
main()