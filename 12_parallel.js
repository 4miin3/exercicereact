const { apiResponse } = require("./11_async.js");

const parallel = async () => {
  const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3"
  ];

  try {
    // Map over each URL and call apiResponse asynchronously
    const promises = urls.map(url => apiResponse(url));

    // Wait for all promises to resolve
    return Promise.all(promises);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

module.exports = { parallel };
