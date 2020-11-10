# Media Suite Coding Exercise
We’d like you to build a blogging platform!

This is designed as a relatively simple exercise to get some code we can talk about in our technical interview. Not all developers have code that they can share with us due to IP restrictions, and this provides a common scenario across all candidates that provides some level of objective measure.

Please spend no more than two hours on this task.  We respect your time far too much to ask for more than that.  If you don’t finish, that’s fine, we’ll talk through what you have completed.

Please fork [https://github.com/mediasuitenz/developer-coding-exercise](https://github.com/mediasuitenz/developer-coding-exercise) and either email us a link to your public repo or zip up the source code and send it in.  Please don’t include any `node_modules` folders, we'll regenerate dependencies as part running the code.  If you use Django and pull in extra dependencies, then please update the `requirements.txt`.

If we can’t figure out how to get your application running, it’s been a waste of your time, so please include any instructions we might need to launch it.

Please ask any questions you may have of your Media Suite contact. This is not a test of your ability to understand our written instructions, it really is just an opportunity to write some code.

## The Output
It's okay for this application to look very basic, though this is up to you. For example...

### The list of posts
![List of Posts](./posts.png)

### An individual post
![An individual post](./post.png)
**NOTE**: The post files are in Markdown format, but they should render in the browser as html.

## The Server
* The `/assets/posts` folder contains text files with blog data in them. The file name is the URL slug.
* The content of each file will be in the following format
	```
	===
	Title: Blog Title
	Author: Author Name
	Slug: same-as-filename
	===
	# Markdown content will live here
	This is some markdown paragraph text
	```
* Create a server API GET endpoint that returns the blog data from these files, including tags representing the most common 5 word in the article.  Tags should have stop words from a provided list and mark-up from the markdown removed.  The return data format should look like this (values are representative only):
```
{
  post: {
    content: “...blog post content...”,
    tags: ['word1', 'word2', ...]
  }
}
```
* Create a server API GET end-point that returns the list of all blog titles, and allows you to link to the individual posts in your client.
* Please build the server in either Express or Django.

## The Client
* The client code should consume JSON data from the API and present it as two pages: a List of Posts and an individual Post. The URL should identify the page the user is on - i.e. a refresh should return the user to the same page, not return them to an initial location.
* The tags should only be displayed on Post page, not on the List of Posts.
* Please build the client in a Javascript client framework - e.g. Ember, React, Vue.js etc.
* Don’t worry about styling/making the site look good. It purely needs to demonstrate that the javascript is consuming your API and turning the json into useful content on-screen.
* We recommend you start by building the API to provide data to the client, but leave out the tags functionality initially.  Come back and complete the tags when the rest of the application is working and if you have the time.
