
/**
 * Set the environment
*/
const MODE = "dev";

/**
 * Page size for pagination purposes
 * */ 
const PAGE_SIZE = 10;

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
    getApiURL,
    PAGE_SIZE
}