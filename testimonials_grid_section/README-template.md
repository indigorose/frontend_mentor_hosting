# Frontend Mentor - Testimonials grid section solution

This is a solution to the [Testimonials grid section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot

![Desktop Version](./images/Desktop%20Screenshot.png)

![Mobile Version](./images/Mobile%20View%20Screenshot.png)

### Links

- Solution URL: [GitHub](https://github.com/indigorose/frontend_mentor_hosting/tree/main/testimonials_grid_section)
- Live Site URL: [Live Site](https://lovely-puffpuff-d5d65c.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

This challenge definitely pushed my knowledge of `grid` and positioning of the testimonial cards.

In the mobile view, it was simple to use flexbox and `flex-direction: column` for the initial card layout.

However the issue came when wanted to use grid. I have previously used the site [Layoutit!](https://grid.layoutit.com/) to design my grid designs.

At first I thought the horizontal cards would be contained within their own `div` with the fifth card being vertical on the end.

This took a long time to correct as doing so created various width and height card sizes. It wasn't until I stumbled on a css video about grid that finally helped and I was able to refactor my code removing the unnecessary parent child container elements and more seamless design.

As I completed the challenge without using figma files, this is as close I could get.

I am also building on my css custom properties, I mainly use them for the colourways, as it can become tedious typing out hsl colours for each html element.

Maybe with the next I will look into SASS and Tailwind.

### Continued development

Will look at using more grid style challenges and designs going forward to understand `span` and `grid-area` on bento style layouts.

### Useful resources

- [Learn CSS Grid the easy way](https://youtu.be/rg7Fvvl3taU?si=LgBMYVQxW4URRQk8) - This helped with the bento layout in the desktop view and the simplification of my html layout. I have watched Kevin's other videos in the past and his intro to responsive layouts in the past. I will probably revisit.
- [Layoutit!](https://grid.layoutit.com/) - This is my initial site that I use for my grid layouts, I will continue to use and experiment to develop my grid knowledge.

## Author

- Frontend Mentor - [@indigorose](https://www.frontendmentor.io/profile/indigorose)
- Twitter - [@Coding_Indigo](https://twitter.com/Coding_Indigo)
