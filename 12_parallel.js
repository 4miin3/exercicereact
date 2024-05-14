const { apiResponse } = require("./11_async");

const parallel = async () => {
    try {
        const urls  
        = [
            'https://jsonplaceholder.typicode.com/todos/1',
            'https://jsonplaceholder.typicode.com/todos/2',
            'https://jsonplaceholder.typicode.com/todos/3'
          ];    

          const response = await Promise.all(urls.map(url =>apiResponse(url)));

          return responses;
    }
    catch(error){
        console.error('error exuting parallel requets', error);
        throw error;

    }
};

module.export ={parallel};
