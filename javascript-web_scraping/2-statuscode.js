#!/usr/bin/node
const request = require('request');

const url = process.argv[2];

/// Perform a GET request and display the status code
request.get(url).on('response', function (response) {
    console.log(`code: ${response.statusCode}`);
  });