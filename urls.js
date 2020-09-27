module.exports = {
    qa: 'http://the-internet.herokuapp.com/',
    dev: 'https://www.google.com/',
    staging: 'https://www.norway.no/en'
}

/**
 * If you want to work with many urls in env you need to remember that:
 * cross-env package for managing the .env file/variable irrespective of platorm (windows/mac)-
-- npm install --save-dev cross-env
-- npx cross-env ENV=qa npm run test

Also, we can set this command in the package.json file against the scripts like:
     - "test" : '"npx cross-env ENV=qa wdio"
 */