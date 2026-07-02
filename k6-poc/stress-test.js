import http from 'k6/http';
import { sleep, check } from 'k6';
import { Counter } from 'k6/metrics';

let loginFailures = new Counter('login_failures');

// test configuration
export const options = {
  stages: [
    { duration: '10s', target: 20 }, // ramp up to 20 users in 10 seconds
    { duration: '20s', target: 20 }, // hold steady for 20 seconds
    { duration: '10s', target: 0 },  // ramp down to 0 users in 10 seconds
  ],
  thresholds: {
    http_req_duration: ['p(99.9)<800'], // 99.9% of requests must complete under 800ms
  }
};

export default function() {
  
  // simulate diverse user interactions
  const responses = http.batch([
    ['POST', 'https://quickpizza.grafana.com/api/post', JSON.stringify({name:'lorem',surname:'ipsum'})],
    ['GET', 'https://test-api.k6.io/public/crocodiles/'],
  ]);

  // validate multiple endpoint responses
  check(responses[0], { 
    'Post done': (r) => r.status === 200,
    'response time is acceptable': (r) => r.timings.duration < 500 
  });

  check(responses[1], { 
    'Crocodiles loaded': (r) => r.status === 200,
    'response time is acceptable': (r) => r.timings.duration < 500 
  });

  let failure_respose = http.post('https://test-api.k6.io/auth/basic/login/', { 
    username: 'test',
    password: 'wrong_password'
  });
  if (failure_respose.status !== 200) {
    loginFailures.add(1); // Increment the counter for failed logins
  }
  check(failure_respose, {
    'status is 403': (r) => r.status === 403,
    'response time is acceptable': (r) => r.timings.duration < 500
  });

  // simulate user activity
  sleep(1);
}