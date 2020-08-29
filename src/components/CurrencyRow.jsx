import React from 'react'

export default function CurrencyRow({amount,handleAm,currenctyOption,selectedCurrency,onChangeCurrency}) {
    return (
        <div>
            <input type="number" value={amount} onChange={handleAm} />
            <select name="" id="" value={selectedCurrency} onChange={onChangeCurrency}>
                {currenctyOption.map(option=>(
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}
