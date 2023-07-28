import requests
import json

url = "https://secure.runescape.com/m=itemdb_rs/bestiary/beastData.json?beastid=x"
response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    with open("beast_data.json", "w") as f:
        json.dump(data, f)
else:
    print("Error fetching data:", response.status_code)
