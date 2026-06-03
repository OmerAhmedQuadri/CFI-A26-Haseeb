import React from 'react'
import './index.css'
import { useEffect, useState } from 'react'
import useCurrency from './hooks/useCurrency';

const App = () => {
  const [fromCurrency, setfromCurrency] = useState('usd')
  const [fromCurrencyValue, setfromCurrencyValue] = useState(0)
  const [toCurrency, settoCurrency] = useState('inr')
  const [toCurrencyValue, settoCurrencyValue] = useState(0)

  const currency = useCurrency(fromCurrency);
  const currencyOptions = Object.keys(currency)
  const handleSubmit = () => {
    const rate = currency[toCurrency]
    settoCurrencyValue(fromCurrencyValue * rate)
  }
  return (
    <div className='flex justify-center items-center min-h-screen flex-col bg-linear-to-br from-purple-950 via-blue-950 text-white'>
      <div className='flex flex-col justify-center items-center gap-8 w-full max-w-2xl p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20'>
        <p className='font-bold text-4xl text-center mb-8 bg-linear-to-r' >Currency Converter: </p>
        <div className="grid grid-cols-[60px_1fr_180px] gap-4 items-center">
          <label htmlFor="fromCurrency" className="text-lg font-medium text-white text-right">From: </label>
          <input type="number" id='fromCurrency' className=' no-spinner w-full p-3 rounded-xl border border-white/10 text-white bg-white/5 outline-none transition ' value={fromCurrencyValue} onChange={(e) => setfromCurrencyValue(e.target.value)} />
          <select className=' w-full outline-0 border rounded-lg p-2 bg-white/5 border-white/10' value={fromCurrency} onChange={(e) => setfromCurrency(e.target.value)}>
            {
              currencyOptions.map((option) => (
                <option className='text-black' key={option} value={option}>{option.toUpperCase()}</option>
              ))
            }
          </select>
        </div>
        <div className="grid grid-cols-[60px_1fr_180px] gap-4 items-center">
            <label htmlFor="toCurrency" className="text-lg font-medium text-white text-right">To: </label>
          <input readOnly id='toCurrency' className='w-full p-3 rounded-xl border border-white/10 text-white bg-white/5 outline-none transition ' value={toCurrencyValue} onChange={(e) => settoCurrencyValue(e.target.value)} />
           <select className='outline-0 border w-full border-white/10 rounded-lg bg-white/5 p-2' value={toCurrency} onChange={(e) => settoCurrency(e.target.value)}>
            {
              currencyOptions.map((option) => (
                <option className='text-black' key={option} value={option}>{option.toUpperCase()}</option>
              ))
            }
          </select>
        </div>
        <div className='min-w-2xs'>
          <button className="w-full bg-white/5 border-white/10 hover:bg-white hover:text-black transition-all duration-200 py-3 rounded-lg font-semibold cursor-pointer"onClick={handleSubmit}>Convert</button>
        </div>
      </div>

    </div>
  )
}

export default App