---
title: "Cranium.css"
shorthand: "cranium"
layout: project
summary: machine learned, uniquely tailored web UI
techs:
  - css3
  - golang
  - html
  - js
  - python
---
cranium.css was the hardest, most ambitious hackathon project I've done.

The idea is that people interact with websites in different ways and care more about certain parts of a site than others. To better present content, websites should take note of how users interact with the site and then change the UI to tailor to the user. Rather than having one layout for everyone, the site is specifically tailored to each visitor.

cranium.css is implemented as a CSS framework that a site creator builds their site with. All it takes is tagging certain elements with an "imp" (important) class and hosting the site on a cranium.css server. From there, the server processes the site's HTML and spits out unique ID's for each "imp" element. When a user visits the site, they get tagged with a user ID cookie. A MongoDB instance associates user ID's with CSS attributes for all "imp" elements.

When a user visits the site, certain behaviors are tracked for each "imp" element, such as how many times the element was clicked, how long the element was in view, and how long the element was hovered over. When the user leaves the site, all behavior information is POST'ed and then a run through a support vector machine to classify each element as good or bad for that user. If an element was bad, it gets run through a genetic algorithm that takes attributes from good elements and applies them to the bad element. The next time the user visits the site, the new CSS attributes are served.

cranium.css was crazy. If you're brave, you can check out the code on [GitHub](https://github.com/raymondjacobson/cranium.css).