const extractFirstTwo = ([first, second]) => [first, second];

const extractRest = ([first, ...rest]) => rest;

const extractName = ({ name }) => name;

const removePassword = ({ password, ...rest }) => rest;

module.exports = { extractFirstTwo, extractRest, extractName, removePassword };
