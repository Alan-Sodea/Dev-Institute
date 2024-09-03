document.addEventListener('DOMContentLoaded', () => {
    const API_KEY = 'YOUR_API_KEY'; // Replace with your API key
    const BASE_URL = 'https://api.apilayer.com/exchangerates_data';

    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
    const amountInput = document.getElementById('amount');
    const convertBtn = document.getElementById('convertBtn');
    const switchBtn = document.getElementById('switchBtn');
    const convertedAmountSpan = document.getElementById('convertedAmount');

    async function fetchCurrencies() {
        try {
            const response = await fetch(`${BASE_URL}/symbols`, {
                headers: {
                    'apikey': API_KEY
                }
            });
            const data = await response.json();
            populateCurrencySelects(data.symbols);
        } catch (error) {
            console.error('Error fetching currencies:', error);
        }
    }

    function populateCurrencySelects(currencies) {
        for (const [code, name] of Object.entries(currencies)) {
            const option = document.createElement('option');
            option.value = code;
            option.textContent = `${code} - ${name}`;
            fromCurrencySelect.appendChild(option);
            toCurrencySelect.appendChild(option.cloneNode(true));
        }
    }

    async function fetchConversionRate(from, to, amount) {
        try {
            const response = await fetch(`${BASE_URL}/convert?from=${from}&to=${to}&amount=${amount}`, {
                headers: {
                    'apikey': API_KEY
                }
            });
            const data = await response.json();
            return data.result;
        } catch (error) {
            console.error('Error fetching conversion rate:', error);
        }
    }

    async function convertCurrency() {
        const from = fromCurrencySelect.value;
        const to = toCurrencySelect.value;
        const amount = parseFloat(amountInput.value);

        if (from && to && amount) {
            const convertedAmount = await fetchConversionRate(from, to, amount);
            convertedAmountSpan.textContent = `${convertedAmount} ${to}`;
        } else {
            convertedAmountSpan.textContent = 'Please fill all fields.';
        }
    }

    function switchCurrencies() {
        const fromValue = fromCurrencySelect.value;
        const toValue = toCurrencySelect.value;

        fromCurrencySelect.value = toValue;
        toCurrencySelect.value = fromValue;

        convertCurrency();
    }

    convertBtn.addEventListener('click', convertCurrency);
    switchBtn.addEventListener('click', switchCurrencies);

    fetchCurrencies();
});
