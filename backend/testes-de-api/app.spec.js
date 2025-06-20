const request = require('supertest');
const { app, port } = require('./app');

describe('GET /', () => {
    test('should respond with "Hello World!"', async () => {
        const response = await request(app).get('/');
        // console.log(response);
        expect(response.text).toBe("Hello World!");

    })
    test('should respond with status code 200', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    })
})

/*
    O console.log(response) imprime o objeto de resposta da api.
    todas essas propriedades podem ser usadas para fazer os testes
    por exemplo usando o response.statusCode a gente consegue testar qual
    o status code que a api está mandando para o frontend.
*/