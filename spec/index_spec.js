var request = require('supertest');
var app = require('../index.js');

function finish_test (done) {
  return function (err) {
    if (err) {
      done.fail(err)
    } else {
      done()
    }
  }
};

describe('GET /scene_graph_1', function() {
  it('responds with json', function() {
    request(app)
      .get('/scene_graph_1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(finish_test(done))
  })
});