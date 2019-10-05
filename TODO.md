
# Greystone Place Website Build 2019 - TODO and Notes:

## Project Notes
This is a [Gatsby site](https://www.gatsbyjs.org/).  To run a gatsby site, run `gatsby-develop` in the command line for local development at [localhost:8000](http://localhost:8000/).
Committing and pushing changes to Github will start a fresh build at [https://greystoneplace.ca](https://greystoneplace.ca)

## Todo
1. Test Event tracking for Google Analytics
2. Test Fallback link in for video (see index.js page)
4. Figure out how to make main video accessible
    1. Here is a link to how to build your own controls to make video media accessible
* Figure out how to make slideshows more accessible
* Implement a form CAPTCHA that's accessible: https://webaim.org/blog/spam_free_accessible_forms/
* Resolve build 'Warnings' via Gatsby develop
* Speed test site, how?
* add a sitemap (XML): https://www.gatsbyjs.org/docs/creating-a-sitemap/
* make site service worker friendly: https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-offline#notes
* make PWA/include manifest images (Image-39)
* Figure out why Google Maps does not work in duplicate very well (e.g: the Map pin only shows up one at a time)
* Update design of website!
* explore this plugin: https://www.gatsbyjs.org/packages/gatsby-plugin-page-transitions/

### SEO
* add microdata to site

## Tests
1. Action: Sent comment form website contact form including all information. Result: the comment form was instantly received in the Greystone Place Gmail account.
2. Action: Sent an email from my personal gmail account to apply@greystoneplace.ca. Result: the email was received in the Greystone Place Gmail account.
3. Action: Downloaded and filled out application form. Send new email with attached form. Result: Email was received with included attachment in the greystone gmail account.

## Accessibility
* nav is accessible
* make image carousel accessible
* make site accessible: https://www.gatsbyjs.org/docs/making-your-site-accessible/
* accessible carousels: https://www.w3.org/WAI/tutorials/carousels/
* Practice making modal accessible, add to portfolio skillset/example: https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex#modals_and_keyboard_traps
* resources for accessibility: https://www.gatsbyjs.org/docs/making-your-site-accessible/
* access linting plugin: https://github.com/evcohen/eslint-plugin-jsx-a11y

## Highlights
- custom fonts
- streaming video

## Abstract
- form editor hints: https://medium.com/productivity-freak/my-atom-editor-setup-for-js-react-9726cd69ad20
- Is there an app that I can use to track time while a project is open/active? I want to know how long I spend on a project and want a brainless way to track it accurately.
- Cool article for more accurate GA: https://chaseonsoftware.com/netlify-gatsby-analytics/
