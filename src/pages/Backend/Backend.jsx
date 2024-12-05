import React, { useState } from "react";
import axios from "axios";

const BackendOutputPage = () => {
  const [pincode, setPincode] = useState("");
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.post("http://localhost:5000/getPlaces", {
        pincode,
      });
      setPlaces(response.data); // Set places data
      setError(""); // Clear any errors
    } catch (err) {
      setPlaces([]); // Clear previous places
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial, sans-serif" }}>
      <h1>Pincode Search</h1>
      <input
        type="text"
        placeholder="Enter Pincode"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
        style={{ padding: "10px", width: "200px", marginBottom: "20px" }}
      />
      <br />
      <button onClick={handleSearch} style={{ padding: "10px 20px", cursor: "pointer" }}>
        Search
      </button>

      {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}

      <div style={{ marginTop: "30px" }}>
        <h2>Places</h2>
        {places.length > 0 ? (
          places.map((place, index) => (
            <p key={index}>
              <strong>Place {index + 1}:</strong> {place.place}, <strong>State:</strong> {place.state}
            </p>
          ))
        ) : (
          !error && <p>No places to display</p>
        )}
      </div>
    </div>
  );
};

export default BackendOutputPage;
