const request = require('supertest');
const app = require('./app');


describe('GET /users', () => {
    it('return list of users', done => {
        request(app)
            .get('/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) throw err;
                return done();
            })
    })
})