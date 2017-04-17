/* eslint import/no-extraneous-dependencies: 0 */
import test from 'ava';
import request from 'supertest';
import 'babel-register';

import server from '../../src';

test('GET /rides :Success - ping endpoint', async (t) => {
  const res = await request(server)
              .get('/api/rides');

  t.is(res.status, 200);
});

test('foo', (t) => {
  t.pass();
});

test('bar', async (t) => {
  const bar = Promise.resolve('bar');
  t.is(await bar, 'bar');
});
