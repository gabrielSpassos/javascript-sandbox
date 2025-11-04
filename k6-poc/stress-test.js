import http from 'k6/http';
import { sleep, check } from 'k6';
import { Counter } from 'k6/metrics';

let loginFailures = new Counter('login_failures');

// test configuration
export const options = {
  stages: [
    { duration: '10s', target: 20 }, // ramp up to 20 users in 1 minute
    { duration: '30s', target: 20 }, // hold steady for 3 minutes
    { duration: '10s', target: 0 },  // ramp down to 0 users in 1 minute
  ],
  thresholds: {
    http_req_duration: ['p(99.9)<800'], // 99.9% of requests must complete under 800ms
    http_req_failed: ['rate<0.01']    // less than 1% request failure rate
  }
};

export default function() {
  
  // simulate diverse user interactions
  const responses = http.batch([
    ['POST', 'https://test-api.k6.io/auth/basic/login/', JSON.stringify({username:'test',password:'1234'})],
    ['GET', 'https://test-api.k6.io/public/crocodiles/'],
  ]);

  // validate multiple endpoint responses
  check(responses[0], { 
    'Login done': (r) => r.status === 200,
    'response time is acceptable': (r) => r.timings.duration < 500 
  });

  check(responses[1], { 
    'Crocodiles loaded': (r) => r.status === 200,
    'response time is acceptable': (r) => r.timings.duration < 500 
  });

  // simulate user activity
  sleep(1);

  let res = http.post('https://test-api.k6.io/auth/basic/login/', { 
    username: 'test',
    password: 'wrong_password'
  });
  if (res.status !== 200) {
    loginFailures.add(1); // Increment the counter for failed logins
  }
}