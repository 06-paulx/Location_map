/* env jest */
const request = require('supertest');
const app = require('../server');

describe('GET / ', () => {
  test('It should respond with a listing object', async () => {
    const response = await request(app).get('/api/location/1');
    expect(response.body).toEqual({
      airport: 'San Francisco International Airport',
      city: 'San Francisco, California',
      country: 'United States',
      latitude: 37.71189344,
      listing_description:
        'Earum in quibusdam et. In voluptatem quisquam et dolorum dolorum nihil dolorem. Et qui amet qui dolorem occaecati nesciunt ut. Ex cumque laboriosam eos illum molestias numquam aut atque. Sed iure maxime asperiores ipsa.',
      listing_id: 1,
      longitude: -122.44038741,
      time_to_airport: 46,
    });
    expect(response.statusCode).toBe(200);
  });
});
