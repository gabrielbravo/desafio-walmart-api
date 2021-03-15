const pkg = require('../../package.json');

const database = {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 27017,
    dbName: process.env.DB_NAME || '',
    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD || '',
    options: {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    }
};

const userPasswordDatabase = (database.dbUser || database.dbUser) && `${database.dbUser}:${database.dbPassword}@`;

const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3001,
    version: pkg.version,
    name: pkg.name,
    database: {
        ...database,
        uri: `mongodb://${userPasswordDatabase}${database.host}:${database.port}/${database.dbName}?authSource=admin`
      },
};

module.exports = config;
