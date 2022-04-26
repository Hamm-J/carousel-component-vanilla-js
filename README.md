# Carousel Component Vanilla JS

## Description

A carousel of images that the user can rotate left or right by clicking on the respective left and right buttons.

This component was designed with a mobile first approach and supports various
mobile view ports. The carousel also supports looping; the user can
continously click a single button and the carousel will continue rotate without end. For viewports that exceed a width of 2400px, the carousel no longer occupies the total viewport.

### Technologies

To build this component, I used vanilla JavaScript, CSS, and HTML. To create the
carousel I put 5 images into a container with `display: flex` and `overflow: hidden`
on the parents. Then, I adjusted the `width` and `height` accordingly, such that
only a single image could be viewed at a time.

With JavaScript, I accessed the width of the images and initiated a position counter. I
added event listeners to each of the buttons. When the button is clicked, the
image's container is translated on the x-axis according to the image's width.
This gives the illusion that the carousel is turning.

To create the infinite looping, I did a quick trick and duplicated the the first
and the last images in the carousel. I put the duplicate of the last image in the
first position and the duplicate of the first image in the last position. When
the carousel reaches a duplicate image, for instance the duplicate of the first image, the JavaScript checks for this, removes the translate animation, sets the position counter back to the first position, and then adds back the translate animation. By removing the translate animation, the user doesn't visually see the
carousel reset.

### Future Optimizations

- **Optimize image size**: The images I used for this demo are quite large. Each is around 2400px by 3000px. If this were a component for production, I would want to serve the user resized images that match their viewport size. This would decrease the size of the initial payload.
- **Optimize Infinite scrolling**: If this were a production component, I would want to think of another way to create the infinite scrolling that doesn't involved unnecessarily increasing the initial packet size by having 2 extra images. For large images, this could be quite costly on the initial loading speed.

## How to run the project locally

1. Clone the GitHub Repository

```
https://github.com/Hamm-J/carousel-component-vanilla-js.git
```

2. Open `index.html` in your browser of choice. Done!
