# JavaScript Sandbox

1. Create a project

    1.1. Inside the project folder
    ```shell
    npm init
    ```

    1.2 Change/Include on `package.json` the `start` script
    ```json
    "scripts": {
        "start": "node index.js"
    },
    ```

2. Create and expose function
```javascript
function main() {
    return 'Hello World!';
}
...
module.exports = { main };
```

3. Include unit test to project ([jest](https://jestjs.io/docs/getting-started))

    3.1 Include jest
    ```shell
    npm install --save-dev jest
    ```

    3.2 Change/Include on `package.json` the `test` script
    ```json
    "scripts": {
        "test": "jest"
    },
    ```

    3.3 Create test file `index.test.js`
    ```javascript
    const { main } = require('./index');

    test('main function should return Hello World', () => {
        expect(main()).toBe('Hello World!');
    });
    ```

4. Execute project
```shell
npm start
```

5. Execute tests
```shell
npm test
```