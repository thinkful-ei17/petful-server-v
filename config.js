module.exports = {
    PORT: process.env.PORT || 8080,
    CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
    DATABASE_URL:
        process.env.DATABASE_URL || 'mongodb://dev:dev@ds245357.mlab.com:45357/test_db',
    TEST_DATABASE_URL:
        process.env.TEST_DATABASE_URL ||
        'mongodb://test:test@ds245357.mlab.com:45357/test_db'
    // DATABASE_URL:
    //     process.env.DATABASE_URL || 'postgres://localhost/thinkful-backend',
    // TEST_DATABASE_URL:
    //     process.env.TEST_DATABASE_URL ||
    //     'postgres://localhost/thinkful-backend-test'
};
