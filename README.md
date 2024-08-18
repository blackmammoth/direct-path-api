<p align="center">

  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>

</p>

# Direct Path API

## Description
Direct Path API is a scalable API built with the [Nest](https://github.com/nestjs/nest) framework. This project serves as the backend for an application that provides users with step-by-step instructions for obtaining different documents required for various services, such as government IDs, passports, and other official documentation.

## Installation
To get started with the project, clone the repository and install the dependencies:
```bash
$ git clone https://github.com/blackmammoth/direct-path-api.git

$ cd direct-path-api

$ npm install
```
## Running the app

You can run the application in various modes:
```
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

To add, update, and delete instructions, you will need to get an access token from the `/auth/login` endpoint. You can use the following cURL command to get an access token:
```bash
curl --location --request POST 'api-endpoint/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "admin",
    "password": "123456"
}' --insecure
```

## Test
```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Environment Variables
```env
MONGODB_URI=<YOUR MONGODB URI>
JWT_SECRET=<YOUR JWT SECRET>
AUTH_USERNAME=<YOUR AUTH USERNAME>
AUTH_PASSWORD=<YOUR AUTH PASSWORD>
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Stay in touch
- Author - haileyesusofficial@gmail.com
- Telegram - @code_updates


// TODO
- [ ] Add Caching