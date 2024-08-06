document.getElementById("currencySelector").addEventListener("change", async function() {
    const selectedCurrency = this.value;
    fxpair = selectedCurrency;  // Update fxpair dynamically
    console.log('Selected Currency:', fxpair);  // Debugging

    const [base, quote] = selectedCurrency.split('/');
    const apiKey = 'H5C4BHJSC3IGB0LX'; // Your Alpha Vantage API key

    const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${base}&to_currency=${quote}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data && data['Realtime Currency Exchange Rate'] && data['Realtime Currency Exchange Rate']['5. Exchange Rate']) {
            const exchangeRate = data['Realtime Currency Exchange Rate']['5. Exchange Rate'];
            document.getElementById("spot").value = exchangeRate;

            // Add to pending orders
            const pendingOrder = document.createElement("div");
            pendingOrder.classList.add("kanban-item");
            pendingOrder.textContent = `${selectedCurrency} @ ${exchangeRate}`;
            document.getElementById("pendingOrders").appendChild(pendingOrder);

            // Move the order to in-progress after a delay
            setTimeout(() => {
                document.getElementById("ganttItems").appendChild(pendingOrder);
                pendingOrder.classList.add("marquee-item");
                startMarquee(pendingOrder);
            }, 11000);  // Adjust the delay as needed, 1s = 1000
        } else {
            console.error('Exchange rate not found in the response:', data);
            document.getElementById("results").innerHTML = 'Exchange rate not found. Please try again.';
        }
    } catch (error) {
        console.error('Error fetching the currency data:', error);
        document.getElementById("results").innerHTML = 'Error fetching the currency data. Please try again.';
    }
});

function startMarquee(item) {
    item.style.position = 'relative';
    item.style.animation = 'marquee 60s linear forwards';
    item.addEventListener('animationend', () => {
        finalizeTrade(item);
    });
}

function finalizeTrade(item) {
    const finalizedOrders = document.getElementById("finalizedTrades");

    // Remove animation classes
    item.classList.remove("marquee-item");

    // Move item to finalized column
    finalizedOrders.appendChild(item);

    // Add old and new price display
    const newPrice = document.getElementById("spot").value;
    item.textContent += ` -> ${newPrice}`;
}

// CSS for marquee animation (add this to your CSS file)
const style = document.createElement('style');
style.innerHTML = `
    @keyframes marquee {
        from { left: 0; }
        to { left: 100%; }
    }
    .marquee-item {
        animation: marquee 216000s linear forwards;
    }
`;
document.head.appendChild(style);
