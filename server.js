const app = require('./app');

//Starting express server
    const server = app.listen(3005, () => {
        console.log(`Express is running on port ${server.address().port}`);
    });