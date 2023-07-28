from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route('/fetch_data', methods=['GET'])
def fetch_data():
    beastid = request.args.get('beastid')
    url = f'https://secure.runescape.com/m=itemdb_rs/bestiary/beastData.json?beastid={beastid}'
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        return jsonify(data)
    else:
        return jsonify({'error': 'Failed to fetch data'}), 500

if __name__ == '__main__':
    app.run()
