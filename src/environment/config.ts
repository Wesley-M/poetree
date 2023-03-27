const MODE = "dev";

/**
 * Get the API URL based on the environment
*/
const getApiURL = () => {
  if (MODE === "dev") {
    return "http://localhost:5050/poems";
  } else {
    return "https://api.example.com";
  }
}

export {
    getApiURL
}