const { sleep } = require("../exercices_start/10_promise.js");
const axios = require("axios");

const usingThen = (cb) => {
  sleep().then(() => {
    cb();
  });
};

const usingAwait = async (cb) => {
  await sleep();
  cb();
};

const apiResponse = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

module.exports = { usingThen, usingAwait, apiResponse };