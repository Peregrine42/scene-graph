var request = require('supertest')
var app     = require('../index.js')

describe('first scene graph API', function() {
  it('responds to GET', function(done) {
    request(app)
      .get('/scene-graph-1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
  
})