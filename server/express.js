import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());

const port = 5000; // Backend server will run on port 5000

// API to fetch places based on pincode
app.post("/getPlaces", async (req, res) => {
  const { pincode } = req.body;

  // Validate the pincode
  if (!pincode || pincode.length !== 6 || isNaN(pincode)) {
    return res.status(400).json({ message: "Invalid Pincode format" });
  }

  try {
    // Call the Postal PIN Code API
    const response = await axios.get(
      `http://www.postalpincode.in/api/pincode/${pincode}`
    );

    // Check if the response status is success
    if (response.data && response.data.Status === "Success") {
      const postOffices = response.data.PostOffice.map((office) => ({
        place: office.Name,
        state: office.State,
      }));
      res.json(postOffices);
    } else {
      res.status(404).json({ message: "Invalid Pincode or no data found" });
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ message: "Server error, please try again later" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
