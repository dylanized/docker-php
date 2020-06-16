const test = require('unit.js');

const port = process.env.PORT || 8000;
const url = process.env.URL || `http://localhost:${port}`;

describe('Basic HTTP Tests', function() {
  it('Loads Homepage', function(done) {
    test.httpAgent(url)
      .get('/')
      .expect(200, done);
  });
  it('Loads Login Page', function(done) {
    test.httpAgent(url)
      .get('/login')
      .expect(200, done);
  });
  it('Loads CSS', function(done) {
    test.httpAgent(url)
      .get('/css/style.css')
      .expect(200, done);
  });
  it('Loads image', function(done) {
    test.httpAgent(url)
      .get('/img/foo.png')
      .expect(200, done);
  });
  it('Missing File 404', function(done) {
    test.httpAgent(url)
      .get('/tmp/foo.json')
      .expect(404, done);
  });
});
