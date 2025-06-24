import { test, expect } from '@playwright/test';

test('API test 1 get', async ({ request }) => {
    const response = await request.get('api/users/2');

    expect(response.status()).toBe(200);
    expect(await response.text()).toContain('janet.weaver@reqres.in');
})



test('API test get Single user', async ({ request }) => {

    const odpowiedzSerwera = await request.get('api/users/2');

    expect(odpowiedzSerwera.status()).toBe(200);
    expect(await odpowiedzSerwera.text()).toContain('janet.weaver@reqres.in')


})


test('API test POST', async ({ request }) => {

    const response = await request.post('/api/users', {
        data: {
            name: 'John Doe',
            job: 'student',
        }
    });

    
    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    expect(responseBody.name).toBe('John Doe')
})




test('API test POST Login', async ({ request }) => {

    const response = await request.post('/api/login', {
        data: {
            email: "eve.holt@reqres.in",
            password: "cityslicka",
        }
    });

    
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody.token);
})


// test('api test 2 create', async ({ request }) => {
//     const response = await request.post('api/users', {
//         data: {
//             "name": "Test",
//             "job": "student"
//         }
//     });

//     expect(response.ok()).toBeTruthy();

//     const responseBody = await response.json();
//     const name = (responseBody.name);

//     expect(name).toBe('Test')

// })


// test('api test 3 - put', async ({ request, page }) => {
//     const response = await request.put('api/users/2', {
//         data: {
//             "name": "Test",
//             "job": "student"
//         }
//     });

//     expect(response.ok()).toBeTruthy();

//     const responseBody = await response.json();
//     const receivedName = (responseBody.name);
//     expect(receivedName).toBe('Test')

// })

// test('console listener', async ({ page }) => {


//   const warnings = [];

//   page.on('console', msg => {
//     if (msg.type() === 'warning') {
//       warnings.push(msg.text());
//     }
//   });

//   await page.goto('/');

//   const matchingWarning = warnings.find(text =>
//     text.includes("Unrecognized feature: 'ambient-light-sensor'")
//   );

//   expect(matchingWarning).toBeTruthy();

// })


// test('wait for GET po kliknieciu', async ({ page }) => {
//   const promise = page.waitForEvent('request', request =>
//     request.url() === 'https://reqres.in/signup' &&
//     request.method() === 'GET'
//   );

//   await page.goto('/');

//   await page.click('.btn-primary');

//   const request = await promise;
//   console.log('Request:', request.url(),' method: ', request.method());
// });