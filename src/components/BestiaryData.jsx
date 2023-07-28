import { useState } from 'react';
import axios from 'axios';

const BestiaryData = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:5000/fetch_data', {
        params: {
          beastid: searchTerm,
        },
      });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter beast ID..."
      />
      <button onClick={handleSearch}>Search</button>

      {data ? (
        <div className="container">
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          <hr className="border--line"></hr>
          <h3>Information:</h3>
          <div className="information--div">
            <p>Level: {data.level ? data.level : "No data found"}</p>
            <p>HP: {data.lifepoints ? data.lifepoints : "No data found"}</p>
            <p>Members: {data.members ? "Yes" : "No"}</p>
          </div>
          <hr className="border--line"></hr>
            <h3>Location:</h3>
          <div className="">
            <p>{data.areas}</p>
          </div>
          <hr className="border--line"></hr>
          <h3>Stats:</h3>
          <div className="information--div">
            <p>Attack: {data.attack ? data.attack : "No data found"}</p>
            <p>Magic: {data.magic ? data.magic : "No data found"}</p>
            <p>Ranged: {data.ranged ? data.ranged : "No data found"}</p>
          </div>
        </div>
      ) : (
        <p>No data fetched yet.</p>
      )}
    </div>
  );
};

export default BestiaryData;
