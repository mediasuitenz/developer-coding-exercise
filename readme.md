# Media Suite Coding Exercise
We’d like you to build a blogging platform!

This is a test of basic web development skills - a simple client and server.  We do this to check for a minimum required skill level, which can vary based on the position, and to give us something to talk about in the interview.

Please spend no more than two hours on this task.  We respect your time far too much to ask for more than that.  If you don’t finish, that’s fine, we’ll talk through what you have completed.

Please fork [https://github.com/mediasuitenz/developer-coding-test](https://github.com/mediasuitenz/developer-coding-test) and either email us a link to your public repo or zip up the source code and send it in.  Please don’t include any `node_modules` folders, we'll regenerate dependencies as part running the code.  If you use Django and pull in extra dependencies, then please update the `requirements.txt`.

If we can’t figure out how to get your application running, it’s been a waste of your time, so please include any instructions we might need to launch it.

## The Output
It's okay for this application to look very basic. For example...

### The list of posts
![List of Posts](./posts.png)

### An individual post
![An individual post](./post.png) 

## The Server
* The `/assets/posts` folder contains text files with blog data in them.  The file name is the URL slug.
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
    content: “... markdown content…”,
    tags: ['word1', 'word2', ...]
  }
}
```
* Create a server API GET end-point that returns the list of all blog titles, and allows you to link to the individual posts in your client.
* Please build the server in either Express or Django.

## The Client
* The client code should consume JSON data from the API and present it as two pages: a List of Posts and an individual Post.
* The tags should only be displayed on Post page, not on the List of Posts.
* Please build the client in whatever Javascript technology you feel most comfortable with; native JS, Ember, React, etc.
* Don’t worry about css, HTML mark-up, etc.  It purely needs to demonstrate that the javascript is consuming your API and turning the json into useful content on-screen.
* We recommend you start by building the API to provide data to the client, but leave out the tags functionality initially.  Come back and complete the tags when the rest of the application is working.
