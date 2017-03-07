# FoodCoach-client

> Frontend web-client for FoodCoach platform.

This is the frontend part of the FoodCoach platform (the fancy webpage).

## vue.js

The client application is built with [vue.js](https://github.com/vuejs/vue)
which is a JavaScript framework. This handles all automatic dynamic
updating of the page. For detailed explanation on how things work, checkout
this [guide](https://vuejs.org/v2/guide/).

## Bootstrap 3

To make the application responsive and just generally make life easier we use [Bootstrap 3](https://github.com/twbs/bootstrap) to align stuff on
the different pages. This takes care of moving things around depending on the
size of the browser window (laptop, mobile, tablet etc.)

## PaperKit

To make the standard Bootstrap stuff less boring and generic we use this
nice [UI-kit](https://github.com/timcreative/paper-kit) to spice things up.
It's all loaded and up and running, replacing the Bootstrap classes so nothing
needs to be done really. Just nice to know why everything is so BEAUTIFUL :heart_eyes:

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Code Style

Since JavaScript is a complete mess the project uses
[ESLint](https://github.com/eslint/eslint) to keep track of the code style.
When an error is made (if you use _"double quotation"_ instead of _'single'_
on Strings for example), you get a big error in the browser telling you to
correct your mistake. This is not errors that make the code not run, instead
they are there to make to code look nice and keep a consistant style.