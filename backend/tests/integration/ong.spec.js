const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('POST /ongs', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Lucas ONG",
                email: "lucasrosante123@gmail.com",
                whatsapp: "18996213320",
                city: "Pau Dalho",
                uf:	"SP"
        });        

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
    });
});  