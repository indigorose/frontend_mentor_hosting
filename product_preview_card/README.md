# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![Desktop Version](./images/Screenshot%202024-10-07%20at%2020-47-06%20Frontend%20Mentor%20Product%20preview%20card%20component.png)

![Mobile Version](./images/Screenshot%202024-10-07%20at%2020-43-38%20Frontend%20Mentor%20Product%20preview%20card%20component.png)

### Links

- Live Site URL: [Live Site](https://resilient-souffle-bcf436.netlify.app/)
- Solution URL: [GitHub](https://github.com/indigorose/frontend_mentor_hosting/tree/main/product_preview_card)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Previously I tackled this through a desktop first approach, however this proved difficult when trying to work for the smaller screen sizes. I swapped out to a mobile first approach which also allowed to experiment with the `clamp()` function in css for the `font-size`.

```css
.card__header {
   font-size: clamp(1.8rem, 1.377rem + 1.577vw, 3rem);
}
```

This function allowed to have a range of font sizing from `1.8rem` on the mobile devices to `3rem` on the larger screen sizes.

### Continued development

Would be useful to look into how to get better scaling on font sizing and spacing for responsive devices.

### Useful resources

- [Coder Coder](https://coder-coder.com/) - This helped me for css semantics and structure for readability. I used her resources when refactoring my initial code.

## Author

- Website - [Karen Roberson](https://krobertsondev.netlify.app/)
- Frontend Mentor - [@indigorose](https://www.frontendmentor.io/profile/indigorose)
