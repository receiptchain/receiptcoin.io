# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) 
and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.4.6] - 2017-12-10
### Add
- Contact #8 to block-contact.html
- Feature #14 to block-feature.html



## [1.4.5] - 2017-11-22
### Add
- Team #4 and #5 to block-team.html

### Update
- Plugins (aos, lity, shuffle, typed)
- Feature #7 to be responsive and display in small screens
- Minor improvements in CSS and JS

### Fix
- Submenu had some issues with long menu text


## [1.4.4] - 2017-11-02
### Add
- Blog page with sidebar
- Support data-length and data-radius options for the particle element
- Pagination section to the doc-element.html

### Update
- Feature #3 with better layout for small devices
- Enable AOS animation on mobile devices


## [1.4.3] - 2017-10-12
### Update
- Minor css improvements


## [1.4.2] - 2017-09-28
### Fix
- Javascript code wasn't running on version 1.4.2


## [1.4.2] - 2017-09-24
### Fix
- Fullscreen background video wasn't covering whole the header in Edge and IE browsers
- Blog pages (blog-grid.html and blog-list.html) had issue in IE11. blog-list.html needs html change to support IE11.


## [1.4.1] - 2017-09-17
### Added
- Classic blog layout
- Mega menu (See block-topbar.html#topbar-6)

### Updated
- Disable fixed image (.bg-fixed) in small screen devices, since iOS can't render a fixed image with cover background-size.


## [1.4.0] - 2017-08-21
### Added
- Several pricing blocks
- Several contact blocks
- Support 2 columns menu for topbar

### Updated
- Now page-demo.html sends email
- Use PHP Mailer library to send emails
- Slightly darken the text color and border of inputs for better readability

### Fixed
- The 3rd level of topbar menu had problem in mobile devices


## [1.3.3] - 2017-07-24
### Added
- New footer samples, see block-footer.html
- New topbar samples, see block-topbar.html
- Third menu level for topbar navigation
- Possiblity to open topbar menus with click instead of hover (add .nav-toggle-click to .topbar-nav)


## [1.3.2] - 2017-07-05
### Fixed
- Template wasn't displaying correctly on Safari


## [1.3.1] - 2017-07-02
### Added
- Drawer component (click bars on demo-gmail.html)

### Fixed
- Template wasn't displaying correctly on Safari
- Double slide up/down of navbar on mobile devices
- Scroll down for navbar on mobile devices when there are many menu items

### Updated
- Using imagesLoaded plugin to initialize shuffle.js with image properly
- Several changes to have a better responsive pages


## [1.3.0] - 2017-06-26
### Added
- Shopping pages
    + Product list
    + Single product page
    + Cart overview
    + Checkout
- How it works page
- Press page
- Portfolio blocks page
- Portfolio page
- Project page
- Shuffle.js to vendors
- Particles with dark color
- Now .topbar accepts .topbar-expand-xl class to display hamburger menu in all screens
- Modal dialogs to doc-component.html

### Updated
- Remove scrollbar from body tag in small screen devices when menu is open
- Footer is always at bottom of the page even with small content
- Header of most pages has updated
- Some tweaks in scripts and styles
- Images from unsplash.com are included in the download package


## [1.2.5] - 2017-06-12
### Added
- Screen shots sample to block-feature.html (feature-12)
- Vertical tab sample to block-feature.html (feature-13)

### Fixed
- .btn-white.btn-outline didn't has contrast on .topbar-sticky
- Animations wasn't firing in Safari sometimes

### Updated
- Better code for setting values in sendmail.php
- contact.html page had vertical padding problem


## [1.2.4] - 2017-06-05
### Added
- Coming soon page
- Subscribe blocks are now ready to integrate with Mailchimp

### Updated
- Better UI for countdown component
- Some CSS improvements for small screen devices
- jQuery to v3.2.1
- Swiper to v3.4.2
- Lity to v2.2.2

## [1.2.3] - 2017-05-25
### Fixed
- Some inconsistency in logo placement
- Parallax (e.g. demo-app.html header) wasn't working on iOS devices

## [1.2.2] - 2017-05-21
### Added
- Demo: Slack
- Demo: Zendesk

## [1.2.1] - 2017-05-16
### Fixed
- Pages had some extra horizontal scroll
- Some height of topbar was hiding while scrolling in mobile devices
- Navigation couldn't close on iOS devices
- Some demos had unnecessary menu bars which removed
- Topbar menu for in-page navigation wasn't closing after click on link
- Minor changes to gruntfile.js to support style.scss file (commented)

## [1.2.0] - 2017-05-15
### Added
- Demo:  Bootstrap
- Blog:  List style
- Block: Content
- Block: Call to action
- Block: Feature
- Block: Textual features
- Block: Partners
- Block: Signup forms
- Block: Subscribe forms
- Block: Team and people
- Block: Testimonial
- Icon:  Et line font icons
- Some new elements and components

### Fixed
- Google Analytics wasn't working before

### Updated
- blog.html renamed to blog-grid.html
- Remove some unnecessary js codes
- Some tweaks in styles


## [1.1.0] - 2017-05-08
### Added
- Demo GitHub
- Demo Mobile App
- Header Particle
- Header Parallax
- Component Testimonials
- Google Play and App Store badge

### Updated
- Index has new header
- Better blockquote UI
- Some tweaks in styles


## [1.0.1] - 2017-05-02
### Updated
- Index and Feature pages update
- Some tweaks in styles


## [1.0.0] - 2017-04-30
### Added
- Initial release!

