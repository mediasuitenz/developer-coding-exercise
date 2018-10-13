const express = require('express')
const { getTopWords } = require('./utils/tags')
const app = express()
const rootPostDir = './server/assets/posts'

/**
 *  Returns the detail of an individual post in json, formatted as:
 * {
 *  post: {
 *    content: <article's markdown content>,
 *    tags: <array of 5 top tags for the post>
 *  }
 * }
 */
app.get('/post/:slug', function (req, res) {
  // ... fill in your own code ...
})

/**
 * Returns a json array of all posts, formatted as:
 * [
 *  {
 *    title: <article's title>,
 *    slug: <article's slug>
 *  },
 *  ...
 * ] 
 */
app.get('/posts', function (req, res) {
  // ... fill in you own code ...
})
 
app.listen(3000, function () {
  console.log('Dev app listening on port 3000!');
})