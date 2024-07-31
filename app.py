from flask import Flask, request, jsonify
import csv
import os
from datetime import datetime

app = Flask(__name__)

@app.route('/save', methods=['POST'])
def save_data():
    data = request.json
    filename = "forex_data.csv"
    file_exists = os.path.isfile(filename)
    
    with open(filename, 'a', newline='') as csvfile:
        fieldnames = ['Date', 'Time', 'Entry_Price', 'Sine_Close_Price', 'Entry_Forecast', 'Actual_Close_Price']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        
        if not file_exists:
            writer.writeheader()
        
        writer.writerow(data)
    
    return jsonify({"message": "Data saved successfully"}), 200

if __name__ == '__main__':
    app.run(debug=True)
