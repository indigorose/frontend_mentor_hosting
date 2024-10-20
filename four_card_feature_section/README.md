# Frontend Mentor - Four card feature section solution

This is a solution to the [Four card feature section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot

![Desktop Version](/four_card_feature_section/images/Desktop_Four%20card%20feature%20section.png)

![Mobile Version](/four_card_feature_section/images/Mobile_Four%20card%20feature%20section.png)

### Links

- Solution URL: [GitHub](https://github.com/indigorose/frontend_mentor_hosting/tree/main/four_card_feature_section)
- Live Site URL: [Live Site](https://effervescent-brigadeiros-94a24e.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

This challenge extended my knowledge of flexbox. The initial mobile or small screen styling kept the flexbox of the four cards simple at

```css
.container {
  display: flex;
  flex-direction: column;
}
 ```

When working on the desktop version, the middle cards were placed within a wrapper to maintain the column flex direction with the container moving the `flex-direction: row;` layout.

### Continued development

Again these are basic initial designs and as the complexity of the challenges grow, CSS grid will probably become the more dominant layout feature.

The next challenge focuses on CSS grid for the desktop layout.

## Author

- Website - [Karen Roberson](https://krobertsondev.netlify.app/)
- Frontend Mentor - [@indigorose](https://www.frontendmentor.io/profile/indigorose)
