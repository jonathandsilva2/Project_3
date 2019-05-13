Project 3 - InstaNews
=======

## **Please read me**

I set out to complete all the minimum requirements for this project.

For the design specifications, I declared the base font size and family using SASS variables.

In terms of development workflow requirements, I committed an appropriate number of commits, with an appropriate .gitignore file, which specifies to not upload the template images of the website. The attached readme document contains appropriate content formatted using markdown. I removed extra code and there are no console errors or errors within gulp. 

In terms of HTML requirements, I used syntactically-valid HTML5 code.

In terms of CSS, I believe I paid close attention to use CSS to mimic the provided mockups of the instants website. I used a combination of variables and mixins to condense my CSS. I also linked a CSS reset within the head of the HTML document. I incorporated a mix of grid, flex-box and box model properties for my webpage. I used @font-face to incorporate custom fonts, and optimized all media breakpoints using mobile-first.

For javascript, I used a variety of functions and methods to achieve my goals. I used 2 for loops. The first loop created an array of articles that contained the first 12 articles that have a useable picture. The 2nd loop called in the array created from the first loop and appends all the relevant information to the webpage. 

In terms of query, I incorporate the ajax method, along with success and fail methods, to pull in data from the New York Times API. Within the success function, I added new classes to all the header elements which will reposition the header elements to its new state. I also added the loader GIF in the success function, and I allowed the loading image to stay on the screen for at least 0.2 seconds due to my setTimeout function. **In my testing, the browser sometimes doesn't load the GIF, I was unable to resolve this issue.**

In terms of stretch goals, the plugin that I found for the custom styled menu bar was giving the console too many errors, and I did not want to compromise failing the minimum requirements, so I chose to omit the plugin.
I was able to adjust the header when articles load into the webpage.

If I had more time, I would spend it on making the animation that hides the article abstract on hover. I spent a lot of time on this, however my results were not the desired outcome


