const { createClient } = require('redis');

/* pulls the Redis URL from .env */
const url = process.env.REDIS_URL;

/* create a connection to Redis with Node Redis */
const connection = createClient({ url });
module.exports = connection;
