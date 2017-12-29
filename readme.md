
#Introduction

This website is intended to advertise a Minecraft server called CRAFT412 that gives a variety of different information about the Minecraft server.
It can also allow user intereaction, as opposed to merely being a static website.

The design of the website will include a number of different pages, rather than being a SPA (single page app). This allows the code to be more maintainable
and will give a more uniform structure to the code.

#Photoshop Design

Here you can see the photoshop design mockups

* [Desktop Design](https://github.com/GR412/ctec3905-website/blob/master/photoshop/desktop-size-design.png)
* [Mobile Design - Hidden Nav](https://github.com/GR412/ctec3905-website/blob/master/photoshop/mobile-size-close-nav-design.png)
* [Mobile Design - Open Nav](https://github.com/GR412/ctec3905-website/blob/master/photoshop/mobile-size-open-nav-design.png)

#Pages 

The pages will be the following in order left - right or top - bottom depending on the orientation.

1. [Home](https://gr412.github.io/ctec3905-website/index.html)
2. [Status](https://gr412.github.io/ctec3905-website/status.html)
3. [Info](https://gr412.github.io/ctec3905-website/info.html)
4. [Gamemodes](https://gr412.github.io/ctec3905-website/gamemodes.html)
5. [Rules](https://gr412.github.io/ctec3905-website/rules.html)
6. [Vote](https://gr412.github.io/ctec3905-website/vote.html)
7. [Contact](https://gr412.github.io/ctec3905-website/contact.html)

Each page will now be discussed in detail.

###### Home

The homepage will be the default landing page of the website and will include a slideshow banner at the top that will showcase two images of the server 
spawn hub and the gamemodes of the server. It will also detail the current version that the server is running on and what gamemodes area available. 
There will also be an embedded YouTube video that will give an introduction of the server in video format. This is the offical tralier of the server.

###### Status

This is a relativity simple page, that provides an insight into when the server will be running and at what times. However the main feature of this 
page is to indicate when the server is online. This is achived by using HTML code from (MineServers.org) that displays if the server is offline/online, 
how any players are on, server rank and how many votes the server has. The HTML code enables these features within an image for convenience.

###### Info

This page will have the most content on. The first part will detail things such as the right of staff to monitor players susspected of breaking the rules 
as well as the server backup intervals. There will also be an aknowledgement that the server is still under development therefore they may be issues. 
The next section will be images of all the staff members and will detail the staff members in-game name as well as their role on the server. It is hoped
that this feature will allow players to idenify members of staff in game in case they need help with something. The last section will provide an image
gallery of the server, this will enable users to click a series of small thumbnail images in order to change a larger preview image. This image gallery
will allow players to see the server in image format so they can see what the server looks like before they join. 

###### Gamemodes

This page is intended to show each gamemode that is on the server. Each gamemode will have it's own banner and will provide information about the gamemode.
This information will include the objective of the gamemode and and commands that are available to use to enchance the gaemplay. There will also be a list
of features and services as well as any restrictions on that gamemode. Currently the server only has one gamemode, but more gamemodes will be added as the
server develops further.

###### Rules

This page will detail all of the rules of the server as well as the punishments if the rules are broken. Rules will be split into global rules and specific 
gamemode rules. Global rules follow across the entire server on all gamemodes, whereas gamemode rules will only follow on that paticular gamemode. 

###### Vote

This page will simply allow users to vote for the server by clicking a link that will redirect them to a voting page on a number of different Minecraft 
hosting websites. These will include [Planet Minecraft](https://www.planetminecraft.com/server/craft412-2689518/vote), [MinecraftServers](http://minecraftservers.org/vote/474590), 
[Minecraft Server List](http://minecraft-server-list.com/server/415372/vote/) and [TopG](https://topg.org/Minecraft/in-429519).

###### Contact

This page will contain a contact form that allows a user to enter their playername, email address and choose a dropdown list of options, as well as a 
textarea to give details of the users request. When the user presses the sybmit button there should be a dialogue that aknowledges that the user submitted 
the form. It should also be noted that currently the form doesn't do anything. However late ron I intend to add some backend php to allow the form to send 
an email to the staff members.

###### Page Ordering

The ordering of the pages reflects the order of importance, with the more important pages being on the left or top depending on if the navigation is horizontal
or vertically aligned.

# Website Layout

The layout of the website will be consistant across all pages, this consistancy will be acheived by having a footer across the bottom of each page that gives 
details of the author of the website including social media links. Each page will also have a header, that details the address to be able to join the server, 
a link to the discord voice chat server, the CRAFT412 logo as well as a navigation bar to enable a user to visit other pages across the site.

## Responsive Design

This website has been designed with a responsive design in mind, and has been designed with a mobile first approach, which then scales up as the screen width 
increases. This ensures the websites content will be displayed correctly at mobile, tablet and desktop sizes.

###### Responsive Header

The header is the most important aspect of the website that needs to scale. This is acheived by ensuring at desktop size the navigation bar is presetned 
as a horizontal line in the header for easy access. At tablet and mobile size it's presented as a vertical line that is initially hidden until a user clicks the 
button to show the navigation bar. This saves on space at smaller screen sizes, as the navigation bar can take up a lot of space. It should also be noted that at 
tablet and mobile size the server IP and discord links are hidden. This is because a user isn't going to be able to play Minecraft or join Discord on any device 
but a desktop or laptop PC. It also saves on space in the header.

###### Responsive Footer and Other Content

Most of the other content in the website will simply grow and shrink and stack on top of one another in order to fit as the screen width gets smaller.

# Coding References

There are some instances where outside help was needed in order to fulfil a part of the websites design. One such bit of help was in regard to some JavaScript 
to control the image gallery. This code came from Stack overflow, where i asked a question in regard to using JS to allow a user to click a thumbnail image 
to change a larger preview image. The source can be seen [here](https://stackoverflow.com/questions/47980232/javascript-changing-preview-image-by-clicking-a-thumbnail-image-with-addeventl). 

There were also some other sources that I used from the module GitHub page. These sources include a [Google Map API](https://github.com/CTEC3905/08-lab-json-ajax/tree/googlemaps),
[responsive design navigation] (https://github.com/CTEC3905/04-lab), [JavaScript - Form Acknowledger](https://github.com/CTEC3905/03-lab-javascript-1).

[This source](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) was also used in order to aid with the use of Flexboxes for the CSS layout.













  





 