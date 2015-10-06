var request = require('supertest')
var app     = require('../app.js')

describe('first scene graph API', function() {
  it('responds to GET /scene-graph-1', function(done) {
    expected_graph = {
      parent: "root",
      children: []
    }
    
    request(app)
      .get('/scene-graph-1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, expected_graph, done)
  })
})