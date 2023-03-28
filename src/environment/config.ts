type MODE_TYPE = 'prod' | 'dev';

/**
 * Set the environment
*/
const MODE : MODE_TYPE = 'prod';

/**
 * Page size for pagination purposes
 * */ 
const PAGE_SIZE = 10;

/**
 * Get the API URL based on the environment
*/
const getApiURL = () => {
  if (MODE == 'dev' as MODE_TYPE) {
    return "http://192.168.0.102:5050/poems";
  } else {
    return "http://poetree-api.cyclic.app/poems";
  }
}

export {
    getApiURL,
    PAGE_SIZE
}