import React,{useEffect,useState} from 'react';
import './App.css';
import CurrencyRow from './components/CurrencyRow';


const BASE_URL = 'https://api.exchangeratesapi.io/latest'

function App() {
  const [currenctyOption, setCurrenctyOption] = useState([])
  const [fromCurrency, setFromCurrnecy] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFrom, setAmountInFrom] = useState(true)

  let toAmount,fromAmount;
  if(amountInFrom){
    fromAmount =amount
    toAmount= amount *exchangeRate
  }else{
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  function handleFromAm(e) {
    setAmount(e.target.value)
    setAmountInFrom(true)
  }
  function handleToAm(e) {
    setAmount(e.target.value)
    setAmountInFrom(false)
  }

  console.log(exchangeRate)
  useEffect(() => {
    fetch(BASE_URL).then(res=>res.json()).then(data=>{const fristCurrency = Object.keys(data.rates)[0]
      setCurrenctyOption([data.base,...Object.keys(data.rates)])
      setFromCurrnecy(data.base)
      console.log(data)
      setToCurrency(fristCurrency)
      setExchangeRate(data.rates[fristCurrency])
      

    }
    )
  }, [])

  useEffect(() => {
    if(fromCurrency && toCurrency){
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(res=>res.json())
        .then(data=>setExchangeRate(data.rates[toCurrency]))
    }
  }, [fromCurrency,toCurrency])

  return (
    <div>
        <h1>Currency Exchanger</h1>
        <CurrencyRow handleAm={handleFromAm} selectedCurrency={fromCurrency} currenctyOption={currenctyOption} onChangeCurrency={e=>setFromCurrnecy(e.target.value)} amount={fromAmount} />
        <div>=</div>
        <CurrencyRow handleAm={handleToAm} selectedCurrency={toCurrency} currenctyOption={currenctyOption} onChangeCurrency={e=>setToCurrency(e.target.value)} amount={toAmount} />
    </div>
  );
}

export default App;
