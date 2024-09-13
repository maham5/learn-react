import { useState } from 'react';
import { InputBox } from './components';
import useCurrencyinfo from "./hooks/useCurrencyinfo";

import './App.css';

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr"); // Changed to lowercase "to"
    const [convertAmount, setConvertedAmount] = useState(0);

    const currencyinfo = useCurrencyinfo(from);

    const options = Object.keys(currencyinfo);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertedAmount(amount);
        setAmount(convertAmount);
    };

    const convert = () => {
        setConvertedAmount(amount * currencyinfo[to]); // Use "to" for conversion
    };

    return (
        <>
            <div
                className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
                style={{
                  backgroundColor : "black"
                }}
            >
                <div className="w-full">
                    <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-blue-500">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                convert();
                            }}
                        >
                            <div className="w-full mb-1">
                                <InputBox
                                    label="From"
                                    amount={amount}
                                    onAmountchange={(value) => setAmount(value)} // Correct handling of amount
                                    onCurrencychange={(currency) => setFrom(currency)} // Set "from" currency
                                    selectCurrency={from}
                                    currencyOption={options} // Added options
                                />
                            </div>
                            <div className="relative w-full h-0.5">
                                <button
                                    type="button"
                                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                    onClick={swap}
                                >
                                    swap
                                </button>
                            </div>
                            <div className="w-full mt-1 mb-4">
                                <InputBox
                                    label="To"
                                    amount={convertAmount}
                                    onCurrencychange={(currency) => setTo(currency)} // Set "to" currency
                                    selectCurrency={to}
                                    currencyOption={options} // Added options
                                    amountDisable={true} // Disable the amount input
                                />
                            </div>
                            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                                Convert {from.toUpperCase()} to {to.toUpperCase()}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;