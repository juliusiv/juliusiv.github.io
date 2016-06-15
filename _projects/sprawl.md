---
title: "Sprawl"
shorthand: "sprawl"
layout: project
summary: BitTorrent fueled webpage serving
techs:
  - chrome
  - golang
  - nodejs
---
My second hackathon and second time at Hack Upstate. Hacks are always interesting to me because I don't feel like a terribly proficient web developer but these projects always seem to lean in that direction. Regardless, my interest in the area is always piqued when I leave and I always come away having learned something.

This time around we made sprawl. sprawl is an attempt at "distributing" the web. What this means to us is taking some of the load off servers and distributing that load to clients. The idea behind implementing this was to use a new library called WebTorrents which wraps some BitTorrent protocol things into a Javascript library. We then used this to have clients torrent and seed static assets from webpages.

To be honest, we're not sure if this would actually decrease client load-time or serving time for servers. We think there's some critical mass when times will actually start to decrease but it was a hack so we never took it that far. We've discussed building this out, directly into Chromium, in the future but we'll see what happens. Regardless, the judges liked the idea and the implementation and we left Hack Upstate Fall 2014 with another first-place title.