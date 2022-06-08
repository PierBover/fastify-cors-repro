const fastify = require('fastify')({ logger: true });
const cors = require('@fastify/cors');

fastify.register((app, options, next) => {

    app.get('/', (request, response) => {
        response.send('no cors!')
    });

    next();
});


fastify.register((app, options, next) => {

    app.register(cors, {origin: '*'});

    app.get('/cors', (request, response) => {
        response.send('cors!')
    });

    next();
});

fastify.register((app, options, next) => {

    app.register(cors, {origin: '*'});

    app.get('/cors-two', (request, response) => {
        response.send('cors two!')
    });

    next();
});


fastify.listen(3000)