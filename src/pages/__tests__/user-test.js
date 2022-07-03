jest.mock('../request');

import * as user from '../user';

// The assertion for a promise must be returned.
'use strict';

export default function request(url) {
  return new Promise((resolve, reject) => {
    const dogId = parseInt(url.substr('/users/'.length), 10);
    process.nextTick(() =>
      users[dogId]
        ? resolve(users[dogId])
        : reject({
            error: `Dogs with ${dogId} not found.`,
          }),
    );
  });
}