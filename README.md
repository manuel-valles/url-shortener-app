# URL Shortener App

A Node.js app with Express, MongoDB (Monk) & Heroku

:link: https://node-shortener-url.herokuapp.com/

## Dependencies

- **Express** is a fast, unopinionated, minimalist web framework for Node. https://www.npmjs.com/package/express
- **Yup** is a JavaScript schema builder for value parsing and validation. Define a schema, transform a value to match, validate the shape of an existing value, or both. Yup schema are extremely expressive and allow modeling complex, interdependent validations, or value transformations. https://www.npmjs.com/package/yup
- **NanoId** is a tiny, secure, URL-friendly, unique string ID generator for JavaScript.
- **Monk** is a tiny layer that provides simple yet substantial usability improvements for MongoDB usage within Node.js. https://www.npmjs.com/package/monk
- **Helmet** helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help! https://www.npmjs.com/package/helmet
- **Morgan** is a HTTP request logger middleware for Node.js. https://www.npmjs.com/package/morgan
- **CORS** is a Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

- `$ npm i express yup nanoid monk helmet morgan cors`

## Heroku

- `$ heroku git:remote -a node-shortener-url`
- `$ git push heroku main` . If this doesn't work, install the Buildpack for Nodejs:
  - `$ heroku buildpacks:set heroku/nodejs`
