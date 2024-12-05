const axios = require("axios");

const getPlaces = async (pincode) => {
  try {
    // Make a GET request to the Postal PIN Code API
    const response = await axios.get(
      `http://www.postalpincode.in/api/pincode/${pincode}`
    );

    // Check if the API response status is 'Success'
    if (response.data && response.data.Status === "Success") {
      // Map the PostOffice array to extract place and state details
      const postOffices = response.data.PostOffice.map((office) => ({
        place: office.Name,
        state: office.State,
      }));
      return {
        success: true,
        data: postOffices,
      };
    } else {
      return {
        success: false,
        message: "Invalid Pincode or no data found",
      };
    }
  } catch (error) {
    // Handle server or network errors
    return {
      success: false,
      message: "Server error, please try again later",
    };
  }
};

module.exports = getPlaces;
