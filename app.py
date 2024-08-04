from flask import Flask, request, jsonify
from flask_cors import CORS
import csv
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/save', methods=['POST'])
def save_data():
    data = request.json
    file_exists = os.path.isfile('data/data.csv')
    with open('data.csv', mode='a', newline='') as file:
        writer = csv.writer(file)
        if not file_exists:
            writer.writerow(['Date', 'Time', 'Entry_Price', 'Sine_Close_Price', 'Entry_Forecast', 'Actual_Close_Price'])
        writer.writerow([data['Date'], data['Time'], data['Entry_Price'], data['Sine_Close_Price'], data['Entry_Forecast'], data['Actual_Close_Price']])
    return jsonify({"message": "Data saved successfully"}), 200

if __name__ == '__main__':
    app.run(debug=True)
