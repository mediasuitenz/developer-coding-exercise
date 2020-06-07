===
Title: I’m betting on SPAs
Author: Jon Hollingsworth
Slug: Im-betting-on-SPAs 
===
# A brief history of the web
Back in the hazy days of 1999, Microsoft introduced an ActiveX component into Internet Explorer 5 that for the first time allowed Javascript within a page to fetch additional content from the server without reloading the entire page. These were heady days, and I remember writing a lot of Internet Explorer-only applications that leveraged this technology to load specific regions of content in response to user interactions.

We never considered writing a whole application like that however; navigation still fetched a brand new page from the server, causing a full reload. There were still multiple `<SCRIPT>` tags per page to load the different Javascript files required, and as this was before build pipe-lines, none of it was minified or compressed.

By 2005, the phrase *Single Page App* (SPA) had started to surface. The entire application could be loaded once, then handled by Javascript on the client. The only round-trips required to the server would be to fetch specific pieces of data used to generate content. 2010 saw the release of BackboneJS and AngularJS, two frameworks that not only provided the building blocks to construct SPAs more effectively, but also provide some organisation for the mountain of Javascript developers had started to write. In 2011 SproutCore 2.0 was renamed to EmberJS, 2013 saw the first version of React, and in 2016 the new version of Angular was released.

SPAs have come in for a lot of justified criticism, in part due to the heavy churn we saw in Javascript frameworks throughout those six years from 2010, and the fact that for a long while many of them offered an objectively worse experience than a traditional server rendered app. However, the last few years have seen a consolidation of ideas, less large breaking changes and a general maturing of the platform.

Are we now ready to see SPAs replace traditional server side rendered (SSR) apps wholesale? 