const { apiResponse } = require("./11_async");

const parallel = async () => {
    try {
        const urls = [
            'https://jsonplaceholder.typicode.com/todos/1',
            'https://jsonplaceholder.typicode.com/todos/2',
            'https://jsonplaceholder.typicode.com/todos/3'
        ];    

        const responses = await Promise.all(urls.map(url => apiResponse(url)));

        // Retourne les résultats des appels API
        return responses;
    } catch(error) {
        console.error('Erreur lors de l\'exécution des requêtes parallèles', error);
        throw error;
    }
};

module.exports = { parallel };
