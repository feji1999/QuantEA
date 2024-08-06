Dear Coder,
Here is how to use the trader performance dashboard i have developed.
Also included is the standalone python script "algo.py" that triggers
directly the MT5 software that is installed already in your target machine.

PYTHON SETUP:
do a "pip install -r requirements.txt" to install all necessary libraries.

FRONTEND:
The basic frontend interface of the software is "algos.html" file.
This is the real-time performance plotter and the quant math model
i had developed in 2022 can also be generated and tested here.
Select the currency pair from the dropdown menu and then you hit
the "Quant Analysis(Hourly)" button to generate a prediction(buy/sell).

EA TRADING:
The "algo.py" python script is the autotrading bot for mt5 platform.
To use, you must have AlgoTrading turned on from MT5's app interface on desktop.
Next, you need to adjust the code and set your lotsize, fx pair and risk you want.
in your editor( e.g VSCode) you can search with "CTRL/CMD + F" to find the following;
"symbol", "Startinglot","risk_percent" etc variables.

BACKEND:
the "app.py" is a flask local server that handles CORS exceptions to test this
EA bot on your local machine. It's core function is to save results obtained
from the frontend into a csv format. Please note the EA Trading python script
is a standalone executable that implements just the executions of trades based
on my math model/quant algorithm.

Happy Coding!
Your Delight,
Fejiro.
