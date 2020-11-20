Front End Web Dev Final Project:
Delphi's Gallery
created by Drew Miles

This webpage is a gallery for displaying interesting things you can find around the web.  You can use the "artists" or "genres" pages to limit the things you see in the gallery to things based on that parameter.

The 3 requirements I intend to fulfill are:
CSS:
1. A navigation menu that expands and collapses properly at desktop and mobile sizes, such as by switching between vertical and horizontal, or is opened by clicking the “hamburger” menu item.  The nav menu is open/closed using a hamburger icon on mobile devices, arraged in a row under the website title on tablets, and inline with the website title on desktop screens.

2. Use Flexbox or CSS Grid to organize content areas based on mobile or desktop views. For example, swapping from a single column layout to a two-column layout on desktop.  In this case the header, gallery items and footer all use Flexbox.

3. Use “:nth-child” or “nth-of-type” to style a series of elements on your page - for example, change the background color for every other row in a table.  In this case the gallery items are framed by alternating black and gray borders via nth-of-type css rules.

JX:
1. Create and populate a JavaScript array with one or more values and display the contents on your page.  The gallery items are populated by an array in directory.js and the links in the nav menu are populated using an array in nav.js